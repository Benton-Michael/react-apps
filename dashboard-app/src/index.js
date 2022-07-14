import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './contexts/ContextProvider';


// hooks react app to the root div
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ContextProvider> 
        <App /> 
    </ContextProvider>,
);




