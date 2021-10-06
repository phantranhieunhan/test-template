import {$axios} from '../../../constants';
import {useSelector} from 'react-redux';
import store from '../../../redux/store';

export const GetSaleInvoiceReceived = async (userId: string, pageIndex: string,searchString:string) => {
    try {
      let body = {
          UserID: userId,
          PageIndex: pageIndex,
          SearchString:searchString
        };
      return await $axios.post('GetSaleInvoiceReceived', body);
    } catch (error) {
      throw error
    }
  };