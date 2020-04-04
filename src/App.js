import React from 'react';

import service from './services/api/unsplash';

class App extends React.Component {
  componentDidMount() {
    service.searchPhotosByCollections('office', '206').then((res) => console.log(res.data));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p />
        </header>
      </div>
    );
  }
}

export default App;
