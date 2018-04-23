import * as React from 'react'; 
import { Button, Card, Classes, Elevation, ControlGroup ,Collapse} from "@blueprintjs/core";
import { BaseExample } from "@blueprintjs/docs-theme";


export interface ICollapseExampleState {
    isOpen?: boolean;
};
 
export class Cartas extends BaseExample<{}, ICollapseExampleState >{
     state = {
        isOpen: false,
    }; 
   renderExample() {
        return (
            
            <ControlGroup vertical={false} fill={false} > 
            <div className={Classes.TREE_NODE_CONTENT}> 
                        <Card interactive={true} elevation={Elevation.TWO} >
                            <h5>
                                <a href="#">Analytical applications</a>
                            </h5>
                            <p>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and make
                                better decisions.
                            </p>
                            <Button text="Explore products"  />
                        </Card>
                        <Card Card interactive={true} elevation={Elevation.TWO} >
                            <h5>
                                <a href="#">Analytical applications</a>
                            </h5>
                            <p>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and make
                                better decisions.
                            </p>
                            <Button text="Explore products" className={Classes.BUTTON} />
                        </Card>
                        <Card Card interactive={true} elevation={Elevation.TWO} >
                            <h5>
                                <a href="#">Analytical applications</a>
                            </h5>
                            <p>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and make
                                better decisions.
                            </p>
                            <div>
                                <Button onClick={this.handleClick}>
                                    {this.state.isOpen ? "Ocultar" : "Mostrar"} logs
                                </Button>
                                <Collapse isOpen={this.state.isOpen}>
                                    <pre>
                                    [11:53:30] Finished 'typescript-bundle-blueprint' after 769 ms<br />
                                    [11:53:30] Starting 'typescript-typings-blueprint'...<br />
                                    [11:53:30] Finished 'typescript-typings-blueprint' after 198 ms<br />
                                    [11:53:30] write ./blueprint.css<br />
                                    [11:53:30] Finished 'sass-compile-blueprint' after 2.84 s
                                    </pre>
                                    <Button text="Hola"/>
                                </Collapse>
                            </div>
                            </Card>
                        </div>
                    </ControlGroup>
       
        );
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
     handleElevationChange = (elevation) => this.setState({ elevation });

     handleInteractiveChange = () => this.setState({ interactive: !this.state.interactive });
}