import React from 'react';
import PropTypes from 'prop-types';

const SingleArticle = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.id}>
      <h2>Title:{article.title}</h2>
      <h3>Author:{article.author}</h3>
      <p>Description:{article.description}</p>
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

SingleArticle.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default SingleArticle;
