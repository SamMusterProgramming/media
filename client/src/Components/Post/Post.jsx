import React, { useEffect, useState } from 'react'
import './Post.css'

import { MoreVert } from '@material-ui/icons'
import {format} from 'timeago.js'
import { Users } from '../../dummyData'

const Post = ({post,user}) => {
  
   const [likes,setLikes] = useState(post.like);
   const [isLiked,setIsLiked] =useState(true);

   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
   const handleLike =() => {
      setLikes(isLiked ? likes+1 : likes-1) ;
      setIsLiked(!isLiked)
   }
 /*
   useEffect(async()=>
   {
    await fetch("http://localhost:8080/:id").
    then( response => response.json()).
    then( data => {
      SetUser(data)
    })
   })
  */

  return (
    <div className='post'>
       <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src = {`assets/asset/samir.jpeg`}  alt="" />
                <span className="postUsername"> {user.name}</span>
                <span className="postDate">{format(post.created)}</span>
            </div>
            <div className="postRight">
                <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText"> {post.description} </span>
            <img src ={PF+post.link} alt="" className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src={PF+'heart.png'} onClick={()=>handleLike()} alt="" />
                <img className='likeIcon' src='/assets/asset/like.png' onClick={()=>handleLike()} alt="" />
                <span className='postLikeCounter'>{likes}  people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentT">{post.comment} comments</span>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Post ;
