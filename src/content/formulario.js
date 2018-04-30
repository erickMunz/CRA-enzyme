'use string'
import * as React from 'react'
import {FormGroup} from '@blueprintjs/core'

export default class Formulario extends React.Component{
    render(){
        return (
            <div style={{height:"320px", textAlign:"left",width:"300px",position:"relative", top:"20px",left:"40%"}} >
                <FormGroup  
                    helperText="Por favor llena todos los campos."
                    label="Escribe tu nombre"
                    labelFor="text-input"
                    requiredLabel={true}
                >
                    <input id="text-input" placeholder="Tu nombre" />
                    <input id="text-input" placeholder="Tu apellido" />
                    <input id="text-input" placeholder="Tu email" />
                    <input id="text-input" placeholder="Tu Ubicación" />
                    <input type="submit" />
                </FormGroup>
            </div>
        );
    }
}