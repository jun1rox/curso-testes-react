import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import Cabecalho from 'components/Cabecalho';

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho />
  </React.StrictMode>,
  document.getElementById('root')
);
