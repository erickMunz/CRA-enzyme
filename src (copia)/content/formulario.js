<<<<<<< HEAD
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
=======
import * as React from 'react';
import {Card, InputGroup, FormGroup, input} from '@blueprintjs/core';

export default class Formulario extends React.Component{
    
    render(){
        
        return (
            <div style={{position:'relative',left:'20%'}}>
            <div class="pt-form-group">
                <label class="pt-label" for="example-form-group-input-a">
                    Label A
                    <span class="pt-text-muted">(required)</span>
                </label>
                <div class="pt-form-content">
                    <input id="example-form-group-input-a" class="pt-input" style={{width: '300px;'}} placeholder="Placeholder text" type="text" dir="auto" />
                    <div class="pt-form-helper-text">Helper text with details / user feedback</div>
                </div>
            </div>
                <div class="pt-form-group pt-intent-danger">
                <label class="pt-label" for="example-form-group-input-b">
                    Label B
                    <span class="pt-text-muted">(required)</span>
                </label>
                <div class="pt-form-content">
                    <div class="pt-input-group pt-intent-danger">
                    <span class="pt-icon pt-icon-calendar"></span>
                    <input id="example-form-group-input-b" class="pt-input" style={{width: '300px;'}} type="text" placeholder="Placeholder text" dir="auto" />
                    </div>
                    <div class="pt-form-helper-text">Please enter a value</div>
                </div>
                </div>
<div class="pt-form-group">
  <label class="pt-label" for="example-form-group-switch-c">
    Label C
    <span class="pt-text-muted">(required)</span>
  </label>
  <div class="pt-form-content">
    <label class="pt-control pt-switch">
      <input id="example-form-group-switch-c" type="checkbox" />
      <span class="pt-control-indicator"></span>
      Switch C
    </label>
    <div class="pt-form-helper-text">Helper text with details / user feedback</div>
  </div>
</div>
<div class="pt-form-group pt-inline">
  <label class="pt-label" for="example-form-group-input-d">
    Label D
    <span class="pt-text-muted">(optional)</span>
  </label>
  <div class="pt-form-content">
    <div class="pt-input-group">
      <span class="pt-icon pt-icon-calendar"></span>
      <input id="example-form-group-input-d" class="pt-input" style={{width: '200px'}} type="text" placeholder="Placeholder text" dir="auto" />
    </div>
    <div class="pt-form-helper-text">Helper text with details / user feedback</div>
  </div>
</div>
<div class="pt-form-group pt-inline pt-large pt-disabled">
  <label class="pt-label" for="example-form-group-input-e">
    Label E
    <span class="pt-text-muted">(optional)</span>
  </label>
  <div class="pt-form-content">
    <div class="pt-input-group pt-large pt-disabled">
      <span class="pt-icon pt-icon-calendar"></span>
      <input id="example-form-group-input-e" class="pt-input" disabled style={{width: '200px'}}  type="text" placeholder="Placeholder text" dir="auto" />
    </div>
    <div class="pt-form-helper-text">Helper text with details / user feedback</div>
  </div>
</div>

</div>
>>>>>>> f3164f8359936dda7a1988405b43a26cd7b93dba
        );
    }
}