import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import ArticleAdder from "./ArticleAdder";

class ArticlesList extends Component {
  state = {
    articles: [],
    sortBy: null,
    orderBy: "asc"
  };

  render() {
    return (
      <main className="infobox">
        Sort by:
        <button onClick={() => this.setSortBy("created_at", "asc")}>
          Oldest
        </button>
        <button onClick={() => this.setSortBy("created_at", "desc")}>
          Most recent
        </button>
        <button onClick={() => this.setSortBy("comment_count", "desc")}>
          Most comments
        </button>
        <button onClick={() => this.setSortBy("comment_count", "asc")}>
          Fewest comments
        </button>
        <button onClick={() => this.setSortBy("votes", "desc")}>
          Most votes
        </button>
        <button onClick={() => this.setSortBy("votes", "asc")}>
          Fewest votes
        </button>
        <ArticleAdder
          articles={this.state.articles}
          addArticle={this.addArticle}
        />
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </main>
    );
  }

  addArticle = (username, slug, title, body) => {
    // this func needs to be in ArticleList.js because we're updating the state in ArticleList.js
    // we then pass this down to the ArticleAdder so that it can be invoked onSubmit
    api.postArticle(username, slug, title, body).then(article => {
      this.props.navigate(`/articles/${article.article_id}`);
    });
  };

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
    api.getArticles(topic, user, sortBy, orderBy).then(articles => {
      this.setState({
        articles,
        total: articles.length,
        sortBy,
        orderBy
      });
    });
  };
}

export default ArticlesList;
