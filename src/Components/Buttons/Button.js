import React, { Component } from "react";
import "./style.css";

export class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='button'>
        <div id="btn">
          {this.props.data.map((appData) => {
            return (
              <>
                <button className="btn" onClick={this.props.fetchJokes()}>{appData}</button>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Button;
