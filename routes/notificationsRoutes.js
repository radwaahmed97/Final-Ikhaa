const express = require("express");
const notifictaionsController = require("../controllers/notificationsController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET all notifications for the needer
router.get(
  "/",
  authMiddleware(["needer"]),
  notifictaionsController.getAllNotifications
);

// Mark all notifications as read
router.patch(
  "/mark-all-as-read",
  authMiddleware(["needer"]),
  notifictaionsController.markAllNotificationAsRead
);

module.exports = router;
