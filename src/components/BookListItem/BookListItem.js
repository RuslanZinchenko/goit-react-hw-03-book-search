import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookListItem.module.css';

const BookListItem = ({
  imageLinks,
  title,
  description,
  previewLink,
  authors,
  publisher,
  publishedDate,
  pageCount,
  rating,
}) => (
  <div>
    <a href={previewLink} target="_blank" rel="noopener noreferrer">
      <img
        src={imageLinks.thumbnail}
        alt="book"
        className={styles.avatar}
        width="100"
      />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.publishInfo}>
        <p className={styles.publisher}>Authors: {authors}</p>
        <p className={styles.publisher}>Publisher: {publisher}</p>
        <p className={styles.publisher}>Published date: {publishedDate}</p>
        <p className={styles.publisher}>Page count: {pageCount}</p>
        <p className={styles.publisher}>Rating - {rating}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </a>
  </div>
);
BookListItem.propTypes = {
  imageLinks: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  previewLink: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  pageCount: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default BookListItem;
