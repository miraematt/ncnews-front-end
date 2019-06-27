import React from "react";
import { Link } from "@reach/router";

const ArticlesLink = () => {
  return (
    <Link to="/articles">
      <button className="navbutton">Articles</button>
    </Link>
  );
};

export default ArticlesLink;
