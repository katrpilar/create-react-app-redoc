import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from '../remove/App';
import HomepageLayout from "./pages/index"
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HomepageLayout />, document.getElementById('root'));

registerServiceWorker();
