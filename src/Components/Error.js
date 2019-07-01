import React from "react";
import { Link } from "@reach/router";

const Error = ({ err }) => {
  return (
    <div>
      <p>Sorry!</p>
      {err ? <p>{err.response.data.msg}</p> : <p>Page Not Found</p>}
      <Link to="/articles">
        <button className="navbutton">Return to main page</button>
      </Link>
    </div>
  );
};

export default Error;
