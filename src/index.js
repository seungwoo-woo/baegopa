import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LecipeAPI2 from '../src/temp/LecipeAPI2';
import RecipeDetail from './pages/recipe/RecipeDetail';
import { Provider } from 'react-redux';
import { store } from "./app/store";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>
);

