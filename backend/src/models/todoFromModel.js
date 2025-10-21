const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoFormSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    hrName: { type: String },
    location: { type: String },
    meetingType: { type: String, enum: ["online", "offline"], required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TodoForm", todoFormSchema);
