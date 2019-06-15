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

BookListItem.defaultProps = {
  imageLinks: 'image',
  title: 'title',
  description: 'description',
  previewLink: 'previewLink',
  authors: 'authors',
  publisher: 'publisher',
  publishedDate: 'published date',
  pageCount: 'page count',
  rating: 'rating',
};

BookListItem.propTypes = {
  imageLinks: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ thumbnail: PropTypes.string }),
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
  previewLink: PropTypes.string,
  authors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  publisher: PropTypes.string,
  publishedDate: PropTypes.string,
  pageCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.string,
};

export default BookListItem;
