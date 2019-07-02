import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import Error from "./Error";

class ArticlesList extends Component {
  state = {
    articles: [],
    sortBy: null,
    orderBy: "asc",
    err: null
  };

  render() {
    const { articles, err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    return (
      <>
        <div className="listheader">
          <h2>All Articles</h2>
          <div className="sortcat">
            <p>Date </p>
            <div className="updown">
              <button
                className="arrow"
                onClick={() => this.setSortBy("created_at", "desc")}
              >
                {"\u25B2"}
              </button>
              <button
                className="arrow"
                onClick={() => this.setSortBy("created_at", "asc")}
              >
                {"\u25BC"}
              </button>
            </div>
            {/* </div>
          <div className="sortcat"> */}
            <p>Comments </p>
            <div className="updown">
              <button
                className="arrow"
                onClick={() => this.setSortBy("comment_count", "desc")}
              >
                {"\u25B2"}
              </button>
              <button
                className="arrow"
                onClick={() => this.setSortBy("comment_count", "asc")}
              >
                {"\u25BC"}
              </button>
            </div>
            {/* </div>
          <div className="sortcat"> */}
            <p>Likes </p>
            <div className="updown">
              <button
                className="arrow"
                onClick={() => this.setSortBy("votes", "desc")}
              >
                {"\u25B2"}
              </button>
              <button
                className="arrow"
                onClick={() => this.setSortBy("votes", "asc")}
              >
                {"\u25BC"}
              </button>
            </div>
          </div>
        </div>
        <ul className="infocard">
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </>
    );
  }

  setSortBy = (sortBy, orderBy) => {
    this.setState({ sortBy, orderBy });
  };

  componentDidMount = () => {
    this.fetchArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    const topicChange = prevProps.topic !== this.props.topic;
    const userChange = prevProps.user !== this.props.user;
    const sortByChange = prevState.sortBy !== this.state.sortBy;
    const orderByChange = prevState.orderBy !== this.state.orderBy;
    if (topicChange || userChange || sortByChange || orderByChange) {
      this.fetchArticles();
    }
  };

  fetchArticles = () => {
    const { topic, user } = this.props;
    const { sortBy, orderBy } = this.state;
    api
      .getArticles(topic, user, sortBy, orderBy)
      .then(articles => {
        this.setState({
          articles,
          total: articles.length,
          sortBy,
          orderBy
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default ArticlesList;
