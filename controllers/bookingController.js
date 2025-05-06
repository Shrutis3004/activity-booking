const Booking = require("../models/Booking");
const Activity = require("../models/Activity");

exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;
  try {
    const activity = await Activity.findById(activityId);
    if (!activity)
      return res.status(404).json({ message: "Activity not found" });

    const booking = await Booking.create({
      user: req.user,
      activity: activityId,
    });
    res.status(201).json({ message: "Activity booked successfully", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user }).populate(
      "activity"
    );
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
