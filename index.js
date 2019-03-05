/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
// import App from './App'; 


import React from 'react'
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import Home from './src/redux/container/home';

const store = configureStore()

const app = () => (
  <Provider store={store}>
    <Home/>
  </Provider>
)


AppRegistry.registerComponent('new', () => app);