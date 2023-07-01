import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
<<<<<<< HEAD
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import {persistor, store} from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        {/* <PersistGate loading={<p>Loading...</p>} persistor={persistor}> */}
    <ThemeProvider theme={theme}>
                 <Global styles={GlobalStyles} />
                  <App />
    </ThemeProvider>
        {/* </PersistGate> */}
      </Provider>
=======

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <App />
      </ThemeProvider>
    </Provider>
>>>>>>> 53d29fd6a7d39531e0aa1f5c606496ebb5b0874f
  </React.StrictMode>
);
