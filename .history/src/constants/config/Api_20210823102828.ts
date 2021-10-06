import axios from 'axios';


const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // baseURL: state.config.UrlString,
});

export const apiConfigDefault = (urlString: string, guidId: string)=>{
  axios.defaults.baseURL = urlString;
    axios.defaults.params = {GUIID: guidId}
    axios.defaults.transformRequest = [function (data, headers) {
      return JSON.stringify(data);
    }]
    axios.defaults.transformResponse = [(data)=>{
      return JSON.parse(data)
    }]
}

export const $axios = api;
