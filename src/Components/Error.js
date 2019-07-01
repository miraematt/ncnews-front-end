import React from "react";
import { Link } from "@reach/router";

const Error = ({ err }) => {
  return (
    <div>
      <p className="sorry">Sorry!</p>
      {err ? (
        <p className="errorinfo">{err.response.data.msg}</p>
      ) : (
        <p className="errorinfo">Page Not Found</p>
      )}
      <Link to="/articles">
        <button className="add">Return to main page</button>
      </Link>
    </div>
  );
};

export default Error;
