import React from "react";
import { getOnePost } from "../graphql/queries";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./OnePost.css";

function OnePost() {
  let { slug } = useParams();
  let [post, setPost] = useState(null);
  useEffect(() => {
    getOnePost(slug).then((newData) => setPost(newData));
  }, [slug]);

  return !post ? (
    "Loading"
  ) : (
    <div className="one-post">
      <div className="bg-top"></div>
      <div className="author-date">
        <div className="author">
          <img className="author-img" src={post.author.picture.url} alt="" />
          <div className="author-name">{post.author.name}</div>
        </div>
        <div className="date-post">Ngày: {post.date}</div>
      </div>
      <div className="content">
        <img className="cover-image" src={post.coverImage.url} alt="" />
        <h1 className="title-post">{post.title}</h1>
        <div
          className="content-post"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </div>
    </div>
  );
}

export default OnePost;
