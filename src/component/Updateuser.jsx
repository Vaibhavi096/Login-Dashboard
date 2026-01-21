import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';

import { FaRegUser , FaRegAddressBook , FaMobile } from "react-icons/fa";    //user , address , mobile icon
import { MdEmail } from "react-icons/md";  // email icon
import { MdOutlinePassword } from "react-icons/md";  // password icon

import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { getUserById, updateUser } from './service/api';

const Updateuser = () => {

  const {id} = useParams();
  const [fullname , setFullName] = useState('')
  const [email , setEmail] = useState('')
  const [age , setAge] = useState('')
  const[address , setAddress] = useState('')
  const[mobile , setMobile] = useState('')
  const[password , setPassword] = useState('')

  const navigate = useNavigate();

  useEffect(()=>{
    fetchUser();
  }, [id]);

  const fetchUser =async() => await getUserById(id)
  .then(res=>{
    setFullName(res.data.fullname)
    setEmail(res.data.email)
    setAge(res.data.age)
    setMobile(res.data.mobile)
    setAddress(res.data.address)
    setPassword(res.data.password)
    console.log(res.data)
  })
  
  const handleUpdate = async(e)=> {
  e.preventDefault();  
  const users = { fullname, email,age, mobile, address, password };
  await updateUser(id , users)
  .then(res=>{
    console.log(res.data);
    navigate('/userlist')
  })
  }


  return (
    <>
    <form onSubmit={handleUpdate}
    style={{width: "60%",
    marginTop:"50px",
          marginLeft: "250px",
          border: "2px solid black",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          backgroundColor: "#f9f9f9"}}>

    <h2 style={{textAlign:"center" ,  marginBottom: "20px"}}> Update User</h2>

    <div className='icons' style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
    <FaRegUser style={{ fontSize: "20px" }}/>
      <Form.Control
        type="Text"
        id="inputPassword5"
        placeholder='Enter Full Name Here .!'
        value={fullname}
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
        id="inputPassword5"
        placeholder='Enter Email Here .!'
        value={email}
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
      <FaMobile style={{ fontSize: "20px" }}/>
      <Form.Control
        type="number"
        id="inputPassword5"
        placeholder='Enter Age Here .!'
        value={age}
        required
       onChange={(e)=> setAge(e.target.value)}
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
        id="inputPassword5"
        placeholder='Enter Address Here .!'
        value={address}
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
        id="inputPassword5"
        placeholder='Enter Number Here .!'
        value={mobile}
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
        id="inputPassword5"
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
            transition: "0.3s"}} onClick={()=>navigate("/login")}>Add User</button>

          </div>
      </form>
    </>
  );
}

export default Updateuser
