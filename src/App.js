import React from 'react';

import MasonryGrid from './components/MasonryGrid';
import SearchBar from './components/SearchBar';

const App = () => (
  <div className="App">
    <header className="App-header">
      <SearchBar />
      <MasonryGrid />
    </header>
  </div>
);

export default App;
