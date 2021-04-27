import React, { Component } from "react";
import Button from "./Components/Buttons/Button";
import TextArea from "./Components/Textarea/TextArea";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      jokes:{
        categories: [],
        value: ""
      }
    };
  }
  componentDidMount() {
    this.fetchCategories();
  }
  fetchCategories = () => {
    fetch(`https://api.chucknorris.io/jokes/categories`, {
      method: "GET",
    }).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          this.setState({
            data: result,
          });
        });
      }
    });
  };

  fetchJokes = (category) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`, {
      method: "GET",
    }).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          this.setState({
            jokes: {
              categories: result.categories || [],
              value: result.value || ""
            },
          });
        });
      }
    });
  }
  render() {
    return (
      <div id="main">
        <Button data={this.state.data} fetchJokes={this.fetchJokes} />
        <TextArea jokes={this.state.jokes} data={this.state.data} fetchJokes={this.fetchJokes}/>
      </div>
    );
  }
}

export default App;
