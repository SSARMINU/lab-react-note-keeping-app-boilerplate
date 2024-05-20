import React, { Component } from 'react';
import './Editor.css'; 

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  handleChange = (event) => {
    this.setState({ content: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea 
            className="input-text"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Type something..."
          />
        </div>
        <div className="output">
          <h3>Pro Note</h3>
          <div className="output-text">{this.state.content}</div>
        </div>
      </div>
    );
  }
}

export default Editor;
