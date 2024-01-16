import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const navigate = useNavigate();

  const [empdata, empdatachange] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
        console.log(resp)
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[]);

  const LoadEdit = (id) => {
    navigate("/Edit/" + id);
  };

const Removefunc =(id)=>{

  if(window.confirm('Do you want to remove?')){
    fetch("http://localhost:8000/employee/"+id,{
  method:"Delete",
}).then((resp)=>{
alert('Removed successfully')
//navigate("/")
window.location.reload()
}).catch((err)=>{
  console.log(err.message);
});
  }
}

  const LoadDetails = (id) => {
    navigate("/Detail/" + id);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div>
            <div className="divbtn">
              <Link className="btn btn-success" to="/Create">
                Add New (+)
              </Link>
            </div>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr >
                <td >ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item => 
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button onClick={() => LoadEdit(item.id)} className="btn btn-success">Edit</button>
                      <button  onClick={()=>Removefunc(item.id)}className="btn btn-danger">Remove</button>
                      <button  onClick={() => LoadDetails(item.id)}className="btn btn-primary">Details</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
