import React, { Component } from "react";
import UserCard from "./UserCard";
import * as api from "../api";

class UsersList extends Component {
  state = {
    users: []
  };

  render() {
    return (
      <>
        <div>
          <h2 className="topictitle">Users</h2>
        </div>
        <ul className="infocard">
          {this.state.users.map((user, index) => {
            return <UserCard user={user} key={index} />;
          })}
        </ul>
      </>
    );
  }

  componentDidMount = () => {
    // calls the fetch function then sets state using the data received
    api.getUsers().then(users => {
      this.setState({
        users,
        total: users.length
      });
    });
  };
}

export default UsersList;
