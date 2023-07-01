import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
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
  </React.StrictMode>
);
