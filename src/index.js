import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Portfolio from './Portfolio';
import './index.css'; // or your main styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Portfolio />
  </HashRouter>
);
