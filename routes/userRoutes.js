const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// User routes
router.get("/", authMiddleware(["member", "needer"]), userController.getUser);

module.exports = router;
