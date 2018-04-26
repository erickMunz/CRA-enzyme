'use string'
import * as React from 'react'
import {Card, FormGroup, Classes, Button} from '@blueprintjs/core'

export default class Formulario extends React.Component{
    render(){
        return (
            <div style={{height:"200px", textAlign:"left",width:"300px", borderLeft:"20%"}} >
                <FormGroup  
                    helperText="Helper text with details..."
                    label="Escribe tu nombre"
                    labelFor="text-input"
                    requiredLabel={true}
                >
                    <input id="text-input" placeholder="Tu nombre" />
                    <input id="text-input" placeholder="Tu apellido" />
                    <input id="text-input" placeholder="Tu email" />
                    <input id="text-input" placeholder="Tu Ubicacion" />
                    <input type="submit" />
                </FormGroup>
            </div>
        );
    }
}