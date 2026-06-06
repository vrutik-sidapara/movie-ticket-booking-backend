const express = require("express");
const routes = express.Router();

const adminController = require("../controller/adminController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

routes.post(
  "/movie",
  verifyToken,
  isAdmin,
  upload.single("image"),
  adminController.movieAdd,
);
routes.get("/movie", verifyToken, isAdmin, adminController.getMovies);
routes.put("/movie/:id", verifyToken, isAdmin, upload.single("image"), adminController.updateMovie);
routes.delete("/movie/:id", verifyToken, isAdmin, adminController.deleteMovie);

routes.post("/theater", verifyToken, isAdmin, adminController.linkTheater);
routes.get("/theater", verifyToken, isAdmin, adminController.getTheater);
routes.get("/theaters", verifyToken, isAdmin, adminController.getAllTheaters);
routes.put(
  "/theater/:theaterId",
  verifyToken,
  isAdmin,
  adminController.updateTheater,
);

routes.post("/screen", verifyToken, isAdmin, adminController.createScreen);
routes.get("/screen", verifyToken, isAdmin, adminController.getScreen);
routes.post(
  "/timesheet",
  verifyToken,
  isAdmin,
  adminController.createTimesheet,
);
routes.get("/timesheet", verifyToken, isAdmin, adminController.getTimesheet);

routes.post("/schedule", verifyToken, isAdmin, adminController.createSchedule);
routes.get("/show-schedule", verifyToken, isAdmin, adminController.getSchedule);

routes.get("/stats", verifyToken, isAdmin, adminController.getDashboardStats);

module.exports = routes;
