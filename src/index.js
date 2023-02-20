import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LecipeAPI from './LecipeAPI';
import LecipeAPI2 from './temp/LecipeAPI2';
import subpage from './pages/subpage/subpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // <LecipeAPI2 />
);
