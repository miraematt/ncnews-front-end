import React from "react";
// import { Link } from "@reach/router";
import ReactTimeAgo from "react-time-ago";
import toTimestamp from "../utils/index";

const CommentCard = ({ comment, removeComment }) => {
  return (
    // <Link to={`/articles/${article.article_id}/`}>
    <li key={comment.comment_id}>
      <span className="Author">{comment.author}</span>
      <br />
      Body: {comment.body}
      <br />
      Likes: {comment.votes}
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
