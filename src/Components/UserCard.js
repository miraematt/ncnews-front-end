import React from "react";
import { Link } from "@reach/router";

const UserCard = ({ user, index }) => {
  return (
    <Link to={`/users/${user.username}`}>
      <li key={index} className="infoshort">
        <span className="topic title">{user.username}</span>
        Name: {user.name}
        Avatar:
        <img
          src={`${user.avatar_url}`}
          alt="avatar"
          height="50px"
          width="50px"
        />
      </li>
    </Link>
  );
};

export default UserCard;
