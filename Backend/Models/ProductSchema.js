const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    price: {
        required: true,
        type: Number
    },
    stock: {
        required: true,
        type: Number
    },
    tags: {
        type: [String]
    }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
