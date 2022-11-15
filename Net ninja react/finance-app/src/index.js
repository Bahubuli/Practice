import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {useAuthContext} from '../src/hooks/useAuthContext'

import {AuthContextProvider} from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
