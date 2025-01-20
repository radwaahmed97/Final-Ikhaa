const Category = require("../models/Categories");
const Item = require("../models/Items");

//handeling CRUD Operations for Categories

//Create new Category
exports.addCategory = async (request, response) => {
  const { name, createdBy } = request.body;

  if (!name || !createdBy) {
    return response
      .status(400)
      .json({ error: "name and createdBy are required" });
  }

  if (typeof name !== "string" || name.trim().length === 0) {
    return response.status(400).json({ error: "Invalid Category name" });
  }

  try {
    const category = new Category({
      name,
      createdBy,
    });
    await category.save();
    response
      .status(201)
      .json({ message: "Category created successfully.", category });
  } catch (error) {
    console.error("Add Category Error:", error.message);
    response.status(500).json({ error: "Failed to create category" });
  }
};

//Get all categories
exports.getCategories = async (request, response) => {
  try {
    const categories = await Category.find().populate("items").exec();
    response.status(200).json(categories);
  } catch (error) {
    console.error("Get Categories Error:", error.message);
    response.status(500).json({ error: "Failed to get categories" });
  }
};

// Get one category by id
exports.getCategoryById = async (request, response) => {
  const { id } = request.params;
  try {
    const category = await Category.findById(id).populate("items");
    if (!category) {
      return response.status(404).json({ error: "Category not exists" });
    }
    response.status(200).json(category);
  } catch (error) {
    console.error("Get Category by ID Error:", error.message);
    response.status(500).json({ error: "Failed to fetch category" });
  }
};

// Search categories by name
/**exports.searchCategories = async (request, response) => {
    const { query, page = 1, limit = 10 } = request.query;

    if (!query || query.trim() === "") {
        return response.status(400).json({ error: "Query parameter is required" });
    }

    try {
        const skip = (parseInt(page) - 1) * parseInt(limit);

        const categories = await Category.find({
            name: { $regex: query, $options: "i" } // Case-insensitive search
        })
            .skip(skip)
            .limit(parseInt(limit))
            .populate("items");

        response.status(200).json(categories);
    } catch (error) {
        console.error("Search Categories Error:", {
            message: error.message,
            stack: error.stack,
            query,
        });
        response.status(500).json({ error: "Failed to search categories" });
    }
};*/

//counting existing categories
exports.countCategories = async (request, response) => {
  try {
    const count = await Category.countDocuments();
    response.status(200).json({ count });
  } catch (error) {
    console.error("Count Categories Error:", error.message);
    response.status(500).json({ error: "Failed to count categories" });
  }
};

//list categories created by a specific member
exports.getCategoriesByUser = async (request, response) => {
  const { userId } = request.params;
  try {
    const categories = await Category.find({ createdBy: userId }).populate(
      "items"
    );
    response.status(200).json(categories);
  } catch (error) {
    console.error("Get Categories by User Error:", error.message);
    response.status(500).json({ error: "Failed to fetch user categories" });
  }
};

// updating category
exports.updateCategory = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return response.status(400).json({ error: "Invalid Category name" });
  }
  try {
    const category = await Category.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!category) {
      return response.status(404).json({ error: "Category not exists" });
    }
    response.status(200).json(category);
  } catch (error) {
    console.error("Update Category Error:", error.message);
    response.status(500).json({ error: "Failed to update Category" });
  }
};

//deleting category by id
exports.deleteCategory = async (request, response) => {
  const { id } = request.params;
  try {
    const category = await Category.findById(id);
    if (!category) {
      return response.status(404).json({ error: "Category not exists" });
    }

    await category.deleteOne({ _id: id });

    response
      .status(200)
      .json({ message: "Category and associated items deleted successfully" });
  } catch (error) {
    console.error("Delete Category Error:", error.message);
    response.status(500).json({ error: "Failed to delete category" });
  }
};

//deleting more than one category as if select more categories to delete
exports.bulkDeleteCategories = async (request, response) => {
  const { ids } = request.body; // Expecting an array of category IDs
  try {
    const categories = await Category.find({ _id: { $in: ids } });
    if (!categories.length) {
      return response
        .status(404)
        .json({ error: "No categories found for deletion" });
    }
    for (const category of categories) {
      await category.deleteOne();
    }
    response
      .status(200)
      .json({
        message: "Categories and associated items deleted successfully",
      });
  } catch (error) {
    console.error("Bulk Delete Categories Error:", error.message);
    response.status(500).json({ error: "Failed to delete categories" });
  }
};
