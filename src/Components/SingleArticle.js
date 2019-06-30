import React, { Component } from "react";
import toTimestamp from "../utils/index";
import ReactTimeAgo from "react-time-ago";
import * as api from "../api";
import CommentsList from "./CommentsList";
import Voter from "./Voter";
import { navigate } from "@reach/router";
import DeleteButton from "./DeleteButton";
import Error from "./Error";

class SingleArticle extends Component {
  state = {
    article: {},
    err: null
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
    const { article_id, loggedInAs } = this.props;
    const { err } = this.state;
    if (err) return <Error err={err} />;
    return (
      <div>
        <p>Author:{author}</p>
        <p>Topic:{topic}</p>
        <p>Title:{title}</p>
        <p>Article:{body}</p>
        <Voter votes={votes} type="article" id={article_id} />
        {loggedInAs === author && (
          <DeleteButton remove={this.removeArticle} id={article_id} />
        )}
        <p>
          Time:{" "}
          <ReactTimeAgo date={toTimestamp(created_at)} timeStyle="twitter" />
        </p>
        <p>Comments:{comment_count}</p>
        <CommentsList article_id={article_id} loggedInAs={loggedInAs} />
      </div>
    );
  }

  componentDidMount = () => {
    api
      .getArticleById(this.props.article_id)
      .then(article => {
        article.comment_count = 0;
        this.setState({ article });
      })
      .catch(err => {
        this.setState({
          err
        });
      });
  };

  removeArticle = articleIdToRemove => {
    const remove = window.confirm(
      "Are you sure you want to delete this article?"
    );
    if (remove) {
      api
        .deleteArticleByArticleId(articleIdToRemove)
        .then(() => {
          navigate(`/articles`);
        })
        .catch(err => {
          this.setState({
            err
          });
        });
    }
  };
}

export default SingleArticle;
