const express = require("express");
const { getActivities } = require("../controllers/activityController");

const router = express.Router();

router.get("/", getActivities); // public

module.exports = router;
