const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const todoFromRoutes = require("./todoFromRoutes");

router.use("/user",userRoutes);
router.use("/todoFrom", todoFromRoutes);


module.exports = router;