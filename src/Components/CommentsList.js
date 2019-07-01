import React, { Component } from "react";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import * as api from "../api";

class CommentsList extends Component {
  state = {
    comments: []
  };
  render() {
    const { article_id, loggedInAs, articleExists } = this.props;
    return (
      articleExists && (
        <section className="commentsbox">
          <CommentAdder addComment={this.addComment} article_id={article_id} />
          <ul>
            {this.state.comments.map(comment => {
              return (
                <CommentCard
                  comment={comment}
                  key={comment.comment_id}
                  removeComment={this.removeComment}
                  loggedInAs={loggedInAs}
                />
              );
            })}
          </ul>
        </section>
      )
    );
  }

  componentDidMount = () => {
    const { article_id, articleExists } = this.props;
    articleExists && this.fetchComments(article_id);
  };

  fetchComments = article_id => {
    api.getCommentsByArticleId(article_id).then(comments => {
      this.setState({
        comments,
        total: comments.length
      });
    });
  };

  addComment = (newComment, article_id) => {
    api.postCommentByArticleId(newComment, article_id).then(comment => {
      this.setState(prevState => {
        return {
          comments: [comment, ...prevState.comments]
        };
      });
    });
  };

  removeComment = commentIdToRemove => {
    const remove = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (remove) {
      api.deleteCommentByCommentId(commentIdToRemove).then(() => {
        this.setState(prevState => {
          return {
            comments: prevState.comments.filter(
              comment => comment.comment_id !== commentIdToRemove
            )
          };
        });
      });
    }
  };
}
export default CommentsList;
