import {$axios} from '../constants';
import {useDispatch, useSelector} from 'react-redux';

export const configApp = async (userName: string, password) => {
  try {
    const {UrlString, GuidID} = useSelector((state: any) => ({
        UrlString: state.config.UrlString,
        GuidID: state.config.GuidID
      }));
    let body = {
        UserName: userName,
        Password: password,
      };
    return await $axios.post(UrlString + '/API/stock/CheckLogin?GUIID=', body);
  } catch (error) {}
};
