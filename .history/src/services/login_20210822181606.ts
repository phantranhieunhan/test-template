import {$axios} from '../constants';
import {useSelector} from 'react-redux';
import store from '../redux/store'


  export const login = async (userName: string, password: string, UrlString: string, GuidID:string) => {
    try {
      // const {UrlString, GuidID} = useSelector((state: any) => ({
      //     UrlString: state.config.UrlString,
      //     GuidID: state.config.GuidID
      //   }));
      let a:any = store.getState().config
      let body = {
          UserName: userName,
          Password: password,
        };
      return await $axios.post('/API/stock/CheckLogin', body);
    } catch (error) {
      console.log(error)
    }
  };
