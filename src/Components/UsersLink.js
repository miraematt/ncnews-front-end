import React from "react";
import { Link } from "@reach/router";

const UsersLink = () => {
  return (
    <Link to="/users">
      <button className="navbutton">Users</button>
    </Link>
  );
};

export default UsersLink;
