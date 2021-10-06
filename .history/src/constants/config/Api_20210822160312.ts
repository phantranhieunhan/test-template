import axios from 'axios';
import {main} from './Config';
import store from '../../redux/store'


const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // baseURL: state.config.UrlString,
});

export const $axios = api;
