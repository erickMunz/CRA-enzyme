import React from 'react';
import { shallow, mount } from 'enzyme';
<<<<<<< HEAD
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

=======
import Nav from './nav/index';
import assert from 'chai';
import expect from 'expect';
import Cartas from './content/cartas';
import {Button, Navbar, Menu, Classes, Overlay, Card, Popover} from '@blueprintjs/core';

it('Verifica que se encuentren 6 divs',()=>{
    const wrapper = shallow(<Cartas/>);
    expect(wrapper.find("div").length).toBe(6);
});

it('Valida',()=>{
    const wrapper = shallow(<Cartas/>);
    expect(wrapper.find("div.pt-tree-node-icon").length).toBe(1);
    /*const div = wrapper.at("div.docs-card-example");
    expect(div.find('div.pt-tree-node-icon')).toEqual(true);*/
});
it('exist',()=>{

    const wrapper = shallow(<Cartas/>);
    expect(wrapper.find())
});
it('Segundo div',()=>{

    const wrapper = shallow(<Cartas/>);
    const segundo = wrapper.find("div").at(1);
    expect(segundo.find("div.pt.card").length).toBe(3);
});
>>>>>>> f3164f8359936dda7a1988405b43a26cd7b93dba
