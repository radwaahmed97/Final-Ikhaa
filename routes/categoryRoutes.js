const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/categoryController");
const authMiddleware = require("../middleware/authMiddleware");

// Get all categories in donationsitems board for members
router.get(
  "/",
  authMiddleware(["member", "needer"]),
  CategoryController.getCategories
);

// Add a new Category when push the button add new category in donations items board for members
router.post("/add", authMiddleware(["member"]), CategoryController.addCategory);

//gets count of categories
router.get(
  "/count",
  authMiddleware(["member"]),
  CategoryController.countCategories
);

// Geg specific category by ID
router.get(
  "/:id",
  authMiddleware(["member"]),
  CategoryController.getCategoryById
);

// Get all categories created by sepecific member id
router.get(
  "/user/:userId",
  authMiddleware(["member"]),
  CategoryController.getCategoriesByUser
);

// Update a category
router.put(
  "/update/:id",
  authMiddleware(["member"]),
  CategoryController.updateCategory
);

// delete a category and it's associated items
router.delete(
  "/delete/:id",
  authMiddleware(["member"]),
  CategoryController.deleteCategory
);

// delete more than one category
router.post(
  "/bulk-delete",
  authMiddleware(["member"]),
  CategoryController.bulkDeleteCategories
);

// search categories by names when typing name in searchbar in DO-Items memberboard
//router.get("/search", authMiddleware(['member']), CategoryController.searchCategories);

module.exports = router;
