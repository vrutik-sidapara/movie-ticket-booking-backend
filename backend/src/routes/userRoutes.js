const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.get("/movies", userController.getMovies);
router.get("/show-schedule-public", userController.getPublicSchedule);
router.post("/booking", userController.booking);
router.post("/rating", userController.rating);
router.get("/city", userController.getAllCities);
router.get("/theater", userController.getAllTheater);

module.exports = router;
