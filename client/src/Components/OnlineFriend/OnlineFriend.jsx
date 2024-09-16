import React from 'react'

const OnlineFriend = ({user}) => {
  return (
    <>
      <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg'
                 src={user.profilePicture} alt="" 
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className='friendName'>{user.username}</span>
            </li>
        </ul>
    </>
  )
}

export default OnlineFriend
