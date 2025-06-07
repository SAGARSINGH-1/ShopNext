const {
    createAccount,
    editAccount,
    deleteAccount,
    getUser,
    login,
    logout
} = require("../Controller/User")
const express = require("express")


const router = express.Router();

router.route("/create").post(createAccount)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route("/delete_account/:id").patch(editAccount).delete(deleteAccount)
router.route("/profile/").get(getUser)

module.exports = router;