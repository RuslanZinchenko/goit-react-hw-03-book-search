import React, { Component } from 'react';
import BookList from './BookList/BookList ';
import Loader from './Loader/Loader';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import SearchForm from './SearchForm/SearchForm';
import CategorySelector from './CategorySelector';
import * as articleAPI from '../services/article-api';
import styles from '../styles.css';

const mapper = articles => {
  return articles.map(({ id, volumeInfo: info }) => ({
    id,
    ...info,
  }));
};

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    category: '',
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { category: prevCategory } = prevState;
    const { category: nextCategory } = this.state;

    if (prevCategory !== nextCategory) {
      this.fetchArticles(nextCategory);
    }
  }

  fetchArticles = query => {
    this.setState({ isLoading: true });

    articleAPI
      .fetchArticles(query)
      .then(({ data }) => this.setState({ articles: mapper(data.items) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { articles, isLoading, error, category } = this.state;

    return (
      <div className={styles.container}>
        <SearchForm onSubmit={this.fetchArticles} />
        <CategorySelector
          options={['html', 'css', 'javascript', 'react']}
          value={category}
          onChange={this.handleCategoryChange}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <BookList items={articles} />}
      </div>
    );
  }
}
