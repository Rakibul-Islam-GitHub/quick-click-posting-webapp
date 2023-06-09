import React, { useState } from "react";
import "./Upload.css";
import { Button, TextField } from "@mui/material";
import imageProfile from "./images/ProfilePhoto.JPG";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';

import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Avatar,
} from "@mui/material";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textInput, setTextInput] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    console.log(file, selectedImage);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div className="feed-main">
      <div className="post-home">
        <div className="single-post">
          <Card className="post">
            <CardActionArea>
              <div className="image-container">
                <Typography
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
                    <Avatar className="ProfilePhoto" alt="Remy Sharp" src={imageProfile} />
                    <span className="name">Harasis</span>
                  </div>
                  <div>
                    <label htmlFor="upload-input">
                      <Button component="span">
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
                  <img className="imagePost" src={selectedImage} alt="post image" />
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

              <Button size="small"  color="primary">
                POST
              </Button>
    
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;
