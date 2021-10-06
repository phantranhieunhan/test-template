/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/router/App';
import {name as appName} from './app.json';
import configureStore from './src/redux/store';
import React, { useEffect } from 'react'
import { Provider as StoreProvider } from 'react-redux'

const app = () => (
    <StoreProvider store={configureStore}>
      <App />
    </StoreProvider>
  );

AppRegistry.registerComponent(appName, () => app);
