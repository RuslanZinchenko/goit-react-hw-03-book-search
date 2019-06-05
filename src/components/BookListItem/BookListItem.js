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
      <p className={styles.publisher}>
        Authors:{' '}
        {authors.map(i => (
          <p>{i}</p>
        ))}
      </p>
      <p className={styles.publisher}>Publisher: "{publisher}"</p>
      <p className={styles.publisher}>Published date: {publishedDate}</p>
      <p className={styles.description}>{description}</p>
    </a>
  </div>
);
BookListItem.propTypes = {
  imageLinks: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  previewLink: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  publisherDate: PropTypes.string.isRequired,
};

export default BookListItem;
