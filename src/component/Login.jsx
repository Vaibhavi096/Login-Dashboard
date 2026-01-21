import React from 'react'
import { useNavigate } from 'react-router-dom'

import { MdEmail } from "react-icons/md"; 
import { MdOutlinePassword } from "react-icons/md"; 

const Login = () => {

  const Navigate = useNavigate()

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6e8efb, #a777e3)",
        fontFamily: "Arial, sans-serif",
      }}>
      

      <form action="" style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          width: "350px",
          textAlign: "center",
        }} >

          <p  style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "10px",
            textAlign:"center",
            color: "#333",
          }}>Login Form</p>

        <label style={{
            display: "block",
            textAlign: "left",
            marginBottom: "5px",
            fontWeight: "500",
            color: "#444",
          }}> <MdEmail/></label>

        <input type="text" placeholder='Enter E-mail'required 
        style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
          }} />

        <br /><br />

        <label style={{
            display: "block",
            textAlign: "left",
            marginBottom: "5px",
            fontWeight: "500",
            color: "#444",
          }}><MdOutlinePassword/></label>

        <input type="password" placeholder='Enter password' required style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
          }} />

        <br /><br />

        <button onClick={()=>Navigate("/dashboard")} type='submit'
         style={{
            width: "100%",
            padding: "12px",
            background: "#6e8efb",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "15px",
          }}> Login</button>

         <div style={{ fontSize: "14px", color: "#666" }}>

          <span>Not an Account ? 
             <button onClick={()=>Navigate("/")}
             style={{
                background: "transparent",
                border: "none",
                color: "#030303ff",
                cursor: "pointer",
                fontWeight: "bold",
              }}>Register Here..!!</button>
             </span>
        </div>
      </form>
    </div>
  )
}

export default Login
