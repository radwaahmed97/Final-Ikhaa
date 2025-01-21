const Notification = require("../models/Notifications");
const Request = require("../models/Requests");
const User = require("../models/Users");

// Get all unread notifications for the needer
exports.getAllNotifications = async (req, res) => {
  try {
    const neederId = req.user.id; // Get needer ID from authenticated user
    console.log("Fetching notifications for neederId:", neederId);

    // Fetch unread notifications for the needer
    const notifications = await Notification.find({
      needer: neederId,
    })
      .select("message")
      .sort({ createdAt: -1 });

    console.log("Notifications fetched:", notifications);

    // Respond with notifications or an empty list message
    if (notifications.length === 0) {
      return res.status(200).json({
        success: true,
        notifications: [],
        message: "You don't have any notifications.",
      });
    }

    res.status(200).json({ success: true, notifications });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching notifications.",
    });
  }
};

// Mark all unread notifications as read
exports.markAllNotificationAsRead = async (req, res) => {
  try {
    const neederId = req.user.id;
    console.log("Marking all notifications as read for neederId:", neederId);

    // Update all unread notifications
    const result = await Notification.updateMany(
      { needer: neederId, isRead: false },
      { $set: { isRead: true } }
    );

    // Check if any notifications were actually modified
    if (result.matchedCount === 0) {
      return res.status(200).json({
        success: true,
        message: "No unread notifications to mark as read.",
      });
    }

    // Return the number of modified notifications
    res.status(200).json({
      success: true,
      message: `${result.modifiedCount} notifications marked as read.`,
    });
  } catch (error) {
    console.error("Error marking notifications as read:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while marking notifications as read.",
    });
  }
};
