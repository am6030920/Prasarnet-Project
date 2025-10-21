const todoFromSchema = require("../models/todoFromModel");
const jwt = require("jsonwebtoken");
const JWT_EXPRIER = process.env.JWT_EXPRIER;
const JWT_SECRET = process.env.JWT_SECRET;

const createMeeting = async (req, res) => {
  const { name, email, hrName, location, meetingType, date, time } = req.body;
  console.log(req.body);
  try {
    if (!name || !email || !meetingType || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "please fill the all from"});
    }
    const newMeeting = await todoFromSchema.create({
      name,
      email,
      hrName,
      location,
      meetingType,
      date,
      time,
    });
    const token = jwt.sign(
      { id: newMeeting._id, email: newMeeting.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPRIER || "2h" }
    );
    res.status(200).json({
      success: true,
      message: "Meeting created successfully!",
      data: newMeeting,
      token
    });
  } catch (error) {
    console.error("not creating meeting:", error.message);
    res.status(500).json({success: false,message: "Server Error while creating meeting",error: error.message,
    });
  }
};
const getAllMeetings = async (req, res) => {
  try {
    const meetings = await todoFromSchema.find().sort({});
    res.status(200).json({
      success: true,
      count: meetings.length,
      data: meetings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,message: "Server Error",error: error.message,
    });
  }
};
const updateMeeting = async (req, res) => {
  try {
    const updatedMeeting = await todoFromSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMeeting) {
      return res.status(404).json({ success: false, message: "Meeting not found!" });
    }
    res.status(200).json({
      success: true,
      message: "Meeting updated successfully!",
      data: updatedMeeting,
    });
  } catch (error) {
    res.status(500).json({success: false,message: "Server Error while updating meeting",error: error.message,
    });
  }
};
const deleteMeeting = async (req, res) => {
  try {
    const meeting = await todoFromSchema.findById(req.params.id);
    if (!meeting) {
      return res.status(404).json({ success: false, message: "Meeting not found!" });
    }
    await meeting.deleteOne();
    res.status(200).json({ success: true, message: "Meeting deleted successfully!" });
  } catch (error) {
    res.status(500).json({success: false,message: "Server Error while deleting meeting",error: error.message,
    });
  }
};

module.exports = { createMeeting, getAllMeetings, updateMeeting, deleteMeeting };
