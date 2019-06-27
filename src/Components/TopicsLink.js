import React from "react";
import { Link } from "@reach/router";

const TopicsLink = () => {
  return (
    <Link to="/topics">
      <button className="navbutton">Topics</button>
    </Link>
  );
};

export default TopicsLink;
