import React from 'react';
import ReactDomClient from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const container = document.getElementById('root');
const root = ReactDomClient.createRoot(container);
root.render(<App tab='home' />);
