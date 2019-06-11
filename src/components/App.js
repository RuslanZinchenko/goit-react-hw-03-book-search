import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import BookList from './BookList/BookList ';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import SearchForm from './SearchForm/SearchForm';
import CategorySelector from './CategorySelector/CategorySelector';
import genres from '../genres.json';
import * as ArticleAPI from '../services/article-api';
import styles from '../styles.css';

const spinnerStyles = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

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
  };

  componentDidUpdate(prevProps, prevState) {
    const { category: prevCategory } = prevState;
    const { category: nextCategory } = this.state;

    if (prevCategory !== nextCategory) {
      this.fetchArticles(nextCategory);
    }
  }

  fetchArticles = (query, category) => {
    this.setState({ isLoading: true });

    ArticleAPI.fetchArticles(query, category)
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
          options={genres}
          value={category}
          onChange={this.handleCategoryChange}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && (
          <Spinner
            name="line-spin-fade-loader"
            color="steelblue"
            fadeIn="none"
            style={spinnerStyles}
          />
        )}
        {articles.length > 0 && <BookList items={articles} />}
      </div>
    );
  }
}