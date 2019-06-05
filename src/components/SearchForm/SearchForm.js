import React, { Component } from 'react';
import CategorySelector from '../CategorySelector/CategorySelector';
import genres from '../../genres.json';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    query: '',
    category: '',
  };

  handleQueryChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    /* eslint-disable-next-line */
    const { query, category } = this.state;
    this.props.onSubmit(query, category);
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
        {/* <select value={category} onChange={this.handleCategory}>
          {genres.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select> */}
        <CategorySelector
          options={genres}
          value={category}
          onChange={this.handleCategoryChange}
        />
        <button className={styles.buttonSearch} type="submit">
          Search
        </button>
      </form>
    );
  }
}
