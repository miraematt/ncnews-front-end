import React from "react";
import ArticlesLink from "./ArticlesLink";
import TopicsLink from "./TopicsLink";
import UsersLink from "./UsersLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlist">
        <li className="list-item">
          <ArticlesLink />
        </li>
        <li className="list-item">
          <TopicsLink />
        </li>
        <li className="list-item">
          <UsersLink />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
