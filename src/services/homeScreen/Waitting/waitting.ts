import {$axios} from '../../../constants';
import {useSelector} from 'react-redux';
import store from '../../../redux/store';


  export const waittingPrinted = async (userId: string, pageIndex: number,searchString:string) => {
    try {
      let body = {
          UserID: userId,
          PageIndex: pageIndex,
          SearchString:searchString
        };
      return await $axios.post('GetSaleInvoiceNotReceive', body);
    } catch (error) {
      throw error
    }
  };
 
