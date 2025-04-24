
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Register the Intersection Observer polyfill for older browsers
import 'intersection-observer';

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
