import { $axios } from '../../../constants';
import { useSelector } from 'react-redux';
import store from '../../../redux/store';

export const ApplySaleInvoiceByID = async (userId: string, saleInvoiceID: string) => {
    try {
        let body = {
            UserID: userId,
            SaleInvoiceID: saleInvoiceID,

        };
        return await $axios.post('ApplySaleInvoiceByID', body);
    } catch (error) {
        throw error
    }
};