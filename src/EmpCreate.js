import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

const EmpCreate = () => {
const [id,setid]=useState("");
const [name,setname]=useState("");
const [email,setemail]=useState("");
const [phone,setphone]=useState("");
const [active,setactive]=useState(true);
const [errorMessage, setErrorMessage] = useState('');
const navigate= useNavigate()

const handlesubmit=(e)=>{
  e.preventDefault();
  /*if (name.trim() === '' || email.trim() === '') {
    setErrorMessage('Veuillez remplir tous les champs obligatoires.');
  } else {*/
  const empdata = {name,email,phone,active}
fetch("http://localhost:8000/employee",{
  method:"POST",
  headers : {"content-type":"application/json"},
  body : JSON.stringify(empdata)
}).then((resp)=>{
alert('Saved successfully')
navigate("/")
}).catch((err)=>{
  console.log(err.message);
});


}

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{"textAlign":"left"}}>
              <div className="card-title"></div>
              <h2>Employee Create</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input value={id} disabled="disabled" className="form-control"></input>
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input value={name} required onChange={e=>setname(e.target.value)} className="form-control"></input>
                    {name.length==0 && <span className="text-danger">entrer le nom </span>}
                  
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input value={email} required onChange={e=>setemail(e.target.value)} className="form-control"></input>
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input value={phone} onChange={e=>setphone(e.target.value)} className="form-control"></input>
                  </div>

                  <div className="col-lg-12">
                  <div className="form-check">
                  <input checked={active} onChange={e=>setactive(e.target.checked)} type="checkbox" className="form-check-input"></input>
                    <label className="form-control-label">Is Active</label>
                    
                  </div>
                  </div>

                  

                  <div className="form-group">
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  <button className="btn btn-success" type = "submit">Save</button>
                  <Link className="btn btn-danger" to="/">Back</Link>
                  </div>



                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;
