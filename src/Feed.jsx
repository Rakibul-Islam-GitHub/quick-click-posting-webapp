import React, { useContext, useEffect,  useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Feed.css";
import image from "./images/mymind-XUlsF9LYeVk-unsplash.jpg";
import imageProfile from "./images/avatar.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {AiOutlineLike} from 'react-icons/ai';
import {AiOutlineDislike} from 'react-icons/ai';

import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Avatar,
} from "@mui/material";
import {   doComment, getComment, getPost } from "./api-call/api";
import { AuthContext } from "./context/AuthContext";
const Feed = () => {
  const {user}= useContext(AuthContext)
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  
  

  useEffect(() => {
    getPost((res) => {
        setPosts(res)
    });
    getComment((res) => {
      setComments(res)
  });
    
  }, [])



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
                      {/* <FavoriteBorderIcon/> */}
                      <AiOutlineLike />
                      <Button size="small" color="primary">
                        Like
                      </Button>
                      <AiOutlineDislike />
                      <Button size="small" color="primary">
                        Dislike
                      </Button>
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
