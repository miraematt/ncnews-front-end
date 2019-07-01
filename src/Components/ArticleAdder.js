import React, { Component } from "react";
import * as api from "../api";

class ArticleAdder extends Component {
  state = {
    title: "",
    body: "",
    slug: "coding",
    username: this.props.loggedInAs
  };
  render() {
    const { body, title, slug } = this.state;
    return (
      <section className="articleAdder">
        <form onSubmit={this.handleSubmit}>
          <label className="articleitem">
            <p>Title: </p>
            <input
              className="articleinput"
              type="text"
              name="title"
              autocomplete="off"
              placeholder="Write here"
              value={title}
              onChange={this.handleChange}
            />
          </label>
          <label className="articleitem">
            <p>Topic: </p>
            <select
              id="myList"
              name="slug"
              value={slug}
              onChange={this.handleChange}
            >
              <option class="dropdown" value="coding">
                Coding
              </option>
              <option class="dropdown" value="cooking">
                Cooking
              </option>
              <option class="dropdown" value="football">
                Football
              </option>
            </select>
          </label>

          <label className="articleitem">
            <p>Article: </p>
            <input
              className="articleinput bodyinput"
              type="text"
              autocomplete="off"
              name="body"
              placeholder="Write here"
              value={body}
              onChange={this.handleChange}
            />
          </label>

          <button className="add">Submit article</button>
        </form>
      </section>
    );
  }

  addArticle = (username, slug, title, body) => {
    api.postArticle(username, slug, title, body).then(article => {
      this.props.navigate(`/articles/${article.article_id}`);
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { body, title, slug, username } = this.state;
    if (body && title && this.addArticle(username, slug, title, body)) {
      this.setState({
        body: "",
        title: "",
        slug: "coding",
        username: this.props.loggedInAs
      });
    }
  };
}

export default ArticleAdder;
