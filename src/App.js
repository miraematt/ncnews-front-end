import React, { Component } from "react";
import Fixed from "./Components/Fixed";
import { Router } from "@reach/router";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import TopicsList from "./Components/TopicsList";
import UsersList from "./Components/UsersList";

class App extends Component {
  state = {
    loggedInAs: "jessjelly"
    // loggedInUser : {username:jess,avatar: ..., name:...}
  };

  render() {
    // after the header which stays the same throughout, the page changes depending on the route
    return (
      <div className="App">
        <Fixed loggedInAs={this.state.loggedInAs} />
        <Router>
          <ArticlesList path="/articles" />
          <SingleArticle path="/articles/:article_id" />
          <TopicsList path="/topics" />
          <ArticlesList path="/topics/:topic" />
          <UsersList path="/users" />
          <ArticlesList path="/users/:user" />
        </Router>
      </div>
    );
  }
}

export default App;
