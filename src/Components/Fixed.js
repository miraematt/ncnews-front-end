import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Login from "./Login";
import Tagline from "./Tagline";

const Fixed = ({ loggedInAs }) => {
  return (
    <>
      <Header />
      <Navbar loggedInAs={loggedInAs} />
      <Tagline />
      <Login loggedInAs={loggedInAs} />
    </>
  );
};

export default Fixed;
