import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props);
    // console.log(this.props.title);
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.title}</h1>
      </div>
    );
  }
}
