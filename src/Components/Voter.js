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
    const { id, type } = this.props;
    api.patchVote(id, increment, type).then(() => {
      this.setState({
        voteChange: voteChange + increment
      });
    });
  };
}

export default Voter;
