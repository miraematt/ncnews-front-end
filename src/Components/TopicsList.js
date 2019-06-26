import React, { Component } from "react";
import TopicCard from "./TopicCard";
import * as api from "../api";

class TopicsList extends Component {
  state = {
    topics: []
  };

  render() {
    return (
      <main className="infobox">
        <ul>
          {this.state.topics.map((topic, index) => {
            return <TopicCard topic={topic} key={index} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount = () => {
    // calls the fetch function then sets state using the data received
    api.getTopics().then(topics => {
      this.setState({
        topics,
        total: topics.length
      });
    });
  };
}

export default TopicsList;
