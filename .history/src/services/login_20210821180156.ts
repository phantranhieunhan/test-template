import {$axios} from '../constants';
import {useSelector} from 'react-redux';

export const login123 = async (userName: string, password: string) => {
  try {
    // const {UrlString, GuidID} = useSelector((state: any) => ({
    //     UrlString: state.config.UrlString,
    //     GuidID: state.config.GuidID
    //   }));
    let body = {
        UserName: userName,
        Password: password,
      };
      console.log({body: body})
    // return await $axios.post(UrlString + '/API/stock/CheckLogin?GUIID='+GuidID, body);
  } catch (error) {}
};
