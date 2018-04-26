import React from 'react';
import { shallow, mount } from 'enzyme';
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