import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
const [username , setusername]=useState('');
const [password , setpassword]=useState('');
const navigate = useNavigate()

const proceedLogin=(e)=>{
e.preventDefault();
if(validate()){

//console.log('proceed');
fetch("http://localhost:8000/user/"+username).then((res)=>{
  return res.json();
}).then((resp)=>{
  console.log(resp)
  if(Object.keys(resp).length===0){
    toast.error('Please Enter valid username ');
  }else{
    if(resp.password===password){
      toast.success("Welcome "+ username)
   navigate('/home')
    }else{
      toast.error('Please Enter valid credentials ');
    }
  }
}).catch((err)=>{
toast.error('login failed to '+err.message);
});
}


}
const validate=()=>{
let result= true;
if(username===''|| username===null){
result=false
toast.warning('Please Enter Username')
}

if(password===''|| password===null){
  result=false
  toast.warning('Please Enter Password')
  }
return result;

}

  return (
    <div style={{  justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={proceedLogin}>
            <div className="card" style={{"textAlign":"left"}}>
              <div className="card-title"></div>
          
              <h2>Employee Create</h2>
            </div>
            <div className="card-body">
            
              
                  <div className="form-group">
                    <label>User Name</label>
                    <input value={username} onChange={e=>setusername(e.target.value)}  className="form-control"></input>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input value={password} onChange={e=>setpassword(e.target.value)} className="form-control"></input>
                  </div>
                </div>   
                <div className='card-footer'>
<button type="submit" className='btn btn-primary'>Login</button>
<Link className="btn btn-success" to ='/register'> New User</Link>

                </div>
              
            
          
                  </form>
                  </div>
                  
                  </div>
                  
                  
                  
    </div>
  );
}

export default Login;
