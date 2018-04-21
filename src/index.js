import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './nav/index';
import registerServiceWorker from './registerServiceWorker';
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";

ReactDOM.render(<Nav />, document.getElementById('root'));

registerServiceWorker();
