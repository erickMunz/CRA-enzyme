import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'chai';
import expect from 'expect';
import Cartas from './content/cartas';
import sinon from 'sinon';
import {ControlGroup, Button, Card} from '@blueprintjs/core'

it('Valida que se encuentren dentro del componente ControlGroup',()=>{
    const wrapper = shallow(<Cartas/>);
    expect(wrapper.find(ControlGroup).exists()).toBe(true);
});

it('Valida que se encuentren 3 cartas',()=>{
    const wrapper = shallow(<Cartas/>);
    expect(wrapper.find(Card).length).toBe(3);
})

it('Valida el clic en la carta',()=>{
    const wrapper = shallow(<Cartas/>);
    const handleClick = sinon.spy();
    wrapper.find("#mimenu").simulate("click");
    expect(handleClick).toHaveProperty('callCount', 0);

    //expect(handleClick).toHaveProperty('isOpen', 1);
})
it ('Valida que se encuentren 4 botones',()=>{
    
    const wrapper = shallow(<Cartas/>);
    expect(wrapper.find(Button).length).toBe(4);
})
