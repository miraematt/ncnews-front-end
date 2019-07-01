import React from "react";
import { Link } from "@reach/router";
import ReactTimeAgo from "react-time-ago";
import toTimestamp from "../utils/index";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <li className="articleshort" key={article.article_id}>
        <span className="title">{article.title}</span>
        <br />
        By {article.author}
        <br />{" "}
        <ReactTimeAgo
          date={toTimestamp(article.created_at)}
          timeStyle="twitter"
        />
      </li>
    </Link>
  );
};

export default ArticleCard;
