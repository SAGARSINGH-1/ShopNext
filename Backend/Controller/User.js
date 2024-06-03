const User = require("../Models/UserSchema")
const mongoose = require("mongoose")

async function createAccount(req, res) {
    const body = req.body;
    try {
        const account = await User.create({
            username: body.username,
            email: body.email,
            password: body.password,
            role: body.role,
        })

        if (account) {
            console.log("Account created ");
            res.send("Success")
        }
    } catch (error) {
        console.log("Some error occured", error);
        res.send("Error occured")
    }
}
async function editAccount(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
        const user = await User.updateOne({ _id: id }, { $set: body })
        if (user) {
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(400).json({ "error": error.message || "Some error occured" })
    }
}
async function deleteAccount(req, res) {
    const id = req.params.id;
    try {
        const user = await User.deleteOne({ _id: id })
        if (user) {
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(400).json({ "error": error.message || "Some error occured" })
    }
}

async function getAccount(req, res) {
    const id = req.params.id;
    try {
        const user = await User.find({ _id: id });
        if (user) {
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(400).json({ "error": error.message || "Some error occured" })
    }
}


module.exports = {
    createAccount,
    editAccount,
    deleteAccount,
    getAccount,
}