import React, { useContext, useState } from "react";
import "./Upload.css";
import { Button, TextField } from "@mui/material";
import imageProfile from "./images/avatar.png";
import { AuthContext } from "./context/AuthContext";

import {
  Card,
  CardActionArea,
  Typography,
  CardActions,
  Avatar,
} from "@mui/material";
import { doAddPost, getPost } from "./api-call/api";

const Upload = ({setPosts}) => {
  const { user} = useContext(AuthContext)
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(null);
  const [textInput, setTextInput] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setImage(file)
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit=()=>{
    console.log(image, textInput);
    if (image===null || textInput==='') {
      alert('please add an image and caption')
    }
    const formData= new FormData()
    formData.append('image', image)
    formData.append('description', textInput)
    doAddPost(formData, user.token, (res)=>{
        
      if (res) {
        
        getPost((res2) => {
          setPosts(res2.reverse())
          setSelectedImage(null)
          setImage(null)
          setTextInput('')
      });
      }else{alert('Server error')}
    })
  }

  return (
    <div className="feed-main">
      <div className="post-home">
        <div className="single-post">
          <Card className="post">
            <CardActionArea>
              <div className="image-container">
                <Typography
                  component={'span'}
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    padding: "10px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {user && <Avatar className="ProfilePhoto" alt="Remy Sharp" src={imageProfile} />}
                    <span className="name">{user && user.name}</span>
                  </div>
                  <div>
                    <label  htmlFor="upload-input">
                      <Button  component="span">
                        Upload Image
                      </Button>
                      <input
                        id="upload-input"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </Typography>
                <TextField
                  multiline
                  rows={2}
                  value={textInput}
                  onChange={handleTextInputChange}
                  label="Caption"
                  variant="outlined"
                  fullWidth
                />
                {selectedImage && (
                  <img className="imagePost" src={selectedImage} alt="postimage" />
                )}
                <div className="name-time-container"></div>
              </div>
            </CardActionArea>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >

             

              {!user.token ?  <span>
                  <Button disabled className="loginButton" type="submit" size="small" color="primary">POST</Button> 
                  <span className="comment-disable-msg">You have to login to comment here!</span>
                </span> :
                <Button onClick={handleSubmit} type="submit" className="loginButton"  size="small" color="primary">POST</Button>
                }
    
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;
