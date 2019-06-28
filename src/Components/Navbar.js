import React from "react";
import ArticlesLink from "./ArticlesLink";
import TopicsLink from "./TopicsLink";
import UsersLink from "./UsersLink";
import NewPostLink from "./NewPostLink";

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
        <li className="list-item">
          <NewPostLink />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
