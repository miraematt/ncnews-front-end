import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ topic, index }) => {
  return (
    <Link to={`/topics/${topic.slug}`}>
      <li key={index} className="infoshort">
        <span className="topic title">{topic.slug}</span>
        <br />
        Description: {topic.description}
        <br />
      </li>
    </Link>
  );
};

export default TopicCard;
