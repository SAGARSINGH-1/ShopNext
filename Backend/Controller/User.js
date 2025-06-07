const User = require("../Models/UserSchema")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function createAccount(req, res) {
    try {
        const { name, email, password, role, phone } = req.body;

        // Generate salt
        const salt = await bcrypt.genSalt(10);

        // Hash password
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const account = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            phone
        });

        if (account) {
            return res.status(200).json({ success: "Account created" });
        } else {
            return res.status(400).json({ error: "Error occured while creating account" });
        }

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


async function login(req, res) {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
                let token = jwt.sign({ email: user.email }, "00000", { expiresIn: "1h" });

                res.cookie("token", token, {
                    httpOnly: false,   // cookie not accessible from JS (secure)
                    secure: false,    // set to true if using https
                    sameSite: "lax",  // or "none" if you want cross-site cookies
                });
                return res.status(200).json({ success: "Login successful" });
            } else {
                return res.status(400).json({ error: "Invalid email or password" });
            }
        });

    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
}


async function getUser(req, res) {
    try {

        const decoded = jwt.verify(req.headers.authorization, "00000");  // 👈 correct order

        if (decoded) {
            const user = await User.findOne({ email: decoded.email });
            return res.status(200).json({ user: user });
        }

    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
}


async function logout(req, res) {
    try {
        res.clearCookie('token', {
            path: '/',
            httpOnly: false,
            secure: false,
            sameSite: 'lax',
        });
        return res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
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
    login,
    logout,
    editAccount,
    deleteAccount,
    getUser,
}