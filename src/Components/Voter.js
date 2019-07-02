import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <div className="likes">
        <button
          className="arrow"
          onClick={() => this.handleVote(1)}
          disabled={voteChange > 0}
        >
          {"\u2191"}
        </button>
        <p>{votes + voteChange}</p>
        <button
          className="arrow"
          onClick={() => this.handleVote(-1)}
          disabled={voteChange < 0}
        >
          {"\u2193"}
        </button>
      </div>
    );
  }

  handleVote = increment => {
    const { voteChange } = this.state;
    const { id, type } = this.props;
    api.patchVote(id, increment, type).then(() => {
      this.setState({
        voteChange: voteChange + increment
      });
    });
  };
}

export default Voter;
