const {
    createProduct,
    editProduct,
    deleteProduct,
    getProducts,
    getProductByID
} = require("../Controller/products")
const express = require("express")


const router = express.Router();

router.route("/create").post(createProduct)
router.route("/:id").get(getProductByID).patch(editProduct).delete(deleteProduct)
router.route("/").get(getProducts)

module.exports = router;