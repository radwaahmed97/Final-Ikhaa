

const User = require("../models/Users");
const bcrypt = require("bcryptjs");

// Fetch and update user settings
const updateUserSettings = async (req, res) => {
  try {
    if (req.method === "GET") {
      // Fetch user details
      const user = await User.findById(req.user.id).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    }

    if (req.method === "PUT") {
      const { name, email, phone, address, photo } = req.body;

      const updates = {
        ...(name && { name }),
        ...(email && { email }),
        ...(phone && { phone }),
        ...(address && { address }),
        ...(photo && { photo }),
      };

      const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "Settings updated successfully", user: updatedUser });
    }
  } catch (error) {
    console.error("Error updating user settings:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = updateUserSettings;

