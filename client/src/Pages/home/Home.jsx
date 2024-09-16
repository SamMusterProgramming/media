import React, { useContext } from 'react'
import Feed from '../../Components/Feed/Feed'
import RightBar from '../../Components/RightBar/RightBar'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'
import { AuthContext } from '../../Components/Context/AuthContext'

const Home = () => {

  const {user} = useContext(AuthContext)
  return (
        
        <div className="homeContainer">
           <SideBar/>
           <Feed user={user}/>
           <RightBar/>        
        </div>
          
    
       
  )
}

export default Home ;
