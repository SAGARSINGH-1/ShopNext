const express = require("express")
const mongoose = require("mongoose")
const Product = require("./Routes/productRoute")

const app = express();
const PORT = 6000;


app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/shopnext")
    .then(() => {
        console.log("MongoDB Connected Successfully");
    }).catch((err) => {
        console.log("Error Occured", err);
    })

app.use("/product", Product);



app.listen(PORT, () => {
    console.log("Server is running on port 6000");
})