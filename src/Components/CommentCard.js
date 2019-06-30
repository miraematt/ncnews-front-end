import React from "react";
import ReactTimeAgo from "react-time-ago";
import toTimestamp from "../utils/index";
import Voter from "./Voter";
import DeleteButton from "./DeleteButton";

const CommentCard = ({ comment, removeComment, loggedInAs }) => {
  const { votes, comment_id, author, created_at, body } = comment;
  return (
    <li key={comment_id}>
      <span className="Author">{author}</span>
      <br />
      Body: {body}
      <br />
      <Voter votes={votes} type="comment" id={comment_id} />
      <br />
      Time: <ReactTimeAgo date={toTimestamp(created_at)} timeStyle="twitter" />
      {loggedInAs === author && (
        <DeleteButton remove={removeComment} id={comment_id} />
      )}
    </li>
  );
};

export default CommentCard;
