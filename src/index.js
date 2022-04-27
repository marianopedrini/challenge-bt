import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './router/Routes';
import './index.css';
import MainRoutes from './routes/MainRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main-container">
      <MainRoutes />
    </div>
  </React.StrictMode>
);
