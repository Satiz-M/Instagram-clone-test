import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ userName, Caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Stephen"
          src="https://castyou-website.sgp1.digitaloceanspaces.com/2020/02/JASKARAN.jpg"
        />
        <h3>{userName}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post__text">
        <strong>{userName}</strong> {Caption}
      </h4>
    </div>
  );
}
export default Post;
