import React from 'react';
import PropTypes from "prop-types";

import '../Styles/searchResults.css';


const SearchResults = ({ results }) => {
  if (!results.length) {
    return (
      <p className="search-info">
        Search Nasa's API 🚀
      </p>
    );
  } else {
    return (
      <>
        {results.map((image) => (
          <div className="image-container">
            <img className="card-image" src={image} alt="spaceImage" />
          </div>
        ))}
      </>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
