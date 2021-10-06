import {$axios} from '../constants';
import {useSelector} from 'react-redux';
import store from '../redux/store'

  export const login = async (userName: string, password: string) => {
    try {
      let body = {
          UserName: userName,
          Password: password,
        };
      
      return await $axios.post('CheckLogin', body);
    } catch (error) {
      throw error
    }
  };
