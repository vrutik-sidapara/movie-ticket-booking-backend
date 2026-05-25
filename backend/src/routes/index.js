const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const SuperadminRoutes = require("./SuperadminRoutes");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");

router.use("/auth", authRoutes);
router.use("/superadmin", SuperadminRoutes);
router.use("/admin", adminRoutes);
router.use("/", userRoutes);

module.exports = router;
