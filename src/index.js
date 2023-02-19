import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LecipeAPI from './LecipeAPI';
import LecipeAPI2 from './LecipeAPI2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <LecipeAPI2 />
);
