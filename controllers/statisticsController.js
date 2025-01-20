const Request = require("../models/Requests"); // Import the Request schema

// Get statistics based on time filters
const getStatistics = async (req, res) => {
  try {
    // Extract query parameters for filtering (e.g., weekly, monthly, yearly)
    const { filter } = req.query;
    const now = new Date();
    let dateRange;

    // Determine date range based on the filter
    switch (filter) {
      case "weekly":
        dateRange = new Date();
        dateRange.setDate(now.getDate() - 7);
        break;
      case "monthly":
        dateRange = new Date();
        dateRange.setMonth(now.getMonth() - 1);
        break;
      case "yearly":
        dateRange = new Date();
        dateRange.setFullYear(now.getFullYear() - 1);
        break;
      default:
        dateRange = null; // No filter applied
    }

    // Build the query
    const query = dateRange ? { updatedAt: { $gte: dateRange } } : {};

    // Fetch archived requests based on query filter data
    const archivedRequests = await Request.find(query)
      .populate("needer", "name email") // Populate the needer data
      .populate("items.item", "name description") // Populate the item data
      .exec();

    // Calculate statistics
    const totalRequests = archivedRequests.length;
    const collectedRequests = archivedRequests.filter(
      (req) => req.status === "collected"
    ).length;
    const refusedRequests = archivedRequests.filter(
      (req) => req.status === "refused"
    ).length;
    const pendingRequests = archivedRequests.filter(
      (req) => req.status === "pending"
    ).length;

    // Response with statistics
    res.status(200).json({
      totalRequests,
      collectedRequests,
      refusedRequests,
      pendingRequests,
    });
  } catch (error) {
    console.error("Error fetching request statistics:", error);
    res.status(500).json({ message: "Error fetching statistics." });
  }
};
module.exports = getStatistics;
