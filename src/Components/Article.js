import React from "react";
import "./article.css";

const Article = ({ props }) => {
  return (
    <div className="article">
      <div className="articles__secondary--container">
        <img
          className="main--image"
          src={props.imageUrl}
          alt={props.imageAlt}
        />
        <div className="articles__secondary--text">
          <p className="articles__secondary--title">{props.title}</p>
          <p className="articles__secondary--description">
            {props.description}
          </p>
          <div className="articles__secondary--author">
            <img
              className="author--avatar"
              src={props.avatarUrl}
              alt="Some comment"
            />
            <div className="author--identity">
              <p className="author--name">{props.authorName}</p>
              <p className="author--job">{props.authorJob}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
