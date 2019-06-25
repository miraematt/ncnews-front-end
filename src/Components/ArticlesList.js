import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

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
    // return (
    // <main className="infobox">
    //   <StudentNumbers
    //     handleTotalClick={this.handleTotalClick}
    //     handleGraduatedClick={this.handleGraduatedClick}
    //     handleCurrentClick={this.handleCurrentClick}
    //     total={this.state.total}
    //     current={this.state.current}
    //     graduated={this.state.graduated}
    //   />
    // <ul>
    //   {this.filterStudentsStyle(this.state.students).map(student => {
    //     return <StudentCard student={student} />;
    //   })}
    // </ul>
    // </main>
    // )
  }

  componentDidMount = () => {
    // calls the fetch function then sets state using the data received
    this.getArticles().then(articles => {
      this.setState({
        articles,
        total: articles.length
      });
    });
  };

  getArticles = () => {
    return axios // makes a fetch request to the api - this can be done with any address depending on the information we wish to be returned
      .get("https://mattsncnewsproject.herokuapp.com/api/articles")
      .then(({ data }) => {
        return data.articles;
      });
  };
}

export default ArticlesList;
