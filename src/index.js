import React from 'react';
import './index.css';
import { render } from 'react-dom';
import App from './App';

const root = document.getElementById('root');

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
);

