import React from "react";
import Article from "./Article";
import "./articles.css";

function Articles() {
  const articles = [
    {
      title: "Weekly Newsletter: Tweets for Higher Engagements",
      imageUrl: "./images/Main Article Image.png",
      imageAlt: "Mobile screen showcasing Twitter app logo",
      avatarUrl: "./images/User Avatar.png",
      description:
        "In this weekly newsletter, we will be covering ten types of engaging tweets. This is the guide if you're just starting out on Twitter.",
      authorName: "Jessica Andrews",
      authorJob: "Content Manager",
      objectId: 0,
    },
    {
      title: "7 Tips for Organic Traffic",
      imageUrl: "./images/Article 1 Image.png",
      imageAlt: "Mobile screen showcasing Twitter app logo",
      avatarUrl: "./images/User Avatar-1.png",
      description:
        "From SEO to integrating with Paid Advertising, this article covers it all.",
      authorName: "Spencer David",
      authorJob: "SEO Specialist",
      objectId: 1,
    },
    {
      title: "How To Start Your Own Business",
      imageUrl: "./images/Article 2 Image.png",
      imageAlt: "Mobile screen showcasing Twitter app logo",
      avatarUrl: "./images/User Avatar-2.png",
      description: "Starting your own business in 2021 has never been easier.",
      authorName: "Sara Frey",
      authorJob: "Business Leader",
      objectId: 2,
    },
    {
      title: "5 Tips For Better Branding",
      imageUrl: "./images/Article 3 Image.png",
      imageAlt: "Mobile screen showcasing Twitter app logo",
      avatarUrl: "./images/User Avatar-3.png",
      description:
        "From SEO to integrating with Paid Advertising, this article covers it all.",
      authorName: "David Suns",
      authorJob: "Brand Manager",
      objectId: 3,
    },
  ];
  return (
    <div className="articles">
      {articles.map((article) => {
        return <Article key={article.objectId} props={article} />;
      })}
    </div>
  );
}

export default Articles;
