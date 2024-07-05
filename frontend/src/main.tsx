import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
