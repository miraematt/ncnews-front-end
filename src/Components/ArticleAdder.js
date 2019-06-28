import React, { Component } from "react";
class ArticleAdder extends Component {
  state = {
    title: "",
    body: "",
    slug: "",
    username: "jessjelly"
  };
  render() {
    const { body, title, slug } = this.state;
    return (
      <section className="articleAdder">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="Write here"
              value={title} // necessary so that the input box *always* reflects what is in state because state changes with each character inputted
              onChange={this.handleChange}
            />
          </label>
          <label>
            Topic:
            <input
              type="text"
              name="slug"
              placeholder="Write here"
              value={slug} // necessary so that the input box *always* reflects what is in state because state changes with each character inputted
              onChange={this.handleChange}
            />
          </label>
          <label>
            Body:
            <input
              type="text"
              name="body"
              placeholder="Write here"
              value={body} // necessary so that the input box *always* reflects what is in state because state changes with each character inputted
              onChange={this.handleChange}
            />
          </label>

          <button>Submit article</button>
        </form>
      </section>
    );
  }
  handleChange = event => {
    // handle event functions go in the class where they need to alter that classes state
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body, title, slug, username } = this.state;
    const { addArticle } = this.props;
    addArticle(username, slug, title, body);
    this.setState({
      body: "",
      title: "",
      slug: "",
      username: "jessjelly"
    });
  };
}

export default ArticleAdder;