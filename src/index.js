import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav/index';
import Cartas from './content/cartas';
import Formulario from './content/formulario';
import registerServiceWorker from './registerServiceWorker';
import Hint from './content/hint';

import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/normalize.css/normalize.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
    
ReactDOM.render(
    <div>
        <Nav />
        
        <Formulario />
        <Cartas />
        <Hint texto="Esta es una prueba" texto2="Esta no lo esperabas"/>
        </div>, document.getElementById('root'));

registerServiceWorker();
