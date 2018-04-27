import * as React from "react";

import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
    Menu, 
    MenuDivider, 
    MenuItem, 
    Popover, 
    Position
} from "@blueprintjs/core";

import {Contenido} from '../content/contenido';
import {Cartas} from '../content/cartas';
import { BaseExample, handleBooleanChange } from "@blueprintjs/docs-theme";



export default class Nav extends React.Component{

    render(){
        const compassMenu = (
            <Menu>
                <MenuItem icon="graph" text="Graficas" />
                <MenuItem icon="map" text="Mapas" />
                <MenuItem icon="th" text="Tablas" shouldDismissPopover={false} />
                <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
                <MenuDivider />
                <MenuItem icon="cog" text="Configuracion...">
                    <MenuItem icon="add" text="Agregar aplicacion" disabled={true} />
                    <MenuItem icon="remove" text="Eliminar aplicacion" />
                </MenuItem>
            </Menu>
);
        return (
            <div>
            <Navbar className={Classes.DARK}>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Praxis</NavbarHeading>
                    <NavbarDivider />
                    <Button className={Classes.MINIMAL} icon="home" text="Home" />
                    <Button className={Classes.MINIMAL} icon="document" text="Files" />
                    <Popover content={compassMenu} position={Position.RIGHT_BOTTOM}>
                        <Button icon="share" id="mimenu" text="Presiona el boton" /></Popover>
                    </NavbarGroup>
            </Navbar>
<<<<<<< HEAD
            
=======
>>>>>>> f3164f8359936dda7a1988405b43a26cd7b93dba
            </div>
        );
    }
}