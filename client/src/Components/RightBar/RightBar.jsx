import React from 'react'
import './RightBar.css'



import {Users} from '../../dummyData'
import OnlineFriend from '../OnlineFriend/OnlineFriend'
const RightBar = () => {
  return (
    <div className='rightbar'>
       <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src ='/assets/asset/gift.png' alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ploa Foster</b> and <b> 3 other Friends</b> have a birthday today
          </span>
        </div>
        <img src='/assets/asset/ad.png' alt="" className="rightbarAd" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        {Users.map(u=>(<OnlineFriend key={u.id} user={u} /> ))}
       </div>
    </div>
  )
}

export default RightBar;
