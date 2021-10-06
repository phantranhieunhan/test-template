import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducers from './reducer';
import {createBlacklistFilter, createWhitelistFilter} from 'redux-persist-transform-filter';
const config = createWhitelistFilter('config', [
  'UrlString',
  'GuidID',
  'SiteID',
  'StoreID',
]);
const auth = createWhitelistFilter('auth', [
  'messAuth','profileInfo','isFinger', 'isLogin'
]);
const persistConfig: any = {
  key: 'root',
  transforms: [config, auth],
  storage: AsyncStorage,
  timeout: 0,
  blacklist: ['system'],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
const configureStore = createStore(
  persistedReducer
);
export const persistor = persistStore(configureStore);
export default configureStore;
configureStore.subscribe(() => {
  console.log('configureStore', configureStore.getState());
});
