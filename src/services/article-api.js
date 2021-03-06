import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

/* eslint-disable-next-line */
export const fetchArticles = (query = '', category = '') =>
  axios.get(`${BASE_URL}+${query}+subject:${category}`);
