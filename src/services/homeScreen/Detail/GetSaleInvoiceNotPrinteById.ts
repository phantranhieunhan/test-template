import { $axios } from '../../../constants';
import { useSelector } from 'react-redux';
import store from '../../../redux/store';

export const GetSaleInvoiceNoPrintById = async (userId: string, idDetail: string) => {

    return await $axios.get('GetSaleInvoiceNotPrintById', {
        params: {
            userid: userId,
            id: idDetail
        }
    });

};