import React, { Component } from "react";
import axios from "axios";
import toTimestamp from "../utils/index";
import ReactTimeAgo from "react-time-ago";

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
        <p>Likes:{votes}</p>
        <p>
          Time:{" "}
          <ReactTimeAgo date={toTimestamp(created_at)} timeStyle="twitter" />
        </p>
        <p>Comments:{comment_count}</p>
      </div>
    );
  }

  componentDidMount = () => {
    // this mounts the individual article data when the path includes the id
    this.getArticleById(this.props.article_id).then(article => {
      // id sent down on props as parametric endpoint on path

      this.setState({ article });
    });
  };

  getArticleById = article_id => {
    return axios
      .get(
        `https://mattsncnewsproject.herokuapp.com/api/articles/${article_id}`
      )
      .then(({ data }) => {
        return data.article;
      });
  };
}

export default SingleArticle;
