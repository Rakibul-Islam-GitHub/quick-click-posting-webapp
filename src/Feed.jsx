import React, { useContext, useEffect,  useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Feed.css";
import imageProfile from "./images/avatar.png"
import {AiFillDislike, AiFillLike, AiOutlineLike} from 'react-icons/ai';
import {AiOutlineDislike} from 'react-icons/ai';

import {
  Card,
 
  CardActionArea,
  Typography,
  CardActions,
  Avatar,
} from "@mui/material";
import {   doComment, doDownvote, doUpvote, getComment, getPost } from "./api-call/api";
import { AuthContext } from "./context/AuthContext";
const Feed = ({posts, setPosts}) => {
  const {user}= useContext(AuthContext)

  const [comments, setComments] = useState([])
  
  

  useEffect(() => {
    
    getComment((res) => {
      setComments(res)
  });
    
  }, [])

  const handleUpvote=(postid)=>{
    if (!user.token) {
      alert('please login to like this post!')
    }
    doUpvote(postid, user.token,  (res)=>{
   
      if (res) {
        console.log(res);
        getPost((res2) => {
          setPosts(res2.reverse())
          
      });
      }
     })
    
  }
  const handleDownvote=(postid)=>{
    if (!user.token) {
      alert('please login to dislike this post!')
    }
    doDownvote(postid, user.token,  (res)=>{
   
      if (res) {
        console.log(res);
        getPost((res2) => {
          setPosts(res2.reverse())
          
      });
      }
     })
    
  }
  
  const handleComment = (e, postid) => {
    e.preventDefault()
   if (!user.token) {
    alert('You have to login first to comment!')
   }
   const comment= e.target.comment.value;
   if (comment ==='') {
    alert('comment can not be empty')
    return
   }

   doComment({comment, postid}, user.token,  (res)=>{
   
    if (res) {
      e.target.reset()
      getComment((res) => {
        setComments(res)
    });
    }
   })
  };


  return (
    <>
      {posts.length>0 &&
        posts.map((single) => (
          <div key={single._id} className="feed-main">
            <div className="post-home">
              <div className="single-post">
                <Card className="post">
                  <div>
                    <Typography
                      component={"span"}
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        padding: "10px",
                        justifyContent: "space-between",
                        alignItems: "center", // corrected typo in 'alignItems'
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          className="ProfilePhoto"
                          alt="Remy Sharp"
                          src={imageProfile}
                        />
                        <span className="name">{single.postby.name}</span>
                      </div>
                      <div>
                        <span className="time">
                          {new Date(single.createdAt)
                            .toDateString()
                            .slice(4, 15)}
                        </span>
                      </div>
                    </Typography>
                  </div>
                  <CardActionArea>
                    <div className="post-wrapper">
                      <p>{single.description}</p>
                      <img
                        className="imagePost"
                        src={single.image}
                        alt="postimage"
                      />
                      <div className="name-time-container"></div>
                    </div>
                  </CardActionArea>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      {single.upvote.includes(user.id)? 
                       <>
                       {single.upvote.length}
                       <AiFillLike className="liked-icon"/> 
                       <Button className="liked-btn" onClick={()=>handleUpvote(single._id)} size="small" color="primary">
                         Liked
                       </Button>
                       </>
                        : 
                      <>
                      {single.upvote.length}
                      <AiOutlineLike /> 
                      <Button onClick={()=>handleUpvote(single._id)} size="small" color="primary">
                        Like
                      </Button>
                      </>
                      
                      }

{single.downvote.includes(user.id)? 
                       <>
                       {single.downvote.length}
                       <AiFillDislike className="disliked-icon"/> 
                       <Button className="disliked-btn" onClick={()=>handleDownvote(single._id)} size="small" color="primary">
                         Disliked
                       </Button>
                       </>
                        : 
                      <>
                      {single.downvote.length}
                      <AiOutlineDislike /> 
                      <Button onClick={()=>handleDownvote(single._id)} size="small" color="primary">
                        Dislike
                      </Button>
                      </>
                      
                      }


                      </div>
                    
                  </CardActions>
                </Card>
              </div>

              <div className="comment-section">
              <div className="comment-list">
                  {comments.length>0 && comments.filter(el=> el.postid=== single._id).map((cmt)=>(
                    <li key={cmt._id} className="single-comment">
                    <span className="comment-name">{cmt.username}</span> 
                    <span className="comment-time">{new Date(cmt.createdAt)
                            .toDateString()
                            .slice(4, 15)}</span>
                    <p className="comment">{cmt.comment}</p>
                    </li>
                  ))}
                 
                </div>
                <div >
                  <form className="comment-box" onSubmit={(e)=>handleComment(e,single._id)}>
                  <TextField
                  multiline
                  rows={2}
                  name="comment"
                  label="write your comment.."
                  variant="outlined"
                  fullWidth
                />
                {!user.token ?  <span>
                  <Button disabled className="loginButton" type="submit" variant="contained" color="primary">Submit</Button> 
                  <span className="comment-disable-msg">You have to login to comment here!</span>
                </span> :
                <Button  type="submit" className="loginButton" variant="contained" color="primary">Submit</Button>
                }
                  </form>
                
                </div>
                
              </div>

            </div>
          </div>
        ))}
    </>
  );
};

export default Feed;
