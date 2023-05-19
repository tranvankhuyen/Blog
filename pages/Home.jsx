import React from "react";
import { useState, useEffect } from "react";
import { getPosts } from "../src/graphql/queries";
import Post from "../src/components/Post";
import "./Home.css";
function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then((newData) => setPosts(newData));
  }, []);
  return !posts ? (
    "Loading"
  ) : (
    <div className="home">
      <div className="bg-top">
        <h1 className="sub-title">The Blog</h1>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
