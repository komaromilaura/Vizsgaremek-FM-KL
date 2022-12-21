import React, { Component} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Style/Topbar.module.scss";
import logo from "../../Assets/logo.png";
import { topMenu } from "../../Utils/data.js";
import * as icons from "react-bootstrap-icons";

class Topbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Navbar className={style.navbar} expand="md">
            <Container fluid>
              <Navbar.Brand>
                <img src={logo} alt="Országos Mentőszolgálat logója" width="65rem"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                <Nav>
                    {topMenu.map((item) => {
                        return(
                            <Nav.Item key={item.link} className={style.navItem}>
                                <Link to={item.link} className={style.navItemLink}>
                                    {React.createElement(icons[item.icon])}                                
                                    {item.name}
                                </Link>
                            </Nav.Item>
                        );
                    })}                    
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}

export default Topbar;