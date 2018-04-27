import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'chai';
import expect from 'expect';
import Cartas from './content/cartas';
import {ControlGroup, Button, Card} from '@blueprintjs/core'

it('Valida que se encuentren dentro del componente ControlGroup',()=>{
    const wrapper = shallow(<Cartas/>);
    expect(wrapper.find(ControlGroup).exists()).toBe(true);
});

it('Valida que se encuentren 3 cartas',()=>{
    const wrapper = shallow(<Cartas/>);
    expect(wrapper.find(Card).length).toBe(3);
})
it('Valida que exista un boton dentro de la tercer carta',()=>{
    const wrapper = shallow(<Cartas/>);
})

