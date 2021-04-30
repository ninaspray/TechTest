import React, { useState }from 'react';
import "../Styles/App.css";
import Search from './Search';
import SearchResults from './searchResults';


function App() {

const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img
        className="logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA logo"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults}/>
    </div>
  );
}

export default App;
