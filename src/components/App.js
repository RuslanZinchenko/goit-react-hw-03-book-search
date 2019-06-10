import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import BookList from './BookList/BookList ';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import SearchForm from './SearchForm/SearchForm';
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

//   componentDidMount() {
//     this.fetchArticles();
//   }

  fetchArticles = (query, category) => {
    this.setState({ isLoading: true });

    ArticleAPI.fetchArticles(query, category)
      .then(({ data }) => this.setState({ articles: mapper(data.items) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div className={styles.container}>
        <SearchForm onSubmit={this.fetchArticles} />
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
