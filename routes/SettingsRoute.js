const express = require('express');
const updateUserSettings = require('../controllers/UserSettingsController');
const authorizeRole = require('../middleware/authMiddleware'); // Middleware for authentication

const router = express.Router();

// Middleware to parse JSON
router.use(express.json());

// Route to update both user info and photo
router.get('/setting',  authorizeRole(["member", "needer"]), updateUserSettings);
router.put('/setting',  authorizeRole(["member", "needer"]), updateUserSettings);

module.exports = router;
