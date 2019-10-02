import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
class Heading extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Todo React App</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Heading;
