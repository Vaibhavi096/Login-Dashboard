import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { FaRegUser } from "react-icons/fa";    //user icon
import { MdEmail } from "react-icons/md";  // email icon
import { FaRegAddressBook } from "react-icons/fa"; // address icon
import { FaMobile } from "react-icons/fa";    //mobile icon
import { MdOutlinePassword } from "react-icons/md";  // password icon
import { useNavigate } from 'react-router-dom';
import {addUser} from "./service/api";

const AddUser=() => {
 
const Navigate = useNavigate();
const[fullname , setFullName] = useState('')
const[email , setEmail] = useState('')
const[age , setAge] = useState('')
const[address , setAddress] = useState('')
const[mobile , setMobile] = useState('')
const[password , setPassword] = useState('')

const handleAddUser = async(e) =>{
  e.preventDefault();
  const UserData ={fullname , email , age ,address , mobile , password};
  await addUser(UserData)
  .then(res =>{
    console.log(res.data);
    setFullName('')
    setEmail('')
    setAge('')
    setAddress('')
    setMobile('')
    setPassword('')
  })
  alert("Successfully Added !")
  Navigate("/userlist")
}


  return (
    <>
    <form action="" onSubmit={handleAddUser}
    style={{width: "60%",
    marginTop:"50px",
          marginLeft: "250px",
          border: "2px solid black",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          backgroundColor: "#f9f9f9"}}>

    <h2 style={{textAlign:"center" ,  marginBottom: "20px"}}> Add User</h2>

    <div className='icons' style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
    <FaRegUser style={{ fontSize: "20px" }}/>
      <Form.Control
        type="Text"
        placeholder='Enter Full Name Here .!'
        onChange={(e)=> setFullName(e.target.value)}
        required
        style={{width: "80%",
              height: "30px",
              marginLeft: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              paddingLeft: "10px"}}
      />
      </div>
      <br />
      <div className='icons' style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
      <MdEmail style={{ fontSize: "20px" }}/>
      <Form.Control
        type="email"
        placeholder='Enter Email Here .!'
        onChange={(e)=> setEmail(e.target.value)}
        required
        style={{width: "80%",
              height: "35px",
              marginLeft: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              paddingLeft: "10px"}}
      />
      </div>
      <br />
      <div className='icons' style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
      <MdEmail style={{ fontSize: "20px" }}/>
      <Form.Control
        type="email"
        placeholder='Enter Age Here .!'
        onChange={(e)=>setAge(e.target.value)}
        required
        style={{width: "80%",
              height: "35px",
              marginLeft: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              paddingLeft: "10px"}}
      />
      </div>
      <br />

      <div className='icons' style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
      <FaRegAddressBook style={{ fontSize: "20px" }}/>
      <Form.Control
        type="address"
        
        placeholder='Enter Address Here .!'
        required
        onChange={(e)=> setAddress(e.target.value)}
        style={{width: "80%",
              height: "35px",
              marginLeft: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              paddingLeft: "10px"}}
      />
      </div>
      <br />

      <div className='icons' style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
      <FaMobile style={{ fontSize: "20px" }}/>
      <Form.Control
        type="contact"
        
        placeholder='Enter Number Here .!'
        required
        onChange={(e)=> setMobile(e.target.value)}
        style={{width: "80%",
              height: "35px",
              marginLeft: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              paddingLeft: "10px"}}
      />
      </div>
      <br />

      <div className='icons' style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
      <MdOutlinePassword style={{ fontSize: "20px" }}/>
      <Form.Control
        type="password"
       
        placeholder='Enter Password Here .!'
        value={password}
        required
        onChange={(e)=> setPassword(e.target.value)}
        style={{width: "80%",
              height: "35px",
              marginLeft: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              paddingLeft: "10px"}}
      />
      </div>
      <br />
    <div>
      <button type='submit' style={{
            display: "block",
            width: "80%",
            height: "40px",
            marginLeft:"30px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "0.3s"
          }}>Submit</button>
</div>
<div>
          <button type='submit' style={{
            display: "block",
            width: "80%",
            height: "40px",
            marginLeft:"30px",
            marginTop:"20px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "0.3s"}} onClick={()=>Navigate("/login")}>Add User</button>

          </div>
      </form>
    </>
  );
}


export default AddUser;