import { useEffect, useState } from 'react'
import { Await, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Apis } from '../../apiList';
import api from "../../apiConfig";


const Login = () => {
  const navigate= useNavigate();
  const[email, setEmail]=useState("");
  const [password, setPassword] = useState("");

    const handelLogin = async (e) => {
      e.preventDefault();
      const data = { email, password };
      try {
        const response = await api.post(Apis.LogInUser,data);

        if (response?.data?.statusCode === 200) {
          await localStorage.setItem("token",response?.data?.token||"");
          // navigate("./dashboard")
          window.location.reload();
        } else {
          window.alert(response?.data?.message);

        }
      } catch (error) {
        console.error(error);
        window.alert("Something went wrong!");
      }

    }
    return (
      <form onSubmit={handelLogin}>
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
            <h1 style={{ marginBottom: "25px", color: "#000000ff" }}>Login Form</h1>
            <div style={{ textAlign: "left" }}>
              <p style={{ margin: "2px 4px", fontWeight: "bold" }}>Email</p>
              <input
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
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
              <p style={{ margin: "10px 0 5px", fontWeight: "bold" }}>Password</p>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
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
              onClick={handelLogin}
            >
              Login
            </button>
            <p style={{ marginTop: "15px", fontSize: "14px" }}>
              Don’t have an account?
              <Link
                to="/register"
                style={{
                  color: "rgba(69, 21, 180, 1)",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </form>
    );
  };

  export default Login;
