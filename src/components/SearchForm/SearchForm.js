import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import genres from '../../genres.json';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
  };

  state = {
    query: '',
    category: '',
  };

  handleQueryChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleChangeSelect = category => this.setState({ category });

  handleSubmit = e => {
    e.preventDefault();
    const { query, category } = this.state;
    const { onSubmit, onClear } = this.props;
    const isCategory = category.value || '';
    onSubmit(query, isCategory);
    onClear();
  };

  render() {
    const { query, category } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={query}
          placeholder="Enter a name of book..."
          onChange={this.handleQueryChange}
        />
        <Select
          className={styles.select}
          value={category}
          onChange={this.handleChangeSelect}
          options={genres}
        />
        <button className={styles.buttonSearch} type="submit" />
      </form>
    );
  }
}
