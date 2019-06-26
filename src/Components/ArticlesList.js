import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

class ArticlesList extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <main className="infobox">
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount = () => {
    // calls the fetch function then sets state using the data received
    const { topic, user } = this.props;
    this.fetchArticles(topic, user);
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { topic, user } = this.props;
    if (prevProps.topic !== topic || prevProps.user !== user) {
      this.fetchArticles(topic, user);
    }
  };

  fetchArticles = (topic, user) => {
    api.getArticles(topic, user).then(articles => {
      this.setState({
        articles,
        total: articles.length
      });
    });
  };
}

export default ArticlesList;
