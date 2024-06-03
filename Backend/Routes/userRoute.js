const {
    createAccount,
    editAccount,
    deleteAccount,
    getAccount,
} = require("../Controller/User")
const express = require("express")


const router = express.Router();

router.route("/create").post(createAccount)
router.route("/delete_account/:id").patch(editAccount).delete(deleteAccount)
router.route("/profile/:id").get(getAccount)

module.exports = router;