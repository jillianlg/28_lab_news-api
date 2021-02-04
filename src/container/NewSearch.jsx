import React, { Component } from 'react';
import Articles from '../components/news/ArticlesList';
import Search from '../components/news/SearchControls';
import { getNews } from '../services/NewsApi';


export default class NewSearch extends Component {
  state = {
    articles: [],
    loading: true,
    search: 'tesla'
  }

  componentDidMount() {
    getNews()
      .then(articles => this.setState({ articles }));
  }

  handleChange = ({ target }) => {
    getNews(target.value || 'tesla')
      .then(res => this.setState({ articles:res }));
  }

  render() {
    const { articles } = this.state;
    return (
      <>
        <Search onChange={this.handleChange}/>
        <Articles articles={articles}/>
      </>
    );
  }
}
