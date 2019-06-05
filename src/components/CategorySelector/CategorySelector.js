import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategorySelector.module.css';

const CategorySelector = ({ options, value, onChange }) => (
  /* eslint-disable-next-line */
  <select className={styles.select} value={value} onChange={onChange}>
    {options.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);

CategorySelector.propTypes = {
  options: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default CategorySelector;
