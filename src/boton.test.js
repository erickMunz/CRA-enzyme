import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'chai';
import expect from 'expect';
import sinon from 'sinon';
import Hint from './content/hint';
import {ControlGroup, Button, Card, Popover,PopoverInteractionKind,Classes,Overlay} from '@blueprintjs/core'


it('Prueba la existencia de el componente popover',()=>{
    const wrapper = shallow(<Hint/>);
    expect(wrapper.find(Popover).exists()).toBe(true);
});

it('Valida que exista el efecto overlay en el Componente',()=>{
    const wrapper = shallow(<Hint/>);
    expect(wrapper.find(Overlay).exists()).toBe(false);
});

it('Valida el evento mouseenter',()=>{
    const wrapper1 = mount(<Hint/>);
    
    wrapper1.find(Popover).simulate("mouseenter");

    wrapper1.find(Popover).simulate("mouseleave");
    
        // Popover delays closing using setTimeout, so need to defer this check too.
        const isOpen = wrapper1.find(Overlay).prop("isOpen");

        expect(isOpen).toBe(false);;

});
