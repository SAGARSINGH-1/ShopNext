const express = require("express")
const mongoose = require("mongoose")
const Product = require("./Routes/productRoute")
const User = require("./Routes/userRoute")
const Admin = require("./Routes/adminRoute")
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());


app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/shopnext")
    .then(() => {
        console.log("MongoDB Connected Successfully");
    }).catch((err) => {
        console.log("Error Occured", err);
    })

app.use("/api/product", Product);
app.use("/api/user", User);
app.use("/api/admin", Admin);



app.listen(PORT, () => {
    console.log("Server is running on port 6000");
})