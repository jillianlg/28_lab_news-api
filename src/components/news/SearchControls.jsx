import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onChange }) => {
  return (
    <input type="text" placeholder="search" onChange={ onChange }/>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Search;
