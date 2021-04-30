import React, { useState } from "react";
import getImages from '../Requests/getImages';
import PropTypes from "prop-types";

import "../Styles/Search.css";

const Search = ({ setSearchResults }) => {
   
    const [value, setValue] = useState();
    const handleSubmit = async(event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  }
    return (   
    
        <div className="Search">
        <form className="search-form" onSubmit={handleSubmit}>
        <input className="Search-field" 
        type="text"
        onChange={(e) => setValue(e.target.value)}>
        </input>
        <button className="search-comp" type="submit">
            Search!
        </button>
        </form>
        </div>
    );
};
Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired,
  };
export default Search;
