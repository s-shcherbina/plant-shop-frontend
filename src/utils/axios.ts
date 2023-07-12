import axios from 'axios';
import { useAppSelector } from './hooks';

export const API_URL = 'http://localhost:3001';

export const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  timeout: 1000,
});

export const instanceAuth = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//   return config;
// });
