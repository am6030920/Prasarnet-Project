import React, { useEffect } from "react";
import { useLocation, Link,useNavigate } from "react-router-dom";
import "./SideBar.css";

const Sidebar = ({ setHeaderName }) => {
  const location = useLocation();
  const navigation =useNavigate();
  const isActiveRoute = (path) => {
    const returnValue = location.pathname.startsWith(path) ? true : false;
    return returnValue;
  };
  const handleLogOut = () =>
  {
    navigation("/Login");
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div>
          <h2 className="sidebar-title">Menu</h2>
          <ul className="sidebar-list">
            <li onClick={() => setHeaderName("Dashboard")}>
              <Link
                to="/dashBoard"
                className={isActiveRoute("/dashBoard") ? "active-link" : ""}
              >
                Dashboard
              </Link>
            </li>
            <li onClick={() => setHeaderName("Profile")}>
              <Link
                to="/profile"
                className={isActiveRoute("/profile") ? "active-link" : ""}
              >
                Profile
              </Link>
            </li>
            <li onClick={() => setHeaderName("Todo List")}>
              <Link
                to="/todoList"
                className={isActiveRoute("/TodoList") ? "active-link" : ""}
              >
                Todo List
              </Link>
            </li>
            <li onClick={() => setHeaderName("Todo Form")}>
              <Link
                to="/todoFrom"
                className={isActiveRoute("/TodoFrom") ? "active-link" : ""}
              >
                Todo Form
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
