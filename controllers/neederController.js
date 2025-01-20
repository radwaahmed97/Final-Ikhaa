const bcrypt = require("bcryptjs");
const User = require("../models/Users");

// Get all needers
const getAllNeeders = async (req, res) => {
  try {
    const needers = await User.find({ role: "needer" });
    res.status(200).json({ message: "List of needers", needers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching needers" });
  }
};

// Add a new needer
const addNeeder = async (req, res) => {
  try {
    const { name, email, password, phone, photo } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new needer
    const newNeeder = new User({
      name,
      email,
      password: hashedPassword,
      role: "needer",
      phone,
      photo,
    });

    await newNeeder.save();
    res.status(201).json({ message: "Needer added successfully", newNeeder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding needer" });
  }
};

// View needer
const viewNeeder = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the needer by ID
    const needer = await User.findById(id);

    // If the needer is not found
    if (!needer) {
      return res.status(404).json({ error: "Needer not found" });
    }

    // Send the needer's details
    res.status(200).json(needer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching needer details" });
  }
};


// Update needer
const updateNeeder = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, photo } = req.body;

    const updatedNeeder = await User.findByIdAndUpdate(
      id,
      { name, phone, photo },
      { new: true }
    );

    if (!updatedNeeder) {
      return res.status(404).json({ error: "Needer not found" });
    }

    res.status(200).json({ message: "Needer updated successfully", updatedNeeder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating needer" });
  }
};

// Delete needer
const deleteNeeder = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNeeder = await User.findByIdAndDelete(id);
    if (!deletedNeeder) {
      return res.status(404).json({ error: "Needer not found" });
    }

    res.status(200).json({ message: "Needer deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting needer" });
  }
};

module.exports = { getAllNeeders, addNeeder, updateNeeder, deleteNeeder, viewNeeder };
