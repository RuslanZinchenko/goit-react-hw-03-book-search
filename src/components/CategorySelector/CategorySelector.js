import React from 'react';
import styles from './CategorySelector.module.css';

/* eslint-disable-next-line */
const CategorySelector = ({ options, value, onChange }) => (
  <select className={styles.select} value={value} onChange={onChange}>
    {options.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);

export default CategorySelector;
