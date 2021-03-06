import React, { Component } from "react";
import Fixed from "./Components/Fixed";
import { Router } from "@reach/router";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import TopicsList from "./Components/TopicsList";
import UsersList from "./Components/UsersList";
import ArticleAdder from "./Components/ArticleAdder";
import Error from "./Components/Error";
import Footer from "./Components/Footer";

class App extends Component {
  state = {
    loggedInAs: "jessjelly"
  };

  render() {
    const { loggedInAs } = this.state;
    return (
      <div className="App grid">
        <Fixed loggedInAs={loggedInAs} />
        <main className="infobox">
          <Router>
            <ArticlesList path="/" loggedInAs={loggedInAs} />
            <ArticlesList path="/articles" loggedInAs={loggedInAs} />
            <SingleArticle
              path="/articles/:article_id"
              loggedInAs={loggedInAs}
            />
            <TopicsList path="/topics" />
            <ArticlesList path="/topics/:topic" loggedInAs={loggedInAs} />
            <UsersList path="/users" />
            <ArticlesList path="/users/:user" loggedInAs={loggedInAs} />
            <ArticleAdder path="/articles/post" loggedInAs={loggedInAs} />
            <Error default />
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
