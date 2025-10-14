import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Apis } from "../../apiList";
import api from "../../apiConfig";


const Register = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validationForm = () => {
    let isValid = true;
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setPasswordError("");
    if (name.trim().length === 0) {
      setNameError("Please fill the Name");
      isValid = false;
    } else if (name.trim().length < 5) {
      setNameError("This name is too short");
      isValid = false;
    }
    if (email.trim().length === 0) {
      setEmailError("Please fill the Email");
      isValid = false;
    } else if (!email.endsWith("@gmail.com")) {
      setEmailError("Email must end with @gmail.com");
      isValid = false;
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!emailPattern.test(email)) {
        setEmailError("Enter a valid Gmail format");
        isValid = false;
      }
    }
    if (phone.trim().length === 0) {
      setPhoneError("Enter Phone Number");
      isValid = false;
    } else if (!/^\d{10}$/.test(phone.trim())) {
      setPhoneError("Please enter a valid 10-digit phone number");
      isValid = false;
    }
    if (password.trim().length === 0) {
      setPasswordError("Please enter a password");
      isValid = false;
    } else if (password.trim().length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    }

    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validationForm()) return; 

    const data = { name, email, phone, password };

    try {
      const response = await api.post(Apis.RegisterUser, data);

      if (response?.data?.statusCode === 200) {
        Navigate("/login");
      } else {
        window.alert(response?.data?.message);
      }
    } catch (error) {
      console.error(error);
      window.alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#95bfe7ff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            background: "transparent",
            padding: "40px",
            border: "3px solid #eaeef1ff",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            width: "350px",
            textAlign: "center",
          }}
        >
          <h1 style={{ marginBottom: "25px", color: "#000" }}>Sign Up</h1>
          <div style={{ textAlign: "left" }}>
            <p style={{ margin: "2px 4px", fontWeight: "bold" }}>Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
              }}
            />
            {nameError && (
              <span style={{ color: "red", fontSize: "13px" }}>{nameError}</span>
            )}
          </div>
          <div style={{ textAlign: "left", marginTop: "10px" }}>
            <p style={{ margin: "2px 4px", fontWeight: "bold" }}>Email</p>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
              }}
            />
            {emailError && (
              <span style={{ color: "red", fontSize: "13px" }}>{emailError}</span>
            )}
          </div>
          <div style={{ textAlign: "left", marginTop: "10px" ,width:"100%"}}>
            <p style={{ margin: "2px 4px", fontWeight: "bold" }}>Phone Number</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
          style={{
            fontWeight:"bold",
            color:"#000",
            padding: "10px",
            backgroundColor: "#eee",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            marginTop:"1px",
            height:"18px",
            width:"20px",
            border: "none",
            borderRight: "none",
          }}
        >
          +91
        </span>
              <input
                type="text"
                placeholder="Enter your Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: "550vh",
                  padding: "10px",
                  borderRadius: "0 8px 8px 0",
                  border: "1px solid #ccc",
                  outline: "none",
                  fontSize: "14px",
                }}
              />
            </div>
            {phoneError && (
              <span style={{ color: "red", fontSize: "13px" }}>{phoneError}</span>
            )}
          </div>
          <div style={{ textAlign: "left", marginTop: "10px" }}>
            <p style={{ margin: "2px 4px", fontWeight: "bold" }}>Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
              }}
            />
            {passwordError && (
              <span style={{ color: "red", fontSize: "13px" }}>{passwordError}</span>
            )}
          </div>
         <button
  type="submit"
  style={{
    width: "106%",
    marginTop:"15px",
    padding: "12px 0",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #4facfe, #00f2fe)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "0.3s ease",
    boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)",
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 6px 20px rgba(79, 172, 254, 0.6)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 4px 15px rgba(79, 172, 254, 0.4)";
  }}
>
  Submit
</button>

          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "rgba(69, 21, 180, 1)",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Register;
