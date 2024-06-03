const {
    getAdmin,
    editAdmin,
    deleteAdmin,
} = require("../Controller/Admin")
const express = require("express")


const router = express.Router();

router.route("/:id").get(getAdmin).patch(editAdmin).delete(deleteAdmin)

module.exports = router;