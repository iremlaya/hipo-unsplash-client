import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}` },
});

const searchPhotos = (query, page) => instance.get('/search/photos', { params: { query, page, per_page: 9 } });
// or axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
// or give client id as param

const searchPhotosByCollections = (query, collections, page) => instance.get('/search/photos', {
  params: {
    query, collections, page, per_page: 9,
  },
});

export default { searchPhotos, searchPhotosByCollections };
