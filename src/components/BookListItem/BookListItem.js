import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookListItem.module.css';

const BookListItem = ({ imageLinks, title, description, previewLink }) => (
  <div>
    <a href={previewLink} target="_blank" rel="noopener noreferrer">
      <img
        src={imageLinks.thumbnail}
        alt="book"
        className={styles.avatar}
        width="100"
      />
    </a>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
BookListItem.propTypes = {
  imageLinks: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  previewLink: PropTypes.string.isRequired,
};

export default BookListItem;
