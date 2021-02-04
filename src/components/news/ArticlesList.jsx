import React from 'react';
import PropTypes from 'prop-types';

const Articles = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.id}>
      <h2>{article.title}</h2>
      <h4>{article.author}</h4>
      <p>{article.description}</p>
    </li>
  ));
  return (
    <>
      <h1>News Articles</h1>
      <ul>
        {articleElements}
      </ul>
    </>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default Articles;
