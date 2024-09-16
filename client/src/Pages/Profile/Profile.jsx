
import './Profile.css'

import Feed from '../../Components/Feed/Feed'

import Sidebar from '../../Components/SideBar/SideBar'
import Infos from '../../Components/Infos/Infos'

const Profile = ({user}) => {
  return (
       <div className="container"> 
        <Sidebar/>
        <div className='profileContainer'>
         <div className="profileTop">
            <div className="profileCover">
              <img className='profileCoverImg' 
              src='/assets/asset/48.jpg' alt=""
              />
              <img src='/assets/asset/samir.jpeg' alt="" 
              className="userImg" 
              />
            </div>
         </div>
         <div className="profileInfos">
                 <h4 className="profileName">
                  Samir Haddadi
                 </h4>      
          </div>
         <div className="profileBottom">
          
          <Feed user={user}/>
          <Infos />
         </div>
       </div>
       </div> 
  
  )
}

export default Profile
