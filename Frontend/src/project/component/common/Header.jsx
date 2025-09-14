import React from 'react'
import "./Header.css"
import { useState,useEffect } from 'react'

const Header = ({headerName}) => {
   const [userName, setUserName] = useState("");
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);
  return (
   <div className="header-container">
      <div className="header-wrapper">
        <nav className="header-nav">
          {headerName}
          <div className="header-user">Welcome, {userName || "Guest"}</div>
        </nav>
      </div>
    </div>
  )
}

export default Header
