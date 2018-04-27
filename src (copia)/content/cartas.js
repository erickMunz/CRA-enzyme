import * as React from 'react'; 
import { Button, Card, Classes, Elevation, ControlGroup ,Collapse} from "@blueprintjs/core";
import { BaseExample } from "@blueprintjs/docs-theme";


<<<<<<< HEAD
 
export default class Cartas extends React.Component{
     state = {
        isOpen: false,
    }; 
   render() {
        return (
            <div style={{height:"100px", alignContent:"center",width:"100%"}}>
            <ControlGroup vertical={false} fill={false} > 
            <div className={Classes.TREE_NODE_CONTENT}> 
                        <Card interactive={true} elevation={Elevation.TWO} className={Classes.DARK} >
                            <h5>
                                <a href="#">Analytical applications</a>
                            </h5>
                            <p>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and make
                                better decisions.
                            </p>
                            <Button text="Explore products"  />
                        </Card>
                        <Card Card interactive={true} elevation={Elevation.TWO} className={Classes.DARK} >
                            <h5>
                                <a href="#">Analytical applications</a>
                            </h5>
                            <p>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and make
                                better decisions.
                            </p>
                            <Button text="Explore products" className={Classes.BUTTON} />
                        </Card>
                        <Card Card interactive={true} elevation={Elevation.TWO} className={Classes.DARK} >
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
                    </div>
       
=======

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
>>>>>>> f3164f8359936dda7a1988405b43a26cd7b93dba
        );
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
     handleElevationChange = (elevation) => this.setState({ elevation });

     handleInteractiveChange = () => this.setState({ interactive: !this.state.interactive });
}