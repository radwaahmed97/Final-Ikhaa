const Item = require("../models/Items");
const joi = require("joi");

const addItemSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  quantity: joi.number().integer().min(0).required(),
  photo: joi.string().uri().optional(),
  addedBy: joi.string().required(),
  createdBy: joi.string().optional(),
  updatedBy: joi.string().optional(),
});

const updateItemSchema = joi
  .object({
    name: joi.string().optional(),
    description: joi.string().optional(),
    quantity: joi.number().integer().min(0).optional(),
    photo: joi.string().uri().optional(),
    createdBy: joi.string().optional(),
    updatedBy: joi.string().optional(),
    addedBy: joi.string().optional(),
  })
  .min(1);

exports.getItemsByCategory = async (request, response, next) => {
  const { categoryId } = request.params;
  try {
    const items = await Item.find({ category: categoryId }).populate(
      "category",
      "name"
    );
    if (!items.length) {
      return response
        .status(404)
        .json({ error: "No items found for this category" });
    }
    response.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

exports.getItemById = async (request, response) => {
  const { id } = request.params;
  if (!id) {
    return response.status(400).json({ error: "Invalid item ID" });
  }

  try {
    const item = await Item.findById(id)
      .populate("category", "name description quantity photo") // Populate correctly by passing space-separated field names
      .exec(); // Use exec() to handle promise resolution properly

    if (!item) {
      return response.status(404).json({ error: "Item not found" });
    }

    response.status(200).json(item);
  } catch (error) {
    console.error("Get Item Error:", error.message);
    response.status(500).json({ error: "Failed to get item" });
  }
};

exports.addItem = async (request, response) => {
  const { categoryId } = request.params;
  const { error } = addItemSchema.validate(request.body);

  if (error) {
    return response.status(400).json({ error: error.details[0].message });
  }

  try {
    const item = new Item({
      ...request.body,
      category: categoryId,
    });
    await item.save();
    response.status(201).json(item);
  } catch (error) {
    console.error("Add Item Error:", error.message);
    response.status(500).json({ error: "Failed to add item" });
  }
};

exports.updateItem = async (request, response) => {
  const { id } = request.params;
  const { error } = updateItemSchema.validate(request.body);

  if (error) {
    return response.status(400).json({ error: error.details[0].message });
  }

  try {
    const item = await Item.findByIdAndUpdate(id, request.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return response.status(404).json({ error: "Item not found" });
    }

    await item.save();
    response.status(200).json(item);
  } catch (error) {
    console.error("Update Item Error:", error.message);
    response.status(500).json({ error: "Failed to update item" });
  }
};

exports.deleteItem = async (request, response) => {
  const { id } = request.params;

  try {
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      return response.status(404).json({ error: "Item not found" });
    }
    response.status(200).json({ message: "Item deleted successfully", item });
  } catch (error) {
    console.error("Delete Item Error:", error.message);
    response.status(500).json({ error: "Failed to delete item" });
  }
};
