import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";
import List from "semantic-ui-react/dist/commonjs/elements/List/List";

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      this.setState({
        values: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2" icon="users" content="Uptime Guarantee" />
        <List>
        {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
