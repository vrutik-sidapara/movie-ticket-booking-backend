const express = require("express");
const router = express.Router();

const superadminController = require("../controller/superadminController");
const { verifyToken, isSuperAdmin } = require("../middleware/authMiddleware");

router.post("/city", verifyToken, isSuperAdmin, superadminController.city);
router.get("/cities", verifyToken, isSuperAdmin, superadminController.getAllCities);

router.post("/theater", verifyToken, isSuperAdmin, superadminController.createTheater);
router.get("/theater", verifyToken, isSuperAdmin, superadminController.getAllTheater);
router.get("/theater/:theaterId", verifyToken, isSuperAdmin, superadminController.getTheaterById);
router.put("/theater/:theaterId", verifyToken, isSuperAdmin, superadminController.updateTheater);
router.delete("/theater/:theaterId", verifyToken, isSuperAdmin, superadminController.deleteTheater);

module.exports = router;