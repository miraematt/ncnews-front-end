import React, { Component } from "react";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import * as api from "../api";

class CommentsList extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <section className="commentsbox">
        <CommentAdder
          addComment={this.addComment}
          article_id={this.props.article_id}
        />
        <ul>
          {this.state.comments.map(comment => {
            return (
              <CommentCard
                comment={comment}
                key={comment.comment_id}
                removeComment={this.removeComment}
              />
            );
          })}
        </ul>
      </section>
    );
  }

  componentDidMount = () => {
    //   // calls the fetch function which sets state using the data received

    const { article_id } = this.props;

    this.fetchComments(article_id);
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
    // this func needs to be in Comment.js because we're updating the state in Comment.js
    // we then pass this down to the CommentAdder so that it can be invoked onSubmit
    api.postCommentByArticleId(newComment, article_id).then(comment => {
      this.setState(prevState => {
        return {
          comments: [...prevState.comments, comment]
        };
      });
    });
  };

  removeComment = commentIdToRemove => {
    // console.log(commentToRemove.name === this.state.treasures[0].name);
    // this func needs to be in App.js because we're updating the state in App.js
    // we then pass this down to the TreasureList so that it can be invoked on 'delete' button click
    api.deleteCommentByCommentId(commentIdToRemove).then(() => {
      this.setState(prevState => {
        return {
          comments: prevState.comments.filter(
            comment => comment.comment_id !== commentIdToRemove
          )
        };
      });
    });
  };
}
export default CommentsList;
