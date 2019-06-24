import React, { Component } from "react";
import Fixed from "./Components/Fixed";
import { Router } from "@reach/router";
import ArticlesList from "./Components/ArticlesList";

// import StudentList from "./Components/StudentList";
// import StudentInfo from "./Components/StudentInfo";

class App extends Component {
  state = {};

  render() {
    // after the header which stays the same throughout, the page changes depending on the route
    return (
      <div className="App">
        <Fixed />
        <Router>
          <ArticlesList path="/articles" />
          {/* <SingleArticle path="/articles/:article_id" />
          <TopicsList path="/topics" />
          <SingleTopic path="/topics/:topic_id" />
          <UsersList path="/users" />
          <SingleUser path="/users/:user_id" /> */}
        </Router>
      </div>
    );
  }
}

export default App;
