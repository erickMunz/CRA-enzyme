import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from './nav/index';
import assert from 'chai';
import expect from 'expect';
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
it('Valida que al presionar el boton se despliegue un menu', ()=>{
    const nav = shallow(<Nav/>);
    nav.find(Popover).simulate('click');
    /*
    const menu= nav.find("#mimenu").hostNodes().simulate('mouseenter');
    nav.find(Button).hostNodes().simulate('mouseleave');
    */setTimeout(() => {
      // Popover delays closing using setTimeout, so need to defer this check too.
      const isOpen = wrapper.find(Overlay).prop("isOpen");
      assert.equal(isOpen, true);
      
  });

});
it('Valida de la existencia de el tipo de boton pop over', () =>{
  const wrapper = shallow(<Nav/>);
  expect(wrapper.find(Popover).length).toBe(1);
});

it('Valida que se encuentren tres cartas', ()=>{
  const wrapper = mount(<Nav/>);
  expect(wrapper.find(Card).length).toBe(3);
});
/*
it('Valida que en la tercer carta se encuentre el boton con el texto "mostrar logs"',()=>{
  const wrapper = mount(<Nav/>);
  expect(wrapper.find(Card).at(3)).toHaveProp('title','good-bye')
}
);*/