import { $axios } from '../../../constants';
import { useSelector } from 'react-redux';
import store from '../../../redux/store';

export const GetSaleInvoiceById = async (userId: string, idDetail: string) => {

    return await $axios.get('GetSaleInvoiceById', {
        params: {
            userid: userId,
            id: idDetail
        }
    });

};