import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ topic, index }) => {
  return (
    <Link to={`/topics/${topic.slug}`}>
      <li key={index}>
        <span className="topic">Topic: {topic.slug}</span>
        <br />
        Description: {topic.description}
        <br />
      </li>
    </Link>
  );
};

export default TopicCard;
