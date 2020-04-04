import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';
import { ACCESS_KEY } from '../../utils/token';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
});

const searchPhotos = (query) => instance.get('/search/photos', { params: { query } });
// or axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
// or give client id as param

const searchPhotosByCollections = (query, collections) => instance.get('/search/photos', { params: { query, collections } });

export default { searchPhotos, searchPhotosByCollections };
