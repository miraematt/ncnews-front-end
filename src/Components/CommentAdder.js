import React, { Component } from "react";

class CommentAdder extends Component {
  state = {
    newComment: {
      body: "",
      username: "jessjelly"
    }
  };
  render() {
    const { body } = this.state.newComment;
    return (
      <form className="commentform" onSubmit={this.handleSubmit}>
        <label>
          Leave a comment:
          <input
            className="commentinput"
            autoComplete="off"
            type="text"
            name="body"
            placeholder="Write here"
            required
            value={body}
            onChange={this.handleChange}
          />
        </label>

        <button className="add">Add Comment</button>
      </form>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      newComment: { [name]: value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state.newComment;
    const { article_id } = this.props;
    this.props.addComment(
      {
        newComment: { body: body, username: "jessjelly" }
      },
      article_id
    );
    this.setState({ newComment: { body: "", username: "jessjelly" } });
  };
}

export default CommentAdder;
