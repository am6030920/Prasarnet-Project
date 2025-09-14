import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Register = () => {
  const navigation = useNavigate();
  const  [ name, setName ] = useState("");

  const handleSignUp = () =>{
    localStorage.setItem("userName", name);
        navigation("/dashboard");

  };
  return (
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
          border:"3px solid #eaeef1ff",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "25px", color: "#000000ff" }}>Sign up</h1>
        <div style={{ textAlign: "left" }}>
         <p style={{ margin: "2px 4px", fontWeight: "bold" }}>Name</p>
          <input
            type="text"
            placeholder="Name"
            value ={name}
            onChange={ (e) => setName(e.target.value) }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <p style={{ margin: "2px 4px", fontWeight: "bold" }}>Email</p>
          <input
            type="text"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <p style={{ margin: "2px  4px", fontWeight: "bold" }}>Password</p>
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px",
            }}
          />
        </div>
        <button
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#4facfe",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
          }}
         onClick={handleSignUp}
        >
          Sign Up
        </button>
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Already have an account?
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
  )
}

export default Register
