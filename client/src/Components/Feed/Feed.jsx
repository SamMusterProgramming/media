import React, { useEffect, useState } from 'react'
import './Feed.css'
import Share from '../Share/Share'


import axios from 'axios'
import Post from '../Post/Post'

const Feed = ({user}) => {
  
  const [postData,setPostData] = useState([{}])
  

  useEffect( ()=>{
    const fetchPosts = async () =>{
      await fetch("http://localhost:8080/timeline/5").then (
          response => response.json()
        ).then(
          data =>{ setPostData(data)
          
          }
        )
      
    };
     fetchPosts();
  },[])
  
  //const posts = postData.filter((post)=>post.user_id == user.id)

  
  return (
    <div className='feed'>
      
        <div className="feedWrapper">
           <Share user={user}/>
           {postData.map((post, i) => (
             <Post key={i} post={post} user ={user}/>
           ))}
          
        </div>
    </div>
  )
}

export default Feed
