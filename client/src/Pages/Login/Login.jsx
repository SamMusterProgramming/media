import React, { useContext, useRef } from 'react'
import './Login.css'
import { loginCall } from '../../Components/apiCalls'
import { AuthContext } from '../../Components/Context/AuthContext';
import { Link } from '@material-ui/core';

export default function Login() {
    

   const email = useRef();
   const password = useRef();
  const {user,isFetching ,error, dispatch} = useContext(AuthContext)

   const handleSubmit = (e) => {
      e.preventDefault()
      loginCall({email:email.current.value,password:password.current.value} , dispatch)
      
   };
    
  return (
    <div className='loginContainer'>
        <div className="loginWrapper">
            <div className="loginright">
                <h3 className="loginlogo">SamSocial</h3>
                <span className="logindescr">
                    Connect with freinds and the world around 
                </span>
            </div>
            <form className="loginleft" onSubmit={handleSubmit}>
                <div className="loginbox">
                    <input type="email" required 
                    placeholder='Email' ref={email}
                    className="logininput" />
                    <input type="password" minLength="6"
                    required placeholder='Password' 
                    className="logininput" ref={password} />
                    <button className="loginbutton">Log In</button>
                    {user}{
                        <Link to="/"></Link>
                    }
                    <span className="loginforget">Forgot Password</span>
                    <button className="register">Create an account</button>
                </div>
            </form>

        </div>
      
    </div>
  )
}

//export default login
