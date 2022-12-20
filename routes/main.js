const express = require("express");
const { dashboard, login } = require("../controllers/main");
const router = express.Router();

router.route("/login").post(login);
router.route("/dashboard").get(dashboard);

module.exports = router;
