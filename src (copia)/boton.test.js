import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'chai';
import expect from 'expect';
import sinon from 'sinon';
import Boton from './content/boton';
import {ControlGroup, Button, Card, Popover,PopoverInteractionKind,Classes} from '@blueprintjs/core'


it('Prueba la existencia de el componente popover',()=>{
    const wrapper = shallow(<Boton/>);
    expect(wrapper.find(Popover).exists()).toBe(true);
});

it('Prueba del clic',()=>{
    const wrapper = shallow(<Boton/>);
    wrapper.find(Popover).simulate("mouseenter");
    setTimeout(() => {
        // Popover delays closing using setTimeout, so need to defer this check too.
        const isOpen = wrapper.find(Overlay).prop("isOpen");
        assert.equal(isOpen, false);
    });
});
