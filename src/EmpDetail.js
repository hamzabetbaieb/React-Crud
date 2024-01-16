import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EmpDetail = () => {
  const {empid}=useParams();
  const[empdata,empdatachange]=useState({})
  useEffect(()=>{
    fetch("http://localhost:8000/employee/"+empid)
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      empdatachange(resp);
    })
    .catch((err) => {
      console.log(err.message);
    });

  },[])
  return (
    <div>
      <h1>Detail Page</h1> 
      <div className="card" style={{"textAlign":"left"}}>
              <div className="card-title"></div>
              <h2>Employee Details</h2>
            </div>
            <div className="card-body"></div>
      <h1>The employee name is {empdata.name} with ID: {empdata.id}</h1> 
      <h2>Contact employee : {empdata.phone}</h2>
      <h3>Email : {empdata.email}</h3>
      <Link className='btn btn-danger' to="/">Back to listing</Link>

    </div>
  );
}

export default EmpDetail;
