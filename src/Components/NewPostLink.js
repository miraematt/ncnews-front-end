import React from "react";
import { Link } from "@reach/router";

const NewPostLink = () => {
  return (
    <Link to="/articles/post">
      <button className="navbutton">New Post</button>
    </Link>
  );
};

export default NewPostLink;
