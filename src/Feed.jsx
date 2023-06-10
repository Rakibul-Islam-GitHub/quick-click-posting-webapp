import React, { useEffect, useState } from "react";
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
import {  getComment, getPost } from "./api-call/api";

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  

  useEffect(() => {
    getPost((res) => {
        setPosts(res)
    });
    getComment((res) => {
      setComments(res)
  });
    
  }, [])
  // console.log(new Date(posts[0].createdAt).toDateString().slice(4,15));


  const handleComment = (postid) => {
    console.log(postid,comment);
   
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
                <div className="comment-box">
                <TextField
                  multiline
                  rows={2}
                  name="comment"
                  value={comment}
                  onChange={(e)=>setComment(e.target.value)}
                  label="write your comment.."
                  variant="outlined"
                  fullWidth
                />
                <Button onClick={()=>handleComment(single._id)} className="loginButton" type="submit" variant="contained" color="primary">Submit</Button>
                </div>
                
              </div>

            </div>
          </div>
        ))}
    </>
  );
};

export default Feed;
