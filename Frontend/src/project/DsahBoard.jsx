// import React from 'react'
// import { FaUsers, FaClipboardList, FaCertificate, FaPercentage, FaStar, FaBook } from "react-icons/fa";
// import "./Dashboard.css";

// const DsahBoard = () => {
// const stats = [
//     { title: "Total Users", value: 120, icon: <FaUsers className="card-icon" />, progress: 80, color: "#4facfe" },
//     { title: "Exams Taken", value: 15, icon: <FaClipboardList className="card-icon" />, progress: 60, color: "#43e97b" },
//     { title: "Certificates", value: 6, icon: <FaCertificate className="card-icon" />, progress: 50, color: "#f093fb" },
//     { title: "Overall Percentage", value: "75%", icon: <FaPercentage className="card-icon" />, progress: 75, color: "#3c63ce" },
//     { title: "Overall Grade", value: "A+", icon: <FaStar className="card-icon" />, progress: 90, color: "#f6d365" },
//     { title: "Most Attempted Subject", value: "Programming", icon: <FaBook className="card-icon" />, progress: 70, color: "#ff6a88" },
//   ];

//   return (
//     <div className="dashboard-main">
//       <h2 className="dashboard-title">Dashboard Overview</h2>
//       <div className="dashboard-grid">
//         {stats.map((stat, index) => (
//           <div key={index} className="dashboard-card">
//             {stat.icon}
//             <h3>{stat.title}</h3>
//             <p className="dashboard-value">{stat.value}</p>
//             <div className="progress-bar">
//               <div
//                 className="progress-fill"
//                 style={{ width: `${stat.progress}%`, backgroundColor: stat.color }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DsahBoard;