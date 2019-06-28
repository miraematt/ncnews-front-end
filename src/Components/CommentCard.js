import React from "react";
import ReactTimeAgo from "react-time-ago";
import toTimestamp from "../utils/index";
import Voter from "./Voter";

const CommentCard = ({ comment, removeComment }) => {
  const { votes } = comment;
  return (
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
  );
};

export default CommentCard;
