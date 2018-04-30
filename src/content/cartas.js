import * as React from 'react'; 
import { Button, Card, Classes, Elevation, ControlGroup ,Collapse} from "@blueprintjs/core";
import { BaseExample } from "@blueprintjs/docs-theme";


 
export default class Cartas extends React.Component{
     state = {
        isOpen: false,
    }; 
   render() {
        return (
            <div style={{height:"110px", alignContent:"center",width:"100%"}}>
            <ControlGroup vertical={false} fill={false} > 
            <div className={Classes.TREE_NODE_CONTENT}> 
                        <Card interactive={true} elevation={Elevation.TWO} className={Classes.DARK} >
                            <h5>
                                <a href="#">Contenido 1</a>
                            </h5>
                            <p>
                            Lorem ipsum dolor sit amet, nam eruditi comprehensam no. Quidam petentium et sed, in graeco euismod efficiendi vis. Eum ne errem labores vocibus, at pro purto referrentur. Ad partiendo abhorreant mei. Pri simul veritus ea.

                            </p>
                            <Button text="Explore products"  />
                        </Card>
                        <Card Card interactive={true} elevation={Elevation.TWO} className={Classes.DARK} >
                            <h5>
                                <a href="#">Contenido 2</a>
                            </h5>
                            <p>
                            Lorem ipsum dolor sit amet, nam eruditi comprehensam no. Quidam petentium et sed, in graeco euismod efficiendi vis. Eum ne errem labores vocibus, at pro purto referrentur. Ad partiendo abhorreant mei. Pri simul veritus ea.

                            </p>
                            <Button text="Explore products" className={Classes.BUTTON} />
                        </Card>
                        <Card Card interactive={true} elevation={Elevation.TWO} className={Classes.DARK} >
                            <h5>
                                <a href="#">Contenido 3</a>
                            </h5>
                            <p>
                            Lorem ipsum dolor sit amet, nam eruditi comprehensam no. Quidam petentium et sed, in graeco euismod efficiendi vis. Eum ne errem labores vocibus, at pro purto referrentur. Ad partiendo abhorreant mei. Pri simul veritus ea.

                            </p>
                            <div>
                                <Button id={"mimenu"} className={"menu"} onClick={this.handleClick}>
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
       
        );
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
     handleElevationChange = (elevation) => this.setState({ elevation });

     handleInteractiveChange = () => this.setState({ interactive: !this.state.interactive });
}