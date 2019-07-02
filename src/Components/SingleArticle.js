import React, { Component } from "react";
import toTimestamp from "../utils/index";
import ReactTimeAgo from "react-time-ago";
import * as api from "../api";
import CommentsList from "./CommentsList";
import Voter from "./Voter";
import { navigate } from "@reach/router";
import DeleteButton from "./DeleteButton";
import Error from "./Error";
import Swal from "sweetalert2";

class SingleArticle extends Component {
  state = {
    article: {},
    err: null,
    articleExists: false
  };

  render() {
    const {
      author,
      topic,
      body,
      votes,
      created_at,
      title
    } = this.state.article;
    const { article_id, loggedInAs } = this.props;
    const { err, articleExists } = this.state;
    if (err) return <Error err={err} />;
    return (
      articleExists && (
        <div class="article">
          <h2>{title}</h2>
          <p className="topic">({topic})</p>
          <h3>By {author}</h3>
          <p className="articlebody">{body}</p>
          <Voter votes={votes} type="article" id={article_id} />
          <p>
            <ReactTimeAgo date={toTimestamp(created_at)} timeStyle="twitter" />
          </p>
          {loggedInAs === author && (
            <DeleteButton remove={this.removeArticle} id={article_id} />
          )}

          {this.state.article && (
            <CommentsList
              article_id={article_id}
              loggedInAs={loggedInAs}
              articleExists={articleExists}
            />
          )}
        </div>
      )
    );
  }

  componentDidMount = () => {
    api
      .getArticleById(this.props.article_id)
      .then(article => {
        article.comment_count = 0;
        this.setState({ article, articleExists: true });
      })
      .catch(err => {
        this.setState({
          err,
          articleExists: false
        });
      });
  };

  removeArticle = articleIdToRemove => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
    });
  };
}

export default SingleArticle;
