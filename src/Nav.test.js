import React from 'react';
import { shallow } from 'enzyme';
import Nav from './nav/index';
import expect from 'expect';

import {Button, Navbar, Menu} from '@blueprintjs/core';


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
    expect(nav.find(prop:'id').simulate('click')).toContain(Menu);
    expect(nav.find(prop:'id').exists()).toEqual(true);
});