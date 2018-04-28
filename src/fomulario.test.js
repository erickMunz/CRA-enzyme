import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'chai';
import expect from 'expect';
import Formulario from './content/formulario';
import sinon from 'sinon';
import {FormGroup, Button} from '@blueprintjs/core';

it('Conteo de elementos en el formulario',()=>{
    const wrapper= shallow(<Formulario/>);
    expect(wrapper.find(FormGroup).length).toBe(1);
});


it('Conteo de input en el formulario',()=>{
    const wrapper= shallow(<Formulario/>);
    expect(wrapper.find("#text-input").length).toBe(4);
});