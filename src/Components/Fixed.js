import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Login from "./Login";
import Search from "./Search";
import NewPost from "./Newpost";

const Fixed = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Login />
      <Search />
      <NewPost />
    </>
  );
};

export default Fixed;
