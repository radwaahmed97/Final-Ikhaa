const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Quantity cannot be negative"],
    },
    photo: {
        type: String,
        default: "https://via.placeholder.com/300x300.png"
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
