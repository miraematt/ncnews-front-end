import React from "react";
import { Link } from "@reach/router";

const UserCard = ({ user, index }) => {
  return (
    <Link to={`/users/${user.username}`}>
      <li key={index} className="infoshort userinfo">
        <div className="avatar userdata">
          <img src={`${user.avatar_url}`} alt="avatar" className="avatar-img" />
        </div>
        <span className="topic title userdata">{user.username}</span>
        <p className="userdata">{user.name}</p>
      </li>
    </Link>
  );
};

export default UserCard;
