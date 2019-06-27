import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Login from "./Login";
import Search from "./Search";
import NewPost from "./Newpost";

const Fixed = ({ loggedInAs }) => {
  // console.log(loggedInAs);
  return (
    <>
      <Header />
      <Navbar />
      <Login loggedInAs={loggedInAs} />
      <Search />
      <NewPost />
    </>
  );
};

export default Fixed;
