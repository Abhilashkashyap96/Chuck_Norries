import React, { Component } from "react";
import "./style.css";

export class Button extends Component {
  render() {
    return (
      <div id='button'>
        <div id="btn">
          {this.props.data.map((appData, index) => {
            return (
              <button key={index} className="btn" onClick={ () => this.props.fetchJokes(appData)}>{appData}</button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Button;
