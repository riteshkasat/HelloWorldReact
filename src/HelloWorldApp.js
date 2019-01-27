import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>  
    );
  }
}

export default HelloWorld;
