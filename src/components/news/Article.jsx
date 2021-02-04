/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

const SingleArticle = ({ title, author, description }) => (
  <div style={{ font: 'inherit', border: '1px solid black', padding: '8px' }}>
    <h2>{title}</h2>
    <h4>{author}</h4>  
    <p style={{ fontSize: '10px' }}>{description}</p>
  </div>
);

SingleArticle.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired
};

export default SingleArticle;
