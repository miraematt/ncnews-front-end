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
    api.getArticles().then(articles => {
      this.setState({
        articles,
        total: articles.length
      });
    });
  };
}

export default ArticlesList;
