import React from "react";
// import { Link } from "@reach/router";
import ReactTimeAgo from "react-time-ago";
import toTimestamp from "../utils/index";
import Voter from "./Voter";

const CommentCard = ({ comment, removeComment }) => {
  const { votes } = comment;
  return (
    // <Link to={`/articles/${article.article_id}/`}>
    <li key={comment.comment_id}>
      <span className="Author">{comment.author}</span>
      <br />
      Body: {comment.body}
      <br />
      <Voter votes={votes} type="comment" id={comment.comment_id} />
      <br />
      Time:{" "}
      <ReactTimeAgo
        date={toTimestamp(comment.created_at)}
        timeStyle="twitter"
      />
      <button onClick={() => removeComment(comment.comment_id)}>Delete</button>
    </li>

    // </Link>
  );
};

export default CommentCard;
