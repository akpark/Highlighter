import React, { Component } from 'react';
import Wrapper from './wrapper';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Highlights</h1>
        </div>
        <Wrapper />
      </div>
    );
  }
}
