import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>HOME</h2>
      </div>
      <Tweetbox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.key}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;

// // const notesSnapshot = getDoc(collection(db, "posts"));
// // setPosts(notesSnapshot.docs.map((doc) => doc.data()));
// db.collection("posts").onSnapshot((snapshot) =>(
//   setPosts(snapshot.docs.map((doc) => doc.data()))
//  ) );
