import {$axios} from '../../../constants';
import {useSelector} from 'react-redux';
import store from '../../../redux/store';


  export const SearchSaleInvoiceNotReceive = async (userId: string, searchString: string,pageIndex:string) => {
    try {
      let body = {
          UserID: userId,
          PageIndex:pageIndex,
          SearchString: searchString
        };
      return await $axios.post('SearchSaleInvoiceNotReceive', body);
    } catch (error) {
      throw error
    }
  };
