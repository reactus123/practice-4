import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react';
import {persistor, store} from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
                 <Global styles={GlobalStyles} />
                  <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
