import * as React from 'react'; 
import { Button, Card, Classes, Elevation, ControlGroup ,Collapse} from "@blueprintjs/core";
import { BaseExample } from "@blueprintjs/docs-theme";



export default class Cartas extends React.Component{
    state: ICardExampleState = {
        elevation: 0,
        interactive: false,
        onClick: null,
    };
   render() {
        return (
            <div className={Classes.TREE_NODE_ICON}>
                <div class="docs-card-example">
                    <div class="pt-card pt-elevation-0 pt-interactive">
                        <h5><a href="#">Data fusion platforms</a></h5>
                        <p>Back-end infrastructure for integrating, managing, and securing data of any kind, from any source, at massive scale.</p>
                    </div>
                <div class="pt-card pt-elevation-1 pt-interactive">
                    <h5><a href="#">Analytical applications</a></h5>
                    <p>User interfaces that enable people to interact smoothly with data, ask better questions, and make better decisions.</p>
                </div>
                <div class="pt-card pt-elevation-2 pt-interactive">
                    <h5><a href="#">For any data problem</a></h5>
                    <p>Proven technology that can be deployed today, adapts to any domain, and produces operational results in weeks.</p>
                    <div>
                    <Button onClick={this.handleClick}>
                    {this.state.isOpen ? "Hide" : "Show"} build logs
                    </Button>
                    <Collapse isOpen={this.state.isOpen}>
                        <pre>
                          Hola esto es una prueba
                        </pre>
                    </Collapse>
                 </div>
         </div>
</div>
</div>
        );
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
     handleElevationChange = (elevation) => this.setState({ elevation });

     handleInteractiveChange = () => this.setState({ interactive: !this.state.interactive });
}