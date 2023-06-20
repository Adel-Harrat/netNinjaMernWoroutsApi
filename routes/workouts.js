const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

// GET all workouts
router.get("/", getWorkouts);

// POST a new workout
router.post("/", createWorkout);

// GET a single workout
router.get("/:id", getWorkout);

// DELETE a single workout
router.delete("/:id", deleteWorkout);

// PATCH a single workout
router.patch("/:id", updateWorkout);

module.exports = router;
