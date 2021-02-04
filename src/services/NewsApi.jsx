const fetch = require('node-fetch');
/* eslint-disable max-len */

export const getNews = (userSearch) => {
  return fetch(`http://newsapi.org/v2/everything?q=${userSearch}&from=2021-01-03&sortBy=publishedAt&apiKey=746cb74c86214b79a25ad10ae62f56c2`)
    .then(res => res.json())
    .then(res => res.articles);
};
