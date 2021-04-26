import React, { Component } from "react";
import Button from "./Components/Buttons/Button";
import TextArea from "./Components/Textarea/TextArea";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      jokes:[]
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
          console.log(result)
          this.setState({
            jokes: result,
          });
        });
      }
    });
  }
  render() {
    return (
      <>
        <Button data={this.state.data} fetchJokes={this.fetchJokes} />
        <TextArea data={this.state.data}/>
      </>
    );
  }
}

export default App;
