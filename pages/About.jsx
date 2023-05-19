import React from "react";
import { useState, useEffect } from "react";
import { getAuthors } from "../src/graphql/queries";
import "./About.css";
function About() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    getAuthors().then((newData) => setAuthors(newData));
  }, []);
  return !authors ? (
    "Loading"
  ) : (
    <div className="about">
      <div className="infor">
        <h2>こんにちは, là tôi đây</h2>
        <h1 data-string={authors[0].name} className="name">
          {authors[0].name}
        </h1>
        <p className="bio">{authors[0].biography}</p>
      </div>
      <div className="avatar">
        <img className="avt" src={authors[0].picture.url} alt="" />
      </div>
    </div>
  );
}

export default About;
