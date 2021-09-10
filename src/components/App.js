import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };
  onSearchBarSubmit = async (term) => {
    const response = await unsplash.get('/search/photos/', {
      params: {query: term},
    });

    this.setState({images: response.data.results});
  }

  render () {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchBarSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;