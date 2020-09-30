import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([
    {
      userName: "Stephen",
      Caption: "Hello React world !!",
      imageUrl:
        "https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
    },
    {
      userName: "Satiz",
      Caption: "Hello world !!",
      imageUrl: "https://etimg.etb2bimg.com/photo/57203645.cms"
    },
    {
      userName: "Ragul",
      Caption: "React world !!",
      imageUrl:
        "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
  ]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map((post, key) => (
        <Post
          key={key}
          userName={post.userName}
          Caption={post.Caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}
export default App;
