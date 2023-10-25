// import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '40251499-e33a4520fef95d2a86c463901';

export const fetchPhoto = searchPhoto => {
  return fetch(
    `${BASE_URL}/?q=${searchPhoto}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
  );
};
