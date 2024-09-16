
import TopBar from "./Components/TopBar/TopBar";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/home/Home";
import './Pages/home/Home.css'
import { useContext, useEffect, useState } from "react";
import Login from   "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {Link, Route ,BrowserRouter as Router,Routes} from 'react-router-dom';
import './App.css'
import { AuthContext, AuthContextProvider } from "./Components/Context/AuthContext";



function App() {

  
  const {user} = useContext(AuthContext)
  
  console.log(user)
  return (
  
    <div className="appWrapper">  
     { user ? <TopBar profileImg ={user.profileImg} /> : <Login/>}
      <div >
            
            <Routes>
              <Route  path="/"  element={ 
                user ? <Home /> :
                <Register/>
                } />
                 
              <Route path="/profile" element={<Profile user={user}/>}/>
               
              <Route path="/login" element = { user ? <Link to="/" /> : <Link to="/login" /> } />
              
              <Route path="/register" element={<Register />}/>
              
             </Routes>  
           
      </div>    
    </div>
    
  );
}

export default App;
