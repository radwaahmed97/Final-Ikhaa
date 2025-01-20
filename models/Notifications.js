// handle notifications for needers when their requests status changes
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    needer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    request: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Request",
        required: true
    },
    message: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);
