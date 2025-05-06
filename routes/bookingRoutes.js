const express = require("express");
const {
  bookActivity,
  getMyBookings,
} = require("../controllers/bookingController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, bookActivity); // POST /api/bookings
router.get("/my", auth, getMyBookings); // GET /api/bookings/my

module.exports = router;
