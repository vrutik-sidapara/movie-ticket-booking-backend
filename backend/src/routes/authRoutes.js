const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");

router.post("/register", authController.register);
router.get("/verify", authController.verifyUser);
router.post("/resend-verification", authController.resendverification);
router.post("/login", authController.login);

module.exports = router;
