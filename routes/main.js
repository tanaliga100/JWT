const express = require("express");
const router = express.Router();
const { dashboard, login } = require("../controllers/main");
const authMiddleware = require("../middleware/auth");

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
