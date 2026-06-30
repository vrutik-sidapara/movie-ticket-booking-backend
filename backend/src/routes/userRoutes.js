const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const userController = require("../controller/userController");

router.get("/movies", userController.getMovies);
router.get("/show-schedule-public", userController.getPublicSchedule);
router.get("/city", userController.getAllCities);
router.get("/theater", userController.getAllTheater);

router.post("/booking", verifyToken, userController.booking);
router.post("/rating", verifyToken, userController.rating);

module.exports = router;
