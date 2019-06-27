import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

class ArticlesList extends Component {
  state = {
    articles: [],
    sortBy: null
  };

  render() {
    return (
      <main className="infobox">
        <button onClick={this.setSortBy}>Sort by votes</button>
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </main>
    );
  }

  setSortBy = sortBy => {
    this.setState({ sortBy: "comment_count" });
  };

  componentDidMount = () => {
    // calls the fetch function which sets state using the data received

    const { topic, user } = this.props;
    const { sortBy } = this.state;
    this.fetchArticles(topic, user, sortBy);
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { topic, user } = this.props;
    const { sortBy } = this.state;
    const topicChange = prevProps.topic !== this.props.topic;
    const sortByChange = prevState.sortBy !== this.state.sortBy;
    if (topicChange || sortByChange) {
      this.fetchArticles(topic, user, sortBy);
    }
    // const { topic, user } = this.props;
    // const { sortBy } = this.state;
    // console.log(prevProps, "prevProps");
    // console.log(this.props, "this.props");
    // if (prevProps !== this.props) {
    // console.log("One down...");
    // if (prevState.sortBy !== this.state.sortBy) {
    // console.log("And one to go...");
    // this.fetchArticles(topic, user, sortBy);
  };

  fetchArticles = (topic, user, sortBy) => {
    api.getArticles(topic, user, sortBy).then(articles => {
      this.setState({
        articles,
        total: articles.length,
        sortBy
      });
    });
  };
}

export default ArticlesList;
