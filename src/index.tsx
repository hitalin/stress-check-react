import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import { globalStyles } from './styles';

const root = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      <Global styles={globalStyles} />
      <App />
    </React.StrictMode>
  );
}