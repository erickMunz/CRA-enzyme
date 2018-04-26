import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './nav/index';
import Cartas from './content/cartas';
import Formulario from './content/formulario';
import registerServiceWorker from './registerServiceWorker';

import {Contenido} from './content/contenido';
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/normalize.css/normalize.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
    
ReactDOM.render(
    <div>
        <Nav />
        
        <Formulario />
        <Cartas />
        
        </div>, document.getElementById('root'));

registerServiceWorker();
