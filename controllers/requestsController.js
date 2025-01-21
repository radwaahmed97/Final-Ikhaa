const Request = require("../models/Requests");
const Notification = require("../models/Notifications");
const Item = require("../models/Items");

// Create a new request once the needer confirms their basket of items
exports.submitRequest = async (req, res) => {
  try {
    const { items } = req.body;
    console.log("Received items", items);

    // Extract neederId from authenticated user
    const neederId = req.user.id;
    console.log("Authenticated user ID", neederId);

    if (!items || items.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No items provided in the request" });
    }

    // check if items available in the database
    for (const item of items) {
      const itemData = await Item.findById(item.itemId);
      if (!itemData) {
        return res.status(404).json({
          success: false,
          message: `Item with ID ${item.itemId} not found`,
        });
      }
      if (itemData.quantity < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient quantity of item with ID ${item.itemId}`,
        });
      }
      itemData.quantity -= item.quantity;
      await itemData.save();
    }

    const newRequest = new Request({
      needer: neederId,
      items: items.map((item) => ({
        item: item.itemId,
        quantity: item.quantity,
      })),
    });

    await newRequest.save();

    // Create a notification for the needer about the submitted request
    const notification = new Notification({
      needer: neederId,
      request: newRequest._id,
      message: `Your request ${newRequest._id} has been submitted successfully. We will notify you once it's status updated, keep an eye on notifications.`,
    });

    await notification.save();

    newRequest.notifications.push(notification._id);
    await newRequest.save();

    res.status(201).json({
      success: true,
      message: "Request submitted successfully",
      request: newRequest,
    });
  } catch (error) {
    console.error("Error submitting request:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Fetch all requests
exports.getRequests = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const requests = await Request.find(filter)
      .populate("needer", "name email phone")
      .populate("items.item", "name description")
      .exec();

    res.status(200).json({ success: true, requests });
  } catch (error) {
    console.error("Error fetching requests:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// fetching requests that are not pending
exports.getDoneRequests = async (req, res) => {
  try {
    // Fetch requests where status is not 'pending'
    const doneRequests = await Request.find({ status: { $ne: "pending" } })
      .sort({ createdAt: -1 })
      .populate("needer", "name email phone")
      .populate("items.item", "name description")
      .exec();

    console.log("Fetched Done Requests:", doneRequests);

    res.status(200).json({
      success: true,
      message: "Done requests fetched successfully.",
      requests: doneRequests,
    });
  } catch (error) {
    console.error("Error fetching done requests:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// remove already updated requests from the archive without updating the database items again
exports.removeArchiveRequests = async (req, res) => {
  try {
    const { requestId } = req.params;

    // Find the request by ID
    const requestToDelete = await Request.findById(requestId).exec();

    if (!requestToDelete) {
      return res
        .status(404)
        .json({ success: false, message: "Request not found" });
    }

    // Delete the request
    await Request.findByIdAndDelete(requestId);

    res.status(200).json({
      success: true,
      message: "Request deleted from Archive successfully",
    });
  } catch (error) {
    console.error("Error deleting request from the archive", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Fetch the latest 10 requests from the database pending status
exports.getLatestRequests = async (req, res) => {
  try {
    const latestRequests = await Request.find({ status: "pending" })
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("needer", "name email phone")
      .populate("items.item", "name description")
      .exec();

    res.status(200).json({
      success: true,
      message: "Latest 10 requests fetched successfully.",
      requests: latestRequests,
    });
  } catch (error) {
    console.error("Error fetching latest requests:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update request status
exports.updateRequestStatus = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body;

    if (!["collected", "refused"].includes(status)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid status" });
    }

    const requestToUpdate = await Request.findById(requestId)
      .populate("needer")
      .exec();

    if (!requestToUpdate) {
      return res
        .status(404)
        .json({ success: false, message: "Request not found" });
    }

    if (status === "refused") {
      // If the request is refused, restore the item quantities
      for (const item of requestToUpdate.items) {
        const itemData = await Item.findById(item.item);
        if (itemData) {
          itemData.quantity += item.quantity;
          await itemData.save();
        }
      }
    }

    // Update the request status
    requestToUpdate.status = status;
    await requestToUpdate.save();

    const notificationMessage =
      status === "collected"
        ? `Your request ${requestId} has been collected and is ready for pickup at the charity.`
        : `Your request ${requestId} has been refused. For more information, please contact the charity.`;

    const notification = new Notification({
      needer: requestToUpdate.needer._id,
      request: requestId,
      message: notificationMessage,
    });

    await notification.save();

    requestToUpdate.notifications.push(notification._id);
    await requestToUpdate.save();

    res.status(200).json({
      success: true,
      message: `Request '${requestId}' status updated to '${status}' successfully`,
    });
  } catch (error) {
    console.error("Error updating request status:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Delete a request and restock the items
exports.deleteRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    // Find the request by ID
    const requestToDelete = await Request.findById(requestId).exec();

    if (!requestToDelete) {
      return res
        .status(404)
        .json({ success: false, message: "Request not found" });
    }

    // Iterate over the items in the request and restock them
    const restockingPromises = requestToDelete.items.map(async (item) => {
      const { item: itemId, quantity } = item; // Use `item` instead of `itemId`

      if (!itemId || !quantity) {
        console.warn(`Invalid item in request: ${JSON.stringify(item)}`);
        return;
      }

      // Find the item in the stock collection and update the quantity
      const updatedItem = await Item.findByIdAndUpdate(
        itemId,
        { $inc: { quantity: quantity } }, // Increment the quantity
        { new: true } // Return the updated document
      );

      if (!updatedItem) {
        console.warn(`Item with ID ${itemId} not found during restocking.`);
      }
    });

    // Wait for all restocking operations to complete
    await Promise.all(restockingPromises);

    // Delete the request after restocking
    await Request.findByIdAndDelete(requestId);

    res.status(200).json({
      success: true,
      message: "Request deleted and items restocked successfully.",
    });
  } catch (error) {
    console.error("Error deleting request and restocking items:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};
