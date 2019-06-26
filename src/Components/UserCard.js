import React from "react";
import { Link } from "@reach/router";

const UserCard = ({ user, index }) => {
  return (
    <Link to={`/users/${user.username}`}>
      <li key={index}>
        <span className="username">{user.username}</span>
        <br />
        Name: {user.name}
        <br />
        Avatar:{user.avatar_url}
        />
      </li>
    </Link>
  );
};

export default UserCard;
