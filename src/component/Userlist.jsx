import { useEffect, useState } from 'react'
import { deleteUser, getAll } from './service/api';
import { useNavigate } from 'react-router-dom';

const Userlist = () => {

  const navigate= useNavigate() ;

  const[data , setData] = useState([]);
  const[query , setQuery] = useState("");
  // const[sort , setSort] = useState();
  const [filter, setFilter] = useState("");


  useEffect(()=>{
    fetchdata();
  }, [])
  const fetchdata = async()=>{
    const res = await getAll();
    setData(res.data);
    // console.log(res.data);
  }

  const handledelete = async (id) => {
  await deleteUser(id);
  fetchdata();
};

// const searched = data.filter(item => item.fullname.toLowerCase().includes(query.toLowerCase()));
const searched = data.filter(item =>
    item.fullname.toLowerCase().includes(query.toLowerCase())
  );

  const filtered = [...searched].sort((a , b) =>{
    if(filter == "asc")
    {
      return a.age - b.age ; 
    }
    else{
      return b.age - a.age ;
    }
  }
  );






  return (
    <>
    SearchHere : < input type='text' placeholder='Search Here' onChange={(e)=>setQuery(e.target.value)}/>
    <button type='Submit'>Search</button>

    Age Here : 
    <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
      <option value="asc">ASC</option>
       <option value="desc">DESC</option>
    </select>

      <table style={{
        border:"2" ,
          borderCollapse: "collapse",
          width: "80%",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}>
          
          
        <thead style={{ background: "#6e8efb", color: "#fff" }}>
          
          <tr>
          <th style={{ padding: "12px" }}>Full Name</th>
          <th style={{ padding: "12px" }}>E-mail</th>
          <th style={{ padding: "12px" }}>Mobile</th>
          <th style={{ padding: "12px" }}>Address</th>
          <th style={{ padding: "12px" }}>Password</th>
          <th style={{ padding: "12px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            filtered.map((item, id) => (
              <tr key="id">
                <td style={{ padding: "10px" }}>{item.fullname}</td>
                <td style={{ padding: "10px" }}>{item.email}</td>
                <td style={{ padding: "10px" }}>{item.mobile}</td>
                <td style={{ padding: "10px" }}>{item.address}</td>
                <td style={{ padding: "10px" }}>{item.password}</td>
                <td style={{ padding: "10px" }}>

                  <button onClick={()=>navigate(`/update/${item.id}`)}>Update</button>
                  <button onClick={()=>handledelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Userlist
