import React from "react";

const Login = ({ loggedInAs }) => {
  return (
    <div className="login">
      <p>Logged in as: {loggedInAs}</p>
    </div>
  );
};

export default Login;
