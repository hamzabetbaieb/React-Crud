import { Toast } from 'bootstrap';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const [id,setid]=useState("");
const [name,setname]=useState("");
const [password,setpassword]=useState('');
const [email,setemail]=useState("");
const [phone,setphone]=useState("");
const [adresse, setadresse] = useState('');
const [gender, setgender] = useState('');
const navigate= useNavigate()

const IsValidate=()=>{
let isproceed=true; 
let errormessage = 'Please enter the value in  '
if(name===null||name===''){
  isproceed=false;
  errormessage=+'Username'

}
if(isproceed===false){
toast.warning(errormessage);

}
return isproceed

}

const handlesubmit=(e)=>{

  e.preventDefault();

  const regobj = {id,name,password,email,phone,adresse,gender}
  if (IsValidate()){
  //console.log(regobj)
  fetch("http://localhost:8000/user",{
    method:"POST",
    headers : {"content-type":"application/json"},
    body : JSON.stringify(regobj)
  }).then((resp)=>{
  //alert('Register successfully')
  toast.success('Register successfully')
  navigate("/login")
  }).catch((err)=>{
    console.log(err.message);
  });
 }

}

  return (
    <div>
      
        <div className="offset-lg-3 col-lg-6">
          <form className="container"onSubmit={handlesubmit} >
            <div className="card" style={{"textAlign":"left"}}>
              <div className="card-title"></div>
              <h2>Employee Create</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>User Name <span>* </span></label>
                    <input  value={id} onChange={e=>setid(e.target.value)}  className="form-control"></input>
                  </div>
                  </div>

                  <div className="col-lg-6">
                  <div className="form-group">
                    <label>Password <span>* </span></label>
                    <input value={password} onChange={e=>setpassword(e.target.value)}  type="password" className="form-control"></input>
                  </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="form-group">
                    <label>Full Name <span>* </span></label>
                    <input value={name} onChange={e=>setname(e.target.value)}   className="form-control"></input>
                  </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email <span>* </span></label>
                    <input value={email} onChange={e=>setemail(e.target.value)}   className="form-control"></input>
                  </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone <span>* </span></label>
                    <input value={phone} onChange={e=>setphone(e.target.value)}   className="form-control"></input>
                  </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender <span>* </span></label>
                    <input checked={gender==='male'} onChange={e=>setgender(e.target.value)}  type="radio" name="gender" value="male"  className="app-check"></input>
                    <label>Male</label>
                    <input checked={gender==='female'} onChange={e=>setgender(e.target.value)} type="radio"  name="gender"value="female"  className="app-check"></input>
                    <label>Female</label>
                  </div>
                  </div>

                  <div className="col-lg-12">
                  <div className="form-group">
                    <label>Adresse <span>* </span></label>
                    <textarea value={adresse} onChange={e=>setadresse(e.target.value)}  className="form-control"></textarea>
                  </div>
                  </div>
                

                  

                  <div className="form-group">
                  
                  <button className="btn btn-primary" type = "submit"  onClick={IsValidate}>Register</button>
                  <Link className="btn btn-danger" to="/login">Back</Link>
                  </div>



                
              </div>
            </div>
          </form>
        </div>
      
    </div>
  );
};



export default Registration;
