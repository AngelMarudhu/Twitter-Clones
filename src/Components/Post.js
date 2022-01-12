import "./Post.css";
import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="postAvatar">
          <Avatar src={avatar} />
        </div>

        <div className="postBody">
          <div className="postHeader">
            <div className="postHeaderText">
              <h3>
                {displayName}
                <span className="postHeaderSpecial">
                  {verified && <VerifiedUserIcon className="postBadge" />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className="postHeaderDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="postFooter">
            <ChatBubbleIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
