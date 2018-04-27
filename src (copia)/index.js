import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './nav/index';
import Cartas from './content/cartas';
<<<<<<< HEAD
import Contenido from './content/contenido';
import registerServiceWorker from './registerServiceWorker';
import Formulario from './content/formulario';
import Boton from './content/boton';
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/normalize.css/normalize.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

ReactDOM.render(
    <div className={"Navegacion"} >
        <Nav />
        <Contenido/>
        <Cartas style={{height:"100px", alignContent:"center",width:"50%"}}/>
        <Formulario/>
        <Boton style={{width:"100%",height:"100"}} texto="Este es un texto importante" texto2="Esto no te lo esperabas"/>
    </div>, document.getElementById('root'));
=======
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
>>>>>>> f3164f8359936dda7a1988405b43a26cd7b93dba

registerServiceWorker();
