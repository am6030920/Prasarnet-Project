import React from 'react'
import "./Dashboard.css"

const DsahBoard = () => {
   return (
    <div className="dashboard-main">
      <h2 className="dashboard-title">Overview</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p className="dashboard-value">120</p>
        </div>

        <div className="dashboard-card shadow">
          <h3>Exams Taken</h3>
          <p className="dashboard-value">15</p>
        </div>

        <div className="dashboard-card shadow">
          <h3>Certificates</h3>
          <p className="dashboard-value">6</p>
        </div>

        <div className="dashboard-card shadow">
          <h3>Overall Percentage</h3>
          <p className="dashboard-value highlight">75%</p>
        </div>

        <div className="dashboard-card shadow">
          <h3>Overall Grade</h3>
          <p className="dashboard-value highlight">A+</p>
        </div>

        <div className="dashboard-card shadow">
          <h3>Most Attempted Subject</h3>
          <p className="dashboard-subject">Programming</p>
        </div>
      </div>
    </div>
  );
};

export default DsahBoard;