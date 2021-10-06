import axios from 'axios';
import {main} from './Config';


const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // baseURL: state.config.UrlString,
});

export const $axios = api;
