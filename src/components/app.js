import React, { Component } from 'react';
import HighlightsIndex from './highlights_index';
import SearchBar from './searchbar';

export default class App extends Component {
  

  render() {
    return (
      <div>
        <h3>Highlights</h3>
        <SearchBar />
        <HighlightsIndex />
      </div>
    );
  }
}
