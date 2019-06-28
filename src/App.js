import React, { Component } from "react";
import Fixed from "./Components/Fixed";
import { Router } from "@reach/router";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import TopicsList from "./Components/TopicsList";
import UsersList from "./Components/UsersList";
import ArticleAdder from "./Components/ArticleAdder";

class App extends Component {
  state = {
    loggedInAs: "jessjelly"
    // loggedInUser : {username:jess,avatar: ..., name:...}
  };

  render() {
    const { loggedInAs } = this.state;
    // after the header which stays the same throughout, the page changes depending on the route
    return (
      <div className="App">
        <Fixed loggedInAs={loggedInAs} />
        <Router>
          <ArticlesList path="/articles" loggedInAs={loggedInAs} />
          <SingleArticle path="/articles/:article_id" />
          <TopicsList path="/topics" />
          <ArticlesList path="/topics/:topic" loggedInAs={loggedInAs} />
          <UsersList path="/users" />
          <ArticlesList path="/users/:user" loggedInAs={loggedInAs} />
          <ArticleAdder path="/articles/post" loggedInAs={loggedInAs} />
        </Router>
      </div>
    );
  }
}

export default App;
