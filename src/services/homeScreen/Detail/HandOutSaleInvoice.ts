import { $axios } from '../../../constants';
import { useSelector } from 'react-redux';
import store from '../../../redux/store';
import {SaleInvoiceClient,SaleInvoiceDetailClient,PaymentInfo} from '../../../components/object/Order'

export const HandOutSaleInvoice = async (userId: string, saleInvoice: string,datadetail:SaleInvoiceDetailClient,dataPayment:PaymentInfo) => {
    try {
        let body = {
            UserID: userId,
            SaleInvoice: saleInvoice,
            SaleInvoiceDetailList:datadetail,
            PaymentInfo:dataPayment

        };
        return await $axios.post('HandOutSaleInvoice', body);
    } catch (error) {
        throw error
    }
};