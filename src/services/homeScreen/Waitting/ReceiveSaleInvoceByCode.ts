import {$axios} from '../../../constants';
import {useSelector} from 'react-redux';
import store from '../../../redux/store';


  export const ReceiveSaleInvoiceByCode = async (userId: string, CodeString: string) => {
    try {
      let body = {
          UserID: userId,
          SaleInvoiceCode: CodeString,
        };
      return await $axios.post('ReceiveSaleInvoiceByCode', body);
    } catch (error) {
      throw error
    }
  };
