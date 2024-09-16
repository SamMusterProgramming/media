import React from 'react'
//import { Chat,Person,Notifications} from '@material-ui/icons'
import { Person ,Chat, Notifications, Home, Search } from '@material-ui/icons'
import './TopBar.css'
import { Link } from 'react-router-dom'

//import{Search} from '@material-ui/icons'
//import  profile from './assets/42.jpg'
const TopBar = ({profileImg}) => {

  
  return (
     <div className='topbarContainer'>
          <div className="topbarLeft"> 
          <Link to='/' style={{textDecoration:"none"}}> 
            <span className='logo'> Samsocial</span>
          </Link>       
          </div>
          <div className="topbarCenter">
            <div className="searchbar">
               < Search />
              <input type="text" placeholder='Search for friends here' 
              className='searchInput' />
            </div>  
          </div>
          <div className="topbarRight">
             <div className="topbarLink">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
             </div>
             <div className="topbarIcons">
                <div className="topbarIconItem">
                   <Chat/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Home/>           
                    <span className="topbarIconBadge">1</span>
                </div>
             </div>
             <img src={`assets/asset/${profileImg}`} alt="" className='topbarImg' />
          </div>
            
          
     </div>
  )
}

export default TopBar
