import React from 'react';
import HighlightsIndex from './highlights_index';
import SearchBar from './search_bar';
import TagsIndex from './tags_index';

export default (props) => {
  return (
    <div className="wrapper">
      <TagsIndex />
      <SearchBar />
      <HighlightsIndex />
    </div>
  );
}
