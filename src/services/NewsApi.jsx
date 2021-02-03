/* eslint-disable max-len */
export const getQueens = () => {
  return fetch(`
    http://newsapi.org/v2/everything?q=tesla&from=2021-01-03&sortBy=publishedAt&apiKey=
    ${process.env.APIKEY}`)
    .then(res => res.json());
};
