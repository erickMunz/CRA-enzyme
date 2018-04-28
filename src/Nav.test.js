import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from './nav/index';
import assert from 'chai';
import expect from 'expect';
import sinon from 'sinon';
import Cartas from './content/cartas';
import {Button, Navbar, Menu, Classes, Overlay, Card, Popover} from '@blueprintjs/core';


it('Valida que sean 3 botones ', () => {
  const wrapper = shallow(<Nav />);
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.find(Button).length).toBe(3);
});
it('Valida que exista el elemento Navbar', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find(Navbar).exists()).toEqual(true);
    // expect(wrapper.contains(welcome)).to.equal(true);
  });

it('Valida de la existencia de el tipo de boton pop over', () =>{
  const wrapper = shallow(<Nav/>);
  expect(wrapper.find(Popover).length).toBe(1);
});

it('valida que el menu no exista antes del clic',()=>{

  const wrapper = shallow(<Nav/>);
  expect(wrapper.find(Menu).exists()).toEqual(false);
});

it('Valida clic en el menu',()=>{
  const wrapper = shallow(<Nav/>);
  const compassMenu = sinon.spy();
  wrapper.find("#mimenu").simulate("click");

  expect(compassMenu).toHaveProperty('callCount', 0);
})