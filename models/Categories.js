const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
    }
}, { timestamps: true });

//populate items with the category with a virtual Items field
categorySchema.virtual("items", {
    ref: "Item",
    localField: "_id",
    foreignField: "category",
});

//ensuring virtuals are included in response when categories are fetched
categorySchema.set("toObject", { virtuals: true });
categorySchema.set("toJSON", { virtuals: true });


//cascading delete associated inside items within a category when deleting the category
categorySchema.pre("deleteOne", { document: true, query: false } , async function (next) {
    try {
        const Item = mongoose.model("Item");
        await Item.deleteMany({ category: this._id });
        console.log(`Successfully deleted associated items for category with _id: ${this._id}`)
    } catch (error) {
        console.error("Error in cascading delete for category:", error.message);
    }
    next();
});

module.exports = mongoose.model("Category", categorySchema);