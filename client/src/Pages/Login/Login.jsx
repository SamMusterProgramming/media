import React, { useContext, useReducer, useRef } from 'react'
import './Login.css'
import { getUsers, loginCall } from '../../Components/apiCalls'
import { AuthContext } from '../../Components/Context/AuthContext';
import { Link } from '@material-ui/core';
import {AuthReducer,INITIAL_STATE} from '../../Components/Context/AuthReducer';



export default function Login() {
    

  const email = useRef();
  const password = useRef();

  const [user,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

  const handleSubmit = (e) => {
      e.preventDefault();
      let d = {}
      dispatch (loginCall({email:email.current.value,password:password.current.value} ,d ))
    //   loginCall({email:email.current.value,password:password.current.value} , dispatch);
      console.log(user)
    };
  return (
    <div className='loginContainer'>
        <div className="loginWrapper">
            <div className="loginright">
                <h3 className="loginlogo">SamSocial</h3>
                <span className="logindescr">
                    Connect with friends and the world around 
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
                    <button className="loginbutton" type="submit">Log In</button>
                    <span className="loginforget">Forgot Password</span>
                    <button className="register">Create an account</button>
                </div>
            </form>

        </div>
      
    </div>
  )
}

//export default login
