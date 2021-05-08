import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";

class Stats extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    API.getUsers()
      .then(res => {
        // console.log(res);
        this.setState({
          users: res.data
        })
      })
  }
  render() {
    return (
      <div className="container" >
        <span className="hide">{document.title = "PurrChase Statistics"}</span>
        <div className="jumbo">
          <h1 className="display-4">
            PurrChase Stats <i className="fas fa-chart-line"></i>
          </h1>
        </div>
        <Table users={this.state.users} />
      </div>
    );
  }
}

export default Stats;