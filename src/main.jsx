import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MatchProvider } from './MatchContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MatchProvider>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </MatchProvider>
    
  </React.StrictMode>
);
