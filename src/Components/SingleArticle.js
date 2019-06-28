import React, { Component } from "react";
import toTimestamp from "../utils/index";
import ReactTimeAgo from "react-time-ago";
import * as api from "../api";
import CommentsList from "./CommentsList";
import Voter from "./Voter";
import { navigate } from "@reach/router";

class SingleArticle extends Component {
  state = {
    article: {}
  };

  render() {
    const {
      author,
      topic,
      body,
      votes,
      created_at,
      comment_count,

      title
    } = this.state.article;
    return (
      <div>
        <p>Author:{author}</p>
        <p>Topic:{topic}</p>
        <p>Title:{title}</p>
        <p>Article:{body}</p>
        <Voter votes={votes} type="article" id={this.props.article_id} />
        <button onClick={() => this.removeArticle(this.props.article_id)}>
          Delete
        </button>
        <p>
          Time:{" "}
          <ReactTimeAgo date={toTimestamp(created_at)} timeStyle="twitter" />
        </p>
        <p>Comments:{comment_count}</p>
        <CommentsList article_id={this.props.article_id} />
      </div>
    );
  }

  componentDidMount = () => {
    // this mounts the individual article data when the path includes the id
    api.getArticleById(this.props.article_id).then(article => {
      // id sent down on props as parametric endpoint on path
      article.comment_count = 0;
      this.setState({ article });
    });
  };

  removeArticle = articleIdToRemove => {
    api.deleteArticleByArticleId(articleIdToRemove).then(() => {
      navigate(`/articles`);
    });
  };
}

export default SingleArticle;
