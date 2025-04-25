
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';


// Create a root for the application
const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found!');
}
const root = createRoot(container);

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
