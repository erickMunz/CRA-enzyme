<<<<<<< HEAD
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

=======
import * as React from 'react';
import {Button, Collapse} from '@blueprintjs/core';

export interface ICollapseExampleState {
    isOpen?: boolean;
};
 
export class CollapseExample extends React.Component<{}, ICollapseExampleState> {
    public state = {
        isOpen: false,
    };
 
    public render() {
        return (
            <div>
                <Button onClick={this.handleClick}>
                    {this.state.isOpen ? "Hide" : "Show"} build logs
                </Button>
                <Collapse isOpen={this.state.isOpen}>
                    <pre>
                        Dummy text.
                    </pre>
                </Collapse>
            </div>
        );
    }
 
    private handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
}
>>>>>>> f3164f8359936dda7a1988405b43a26cd7b93dba
