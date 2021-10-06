import axios from 'axios';
import {actionMain} from '../../utils/mainActions'

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // baseURL: state.config.UrlString,
});

export const apiConfigDefault = (urlString: string, guidId: string, _axios: any)=>{
  _axios.defaults.baseURL = urlString;
    _axios.defaults.params = {GUIID: guidId}
    _axios.defaults.transformRequest = [function (data, headers) {
      actionMain.loading(true);
      return JSON.stringify(data);
    }]
    _axios.defaults.transformResponse = [(data)=>{
      actionMain.loading(false);
      return JSON.parse(data)
    }]
}

export const $axios = api;
