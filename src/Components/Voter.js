import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = {
    article: this.props,
    voteChange: 0
  };

  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <div>
        <button onClick={() => this.handleVote(1)} disabled={voteChange > 0}>
          Vote up
        </button>
        <p>Likes:{votes + voteChange}</p>
        <button onClick={() => this.handleVote(-1)} disabled={voteChange < 0}>
          Vote down
        </button>
      </div>
    );
  }

  handleVote = increment => {
    const { voteChange } = this.state;
    const { article_id } = this.props;
    api.patchArticleVote(article_id, increment).then(article => {
      this.setState({
        voteChange: voteChange + increment
      });
    });
  };
}

export default Voter;
