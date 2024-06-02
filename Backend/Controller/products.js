const Product = require("../Models/ProductSchema")
const mongoose = require("mongoose")

async function createProduct(req, res) {
    const body = req.body;
    try {
        const product = await Product.create({
            title: body.title,
            description: body.description,
            category: body.category,
            price: body.price,
            stock: body.stock,
            tags: body.tags
        })

        if (product) {
            console.log("Product created ");
            res.send("Success")
        }
    } catch (error) {
        console.log("Some error occured", error);
        res.send("Error occured")
    }
}
async function editProduct(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
        const user = await Product.updateOne({ _id: id }, { $set: body })
        if (user) {
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(400).json({ "error": error.message || "Some error occured" })
    }
}
async function deleteProduct(req, res) {
    const id = req.params.id;
    try {
        const user = await Product.deleteOne({ _id: id })
        if (user) {
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(400).json({ "error": error.message || "Some error occured" })
    }
}
async function getProducts(req, res) {
    try {
        const users = await Product.find({});
        if (users) {
            res.status(200).send(users)
        }
    } catch (error) {
        res.status(400).json({ "error": error.message || "Some error occured" })
    }
}
async function getProductByID(req, res) {
    const id = req.params.id;
    try {
        const user = await Product.find({ _id: id });
        if (user) {
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(400).json({ "error": error.message || "Some error occured" })
    }
}


module.exports = {
    createProduct,
    editProduct,
    deleteProduct,
    getProducts,
    getProductByID
}