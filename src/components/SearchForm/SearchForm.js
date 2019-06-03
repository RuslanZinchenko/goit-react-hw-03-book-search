import React, { Component } from 'react';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    /* eslint-disable-next-line */
    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
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
          onChange={this.handleChange}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    );
  }
}
