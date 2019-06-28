import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Login from "./Login";

const Fixed = ({ loggedInAs }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Login loggedInAs={loggedInAs} />
    </>
  );
};

export default Fixed;
