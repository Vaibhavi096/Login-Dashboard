import React from 'react'

import { FaRegUser } from "react-icons/fa";    //user icon
import { MdEmail } from "react-icons/md";  // email icon
import { FaRegAddressBook } from "react-icons/fa"; // address icon
import { FaMobile } from "react-icons/fa";    //mobile icon
import { MdOutlinePassword } from "react-icons/md";   //password icon
import { useNavigate } from 'react-router-dom';

const Register = () => {
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
          width: "400px",
          color: "#333",}}>

        <p style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}>Registration Form</p>

        <FaRegUser style={{ marginRight: "10px", fontSize: "18px", color: "#6e8efb" }}/>
        <input style={{
              flex: 1,
              height: "35px",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }} type="text" placeholder='Enter Full Name' required />
        <br /><br />

        <MdEmail style={{ marginRight: "10px", fontSize: "18px", color: "#6e8efb" }}/>
        <input style={{
              flex: 1,
              height: "35px",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }} type="email" placeholder='Enter E-mail'required />
        <br /><br />

        <FaRegAddressBook  style={{ marginRight: "10px", fontSize: "18px", color: "#6e8efb" }}/>
        <textarea style={{
              flex: 1,
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              resize: "none",
              height: "70px",
            }} name="Address" cols={15} rows={4} placeholder='Enter Address'></textarea>
        <br /><br />

        <FaMobile style={{ marginRight: "10px", fontSize: "18px", color: "#6e8efb" }} />
        <input style={{
              flex: 1,
              height: "35px",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }} type="number" placeholder='Enter Contact Number' required/>
        <br /><br />

        <MdOutlinePassword style={{ marginRight: "10px", fontSize: "18px", color: "#6e8efb" }}/>
        <input style={{
              flex: 1,
              height: "35px",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }} type="password" placeholder='Enter password' required />
        <br /><br />

        <button  onClick={()=>Navigate("/login")} type='submit' style={{
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
          }}> Submit</button>

        <div>
          <span>Already Registered ! Login Here 
            <button onClick={()=>Navigate("/login")} style={{
                background: "transparent",
                border: "none",
                color: "#6e8efb",
                cursor: "pointer",
                fontWeight: "bold",
              }}>Login</button>
            </span>
        </div>
      </form>
    </div>
  )
}

export default Register
