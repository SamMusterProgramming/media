import React, { useState } from 'react'
import './Share.css'

import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Share = ({user}) => {
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  var postData = 
       {
            "link": "46.jpg", 
            "description": "posted to be saved",
            "user_id":5
        }
        
  

     const handleChange = () => {
      fetch('http://localhost:8080/post', { 

      method: 'POST', 
      headers:{'Content-type':'application/json'},
      
      body: JSON.stringify(postData) // body data type must match "Content-Type" header

    })  
  }
    

  return (
    <div className='share'>
       <div className="shareWrapper">
         <div className="shareTop">
            <Link to='/profile' ><img className='shareImg' src={PF+user.profileImg} alt="" /></Link>
            <input placeholder='what is in your mind' 
            className="shareInput" />
         </div>
         <hr className='shareHr'/>
         <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor='tomato' className='shareIcon' />
                    <span className="shareText">Photo or Video</span>
                    
                </div>
                <div className="shareOption">
                    <Label htmlColor='blue' className='shareIcon' />
                    <span className="shareText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor='green' className='shareIcon' />
                    <span className="shareText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                    <span className="shareText">Feelings</span>
                </div>
            </div>
            <button className='shareButton' onClick={(e)=>handleChange()}>Sahre</button>
         </div>
       </div>
    </div>
  )
}

export default Share ;
