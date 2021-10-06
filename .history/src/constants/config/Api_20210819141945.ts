import axios from 'axios';
import {main} from './Config';
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // baseURL: main.BASE_URL,
});
export const $axios = api;
