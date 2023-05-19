import React from "react";
import "./Post.css";
function Post({ post }) {
  return !post ? (
    "Loading"
  ) : (
    <a href={post.slug} className="post">
      <div className="image">
        <img className="cover-image" src={post.coverImage.url} alt="" />
      </div>
      <h2 className="title">{post.title}</h2>
      <p className="excerpt">{post.excerpt}</p>
      <p className="date">{post.date}</p>
    </a>
  );
}

export default Post;
