import React from "react";
import { Button } from "@mui/material";
import "./Feed.css";

import image from "./images/mymind-XUlsF9LYeVk-unsplash.jpg";
import imageProfile from "./images/ProfilePhoto.JPG"
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

const Feed = () => {
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
    alignItems: "center", // corrected typo in 'alignItems'
  }}
>
  <div style={{ display: "flex", alignItems: "center" }}>
    <Avatar className="ProfilePhoto" alt="Remy Sharp"  src={imageProfile} />
    <span className="name">Harasis</span>
  </div>
  <div>
    <span className="time">June 7, 2023</span>
  </div>
</Typography>
                <img className="imagePost" src={image} alt="post image" />
                <div className="name-time-container"></div>
              </div>
              {/* <CardContent> */}
                {/* <Typography gutterBottom variant="h6" component="div">
                  Lizard
                </Typography> */}
                {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography> */}
              {/* </CardContent> */}
            </CardActionArea>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}
            >
              <div>
                {/* <FavoriteBorderIcon/> */}
                <AiOutlineLike/>
                <Button size="small" color="primary">
                  Like
                </Button>
                <AiOutlineDislike/>
                <Button size="small" color="primary">
                  Dislike
                </Button>
              </div>
              <Button size="small" color="primary">
                Comment
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feed;
