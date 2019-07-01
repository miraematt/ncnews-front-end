import React, { Component } from "react";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import * as api from "../api";
import Swal from "sweetalert2";

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
    });
  };
}
export default CommentsList;
