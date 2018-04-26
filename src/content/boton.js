import * as React from 'react'
import {Popover,PopoverInteractionKind} from '@blueprintjs/core';


export default class Boton extends React.Component{
    constructor(props){
        super();
        props.texto;
        props.texto2;
    }
    render(){
        return(
            <Popover usePortal={false} interactionKind={PopoverInteractionKind.HOVER}>
                <div>{this.props.texto}</div>
                <div>{this.props.texto2}</div>
            </Popover>
        );
    }

}

