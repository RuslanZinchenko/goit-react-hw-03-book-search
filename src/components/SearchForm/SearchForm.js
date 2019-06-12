import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
  };

  state = {
    query: '',
    error: null,
  };

  handleQueryChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query, error } = this.state;
    const { onSubmit, onClear } = this.props;
    onSubmit(query);
    onClear(error);
  };

  render() {
    const { query } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={query}
          placeholder="Enter a name of book..."
          onChange={this.handleQueryChange}
        />
        <button className={styles.buttonSearch} type="submit" />
      </form>
    );
  }
}
