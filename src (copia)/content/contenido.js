import * as React from 'react';
import {Text} from '@blueprintjs/core';


export default class Contenido extends React.Component{
    render(){ return(
        <div style={{height:"200px", alignContent:"center",width:"500px"}}>
            <h1> Hola mundo</h1>
            <Text> Este texto es prueba de documentos</Text>
        </div>

    );
        
    }
}
