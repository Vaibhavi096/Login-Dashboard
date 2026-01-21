import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f6d365, #fda085)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        background: "#fff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        width: "600px",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#333", marginBottom: "20px" }}>Welcome to Dashboard 🎉</h1>
        <p style={{ color: "#555", fontSize: "16px", marginBottom: "30px" }}>
          You have successfully logged in.  
          This is your dashboard where you can access different sections.
        </p>

        {/* Example Sections */}
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "30px" }}>
          <button
            style={buttonStyle}
            onClick={() => alert("Profile Section Coming Soon!")}
          >
            Profile
          </button>
          <button
            style={buttonStyle}
            onClick={() => alert("Settings Section Coming Soon!")}
          >
            Settings
          </button>
          <button
            style={buttonStyle}
            onClick={() => alert("Reports Section Coming Soon!")}
          >
            Reports
          </button>
        </div>

        {/* Logout Button */}
        <button
          style={{
            ...buttonStyle,
            background: "#e63946"
          }}
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "12px 20px",
  background: "#6e8efb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease"
};

export default Dashboard;
