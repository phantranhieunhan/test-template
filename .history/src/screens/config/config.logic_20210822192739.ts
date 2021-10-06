import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { configApp } from '../../services/config';
export const configApi = (props: any) => {
  const dispatch = useDispatch();

  const [guidId, setGuidId] = useState('');
  const [siteId, setSiteId] = useState(0);
  const [storeId, setStoreId] = useState('');
  const [urlString, setUrlString] = useState('');

  useEffect(() => {
    setSiteId(24);
    setStoreId('kbl_24');
    setUrlString('https://demobanhang.softwareviet.com/')
    return () => {
    }
  })

  const onPress = async () => {
    let _configApp = await configApp(urlString, siteId, storeId);
    let result = _configApp.data
    if(result?.StatusID == 1){
      const dataConfig = {
        GuidID: result?.GUID,
        SiteID: siteId,
        StoreID: storeId,
        UrlString: urlString
      };
      dispatch({type: 'CONFIG_SUCCESS', payload: dataConfig});
    }
    if(result?.StatusID != 1){
      //notify error
    }
  };
  return {
    guidId,
    setGuidId,
    siteId,
    setSiteId,
    storeId,
    setStoreId,
    urlString,
    setUrlString,
    onPress,
  };
};
