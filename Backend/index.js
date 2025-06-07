const express = require("express")
const mongoose = require("mongoose")
const Product = require("./Routes/productRoute")
const User = require("./Routes/userRoute")
const Admin = require("./Routes/adminRoute")
const cors = require("cors");
const cookieParser = require("cookie-parser")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: 'http://localhost:5173',  // 👈 Your frontend URL, not '*'
    credentials: true                 // 👈 Allow cookies (important)
}));

// To parse the cookies in readable form
app.use(cookieParser());

app.use(express.json()); // <-- Needed to parse JSON body


app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // console.log(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
    }).catch((err) => {
        console.log("Error Occurred", err);
    })

app.use("/api/product", Product);
app.use("/api/user", User);
app.use("/api/admin", Admin);



app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})