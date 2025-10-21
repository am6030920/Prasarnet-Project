const express = require("express");
const todoFromControllers = require("../controllers/todoFromController");
const todoFromRoutes = express.Router();

todoFromRoutes.post("/add", todoFromControllers.createMeeting);
todoFromRoutes.get("/all", todoFromControllers.getAllMeetings);
todoFromRoutes.put("/update/:id", todoFromControllers.updateMeeting);
todoFromRoutes.delete("/delete/:id", todoFromControllers.deleteMeeting);

module.exports = todoFromRoutes;
