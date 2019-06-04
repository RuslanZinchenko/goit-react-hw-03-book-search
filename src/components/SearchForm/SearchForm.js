import React, { Component } from 'react';
// import CategorySelector from './CategorySelector';
import genres from '../../genres.json';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = { query: '', genders: '' };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleCategory = e => {
    this.setState({ genders: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    /* eslint-disable-next-line */
    this.props.onSubmit(this.state.query);
    // this.props.onChange(this.state.genders);
    console.log(this.state.genders);
    this.setState({ query: '', category: '' });
  };

  render() {
    const { query, genders } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={query}
          placeholder="Enter a name of book..."
          onChange={this.handleChange}
        />
        <select value={genders} onChange={this.handleCategory}>
          {genres.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button className={styles.buttonSearch} type="submit">
          Search
        </button>
      </form>
    );
  }
}
