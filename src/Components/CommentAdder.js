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
            value={body} // necessary so that the input box *always* reflects what is in state because state changes with each character inputted
            onChange={this.handleChange}
          />
        </label>

        <button className="add">Add Comment</button>
      </form>
    );
  }

  handleChange = event => {
    // handle event functions go in the class where they need to alter that classes state
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
    this.setState({ newComment: { body: "", username: "jessjelly" } }); // resets boxes to empty after submission
  };
}

export default CommentAdder;
