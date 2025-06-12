import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './FlagWorld/store/store';
import App2 from './App2'
import { store2 } from './ProfetionList/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Provider store={store2}>
      <App2 />
    </Provider>
  </React.StrictMode>
)