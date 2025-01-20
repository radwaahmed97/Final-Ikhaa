const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const authMiddleware = require("../middleware/authMiddleware");

// Routes for items (restricted to "member" role)

// Get items by category ID such as when clicking on a category
router.get(
  "/categories/:categoryId/items",
  authMiddleware(["member", "needer"]),
  itemController.getItemsByCategory
);

// Get an item by ID
router.get(
  "/:id",
  authMiddleware(["member", "needer"]),
  itemController.getItemById
);

// Add a new item to a category
router.post(
  "/categories/:categoryId/items/add",
  authMiddleware(["member"]),
  itemController.addItem
);

// Update an existing item
router.put(
  "/update/:id",
  authMiddleware(["member"]),
  itemController.updateItem
);

// Delete an item
router.delete(
  "/delete/:id",
  authMiddleware(["member"]),
  itemController.deleteItem
);

module.exports = router;
