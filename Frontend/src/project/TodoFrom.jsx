import React, { useState, useEffect } from "react";
import "./TodoFrom.css";
import { Apis } from "../apiList";
import api from "../apiConfig";

const TodoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hrName, setHrName] = useState("");
  const [location, setLocation] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [nameError, setNameError] = useState("");

  const [meetings, setMeetings] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
useEffect(() => {
  // প্রথমে localStorage থেকে load
  const saved = JSON.parse(localStorage.getItem("savedMeetings")) || [];
  setMeetings(saved);

  // তারপর backend fetch
  const fetchMeetings = async () => {
    try {
      const res = await api.get(Apis.CreateMeeting);
      const fetchedMeetings = res.data.meetings || res.data.meeting || [];
      setMeetings(Array.isArray(fetchedMeetings) ? fetchedMeetings : saved);

      // update localStorage
      localStorage.setItem("savedMeetings", JSON.stringify(fetchedMeetings));
    } catch (err) {
      console.error(err);
    }
  };

  fetchMeetings();
}, []);

  // ✅ যখন meetings state update হবে, localStorage এও update করো
  useEffect(() => {
    localStorage.setItem("savedMeetings", JSON.stringify(meetings));
  }, [meetings]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setHrName("");
    setLocation("");
    setMeetingType("");
    setDate("");
    setTime("");
    setEditingIndex(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNameError("");

    if (name.trim().length === 0) {
      setNameError("Please fill the meeting name");
      return;
    }

    if (name.trim().length < 5) {
      setNameError("Enter a proper meeting name");
      return;
    }

    const meetingData = {
      name,
      email,
      hrName,
      location,
      meetingType,
      date,
      time,
    };

    try {
      if (editingIndex !== null) {
        const res = await api.put(
          `${Apis.CreateMeeting}/${meetings[editingIndex]._id}`,
          meetingData
        );
        const updatedMeetings = [...meetings];
        updatedMeetings[editingIndex] = res.data.meeting || meetingData;
        setMeetings(updatedMeetings);
        alert("Meeting updated successfully!");
      } else {
        const res = await api.post(Apis.CreateMeeting, meetingData);
        const newMeeting = res.data.meeting || meetingData;
        setMeetings([...meetings, newMeeting]);
        alert("Meeting added successfully!");
      }
      resetForm();
    } catch (error) {
      console.error("Error saving meeting:", error);
      alert("Something went wrong while saving the meeting!");
    }
  };

  const handleEdit = (index) => {
    const meeting = meetings[index];
    if (!meeting) return;

    setName(meeting.name || "");
    setEmail(meeting.email || "");
    setHrName(meeting.hrName || "");
    setLocation(meeting.location || "");
    setMeetingType(meeting.meetingType || "");
    setDate(meeting.date || "");
    setTime(meeting.time || "");
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    const confirmDelete = window.confirm("Are you sure to delete this meeting?");
    if (confirmDelete) {
      try {
        await api.delete(`${Apis.CreateMeeting}/${meetings[index]._id}`);
        const updatedMeetings = meetings.filter((_, i) => i !== index);
        setMeetings(updatedMeetings);
        alert("Meeting deleted successfully!");
      } catch (error) {
        console.error("Error deleting meeting:", error);
        alert("Failed to delete meeting.");
      }
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h1 className="todo-title">Office Meeting Form</h1>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Meeting Title..."
            className="todo-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && (
            <span style={{ color: "red", fontSize: "13px" }}>{nameError}</span>
          )}

          <input
            type="email"
            placeholder="Enter Email..."
            className="todo-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter HR Name..."
            className="todo-input"
            value={hrName}
            onChange={(e) => setHrName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Meeting Location..."
            className="todo-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <select
            className="todo-input"
            value={meetingType}
            onChange={(e) => setMeetingType(e.target.value)}
          >
            <option value="">-- Select Meeting Type --</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>

          <div className="date-time-wrapper">
            <input
              type="date"
              className="date-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              className="time-input"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="btn-wrapper">
            <button className="save-btn" type="submit">
              {editingIndex !== null ? "Update Meeting" : "Add Meeting"}
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Meeting list */}
      {Array.isArray(meetings) && meetings.length > 0 && (
        <div className="output-card">
          <h2>All Meetings</h2>
          {meetings.map((meeting, index) => (
            <div key={index} className="meeting-item">
              <p>
                <strong>Title:</strong> {meeting.name || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {meeting.email || "N/A"}
              </p>
              <p>
                <strong>HR:</strong> {meeting.hrName || "N/A"}
              </p>
              <p>
                <strong>Location:</strong> {meeting.location || "N/A"}
              </p>
              <p>
                <strong>Type:</strong> {meeting.meetingType || "N/A"}
              </p>
              <p>
                <strong>Date:</strong> {meeting.date || "N/A"}
              </p>
              <p>
                <strong>Time:</strong> {meeting.time || "N/A"}
              </p>
              <div className="meeting-buttons">
                <button onClick={() => handleEdit(index)}>Update</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoForm;
