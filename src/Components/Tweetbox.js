import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@mui/material";
import { db } from "../firebase";
import { onSnapshot, doc, addDoc, collection } from "firebase/firestore";

const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    const collectionRef = collection(db, "posts");
    const payLoad = {
      displayName: "MarudhuNayan",
      username: "MarudhuAngel",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1477339161031892993/DD4IdVfA_400x400.jpg",
    };
    await addDoc(collectionRef, payLoad);

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetboxInput">
          <Avatar src="profile.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's Happening"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetboxImageInput"
          type="text"
          placeholder="Enter Image URL"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBoxTweetButton"
          variant="outlined"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;
