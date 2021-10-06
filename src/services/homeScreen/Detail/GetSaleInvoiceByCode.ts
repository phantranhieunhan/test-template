import { $axios } from '../../../constants';
import { useSelector } from 'react-redux';
import store from '../../../redux/store';

export const GetSaleInvoiceByCode = async (userId: string, codeString: string) => {

    return await $axios.get('GetSaleInvoiceByCode', {
        params: {
            userid: userId,
            code: codeString
        }
    });

};