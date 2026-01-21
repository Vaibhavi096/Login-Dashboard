// import React from "react";
import axios from "axios";

const BaseUrl = "https://68c104b90b196b9ce1c59dc1.mockapi.io/api/users/crud" ;

export const addUser =(user) => axios.post(BaseUrl , user);
export const deleteUser =(id)=> axios.delete(`${BaseUrl}/${id}`)
export const getAll =() => axios.get(BaseUrl);
export const updateUser =( id , users) => axios.put(`${BaseUrl}/${id}`, users);
export const getUserById =(id) => axios.get(`${BaseUrl}/${id}`)

