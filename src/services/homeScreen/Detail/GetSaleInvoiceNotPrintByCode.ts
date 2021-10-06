import { $axios } from '../../../constants';
import { useSelector } from 'react-redux';
import store from '../../../redux/store';

export const GetSaleInvoiceNotPrintByCode = async (userId: string, codeString: string) => {

    return await $axios.get('GetSaleInvoiceNotPrintByCode', {
        params: {
            userid: userId,
            code: codeString
        }
    });

};