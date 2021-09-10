import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchBarSubmit(term) {
    console.log(term);
  }

  render () {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchBarSubmit}/>
      </div>
    );
  }
}

export default App;