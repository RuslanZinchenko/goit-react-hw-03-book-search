import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from '../BookListItem/BookListItem';
import styles from './BookList.module.css';

const BookList = ({ items }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li className={styles.listItem} key={item.id}>
        <BookListItem {...item} />
      </li>
    ))}
  </ul>
);

BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BookList;
