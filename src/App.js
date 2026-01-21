import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from './component/Register'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Userlist from './component/Userlist'
import Updateuser from './component/Updateuser'
import Adduser from './component/Adduser'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path ="/" element ={<Register/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path ="/dashboard" element ={<Dashboard/>}/>
        <Route path ="/userlist" element ={<Userlist/>}/>
        <Route path ="/adduser" element ={<Adduser/>}/>
        <Route path ="/update/:id" element ={<Updateuser/>}/>
      </Routes>
    </Router>
  )
}

export default App
