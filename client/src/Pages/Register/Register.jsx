import React, { useState } from 'react'
import './Register.css'

const Register = () => {
  
  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const handleUsername = (event)=>
  {
    setUsername(event.target.value)
  }
  const handleEmail = (event)=>
  {
    setEmail(event.target.value)
  }
  const handlePassword = (event)=>
  {
    setPassword(event.target.value)
  } 
  var userData = {
    "username" : username ,
    "email" : email ,
    "password" : password
}
  const send =()=>{
    
    fetch('http://localhost:8080/register', { 

    method: 'POST', 
    headers:{'Content-type':'application/json'},
    
    body: JSON.stringify(userData) // body data type must match "Content-Type" header

  })  
  }
  return (
    <div className='registerContainer'>
    <div className="registerWrapper">
        <div className="registerright">
            <h3 className="registerlogo">SamSocial</h3>
            <span className="registerdescr">
                Connect with freinds and the world around 
            </span>
        </div>
        <div className="registerleft">
            <div className="registerbox">
                <input onChange ={handleUsername} type="text"placeholder='username' className="registerinput" />
                <input onChange ={handleEmail} type="text"placeholder='Email' className="registerinput" />
                <input onChange ={handlePassword} type="text" placeholder='Password' className="registerinput" />
                <input type="text"placeholder='Password againl' className="registerinput" />
                <button onClick={(e) =>send()}  className="registerbutton">Sign up</button>
                <button className="login">Log In</button>
            </div>
        </div>

    </div>
  
</div>
  )
}

export default Register
