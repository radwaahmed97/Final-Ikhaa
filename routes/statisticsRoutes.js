const express = require("express");
const getStatistics = require("../controllers/statisticsController");
const authorizeRole = require("../middleware/authMiddleware"); // Middleware for authentication

const router = express.Router();

router.get("/", authorizeRole(["member"]), getStatistics);

module.exports = router;
