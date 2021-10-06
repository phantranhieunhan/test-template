import { $axios } from '../../../constants';
import { useSelector } from 'react-redux';
import store from '../../../redux/store';

export const GetAccountBankingType = async () => {

    return await $axios.get('GetAccountBankingType', {
        params: {
           
        }
    });

};