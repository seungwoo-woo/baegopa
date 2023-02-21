import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import LecipeAPI from './LecipeAPI';
// import LecipeAPI2 from './temp/LecipeAPI2';
import Subpage from './pages/subpage/Subpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <Subpage />
    </>
);
