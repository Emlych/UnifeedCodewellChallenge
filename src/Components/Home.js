import React from "react";
import Articles from "./Articles";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Articles className="articles" />
      <Footer className="footer" />
    </div>
  );
}

export default Home;
