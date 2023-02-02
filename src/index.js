import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';
import SearchContextProvider from './store/SearchProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchContextProvider>
    <App />
  </SearchContextProvider>
);
