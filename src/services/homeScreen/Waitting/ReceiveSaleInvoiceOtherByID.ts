import {$axios} from '../../../constants';
import {useSelector} from 'react-redux';
import store from '../../../redux/store';


  export const ReceiveSaleInvoiceOtherByID = async (userId: string, saleInvoiceID: string) => {
    try {
      let body = {
          UserID: userId,
          SaleInvoiceID: saleInvoiceID,
        };
      return await $axios.post('ReceiveSaleInvoiceOtherByID', body);
    } catch (error) {
      throw error
    }
  };
