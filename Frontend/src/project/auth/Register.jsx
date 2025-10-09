import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigation = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const validationForm = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmError("");
    if (name.trim().length === 0) {
      setNameError("Please fill the Name");
      return;
    }
    if (name.trim().length < 5) {
      setNameError("This name is too short");
      return;
    }
    if (email.trim().length === 0) {
      setEmailError("Please fill the Email");
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      setEmailError("Enter a proper Gmail address (must end with @gmail.com)");
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      setEmailError("Enter a valid Gmail format");
      return;
    }
    if (password.trim().length === 0) {
      setPasswordError("Please enter a password");
      return;
    }
    if (password.trim().length < 8) {
      setPasswordError("Password must be 8 characters long");
      return;
    }
    if (confirmPassword.trim().length === 0) {
      setConfirmError("Please confirm your password");
      return;
    }
    if (password !== confirmPassword) {
      setConfirmError("Passwords do not match");
      return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userpassword",password);
    navigation("/dashboard");
  };

  return (
    <form onSubmit={validationForm}>
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
          <h1 style={{ marginBottom: "25px", color: "#000000ff" }}>Sign Up</h1>
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

            <p style={{ margin: "10px 4px", fontWeight: "bold" }}>Email</p>
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
            <p style={{ margin: "10px 4px", fontWeight: "bold" }}>Password</p>
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
              <span style={{ color: "red", fontSize: "13px" }}>
                {passwordError}
              </span>
            )}
            <p style={{ margin: "10px 4px", fontWeight: "bold" }}>
              Confirm Password
            </p>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
              }}
            />
            {confirmError && (
              <span style={{ color: "red", fontSize: "13px" }}>
                {confirmError}
              </span>
            )}
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "#4facfe",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            Submit
          </button>
          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            Already have an account?{" "}
            <Link
              to="/Login"
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
