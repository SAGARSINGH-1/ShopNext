const User = require("../Models/UserSchema")


async function getAdmin(req, res) {
    const id = req.params.id;
    try {
        const user = await User.findOne({ _id: id, role: "admin" });
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).json({ error: "Admin user not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message || "Some error occurred" });
    }
}


async function editAdmin(req, res) {
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

async function deleteAdmin(req, res) {
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

module.exports = {
    getAdmin,
    editAdmin,
    deleteAdmin,
}