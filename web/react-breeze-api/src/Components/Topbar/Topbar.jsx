import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Style/Topbar.module.scss";
import logo from "../../Assets/logo.png";
import { BoxArrowInRight, BoxArrowRight, PersonCircle } from "react-bootstrap-icons";
import useAuthContext from "../Context/AuthContext";

function Topbar (props) {
    const { user, logout } = useAuthContext();

    return(
        <Navbar className={style.navbar} expand="md">
        <Container fluid>
            <Navbar.Brand>
            <img src={logo} alt="Országos Mentőszolgálat logója" width="65rem"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
            <Nav>
                {user ? (
                    <>
                        <Nav.Item className={style.navItem}>
                            <Link to="/user" className={style.navItemLink}>
                                <PersonCircle />                                
                                Saját adatok
                            </Link>
                        </Nav.Item>
                        <Nav.Item className={style.navItem}>
                            <span
                                className={style.navItemLink}
                                onClick = {logout}
                            >
                                <BoxArrowRight />                                
                                Kijelentkezés
                            </span>
                        </Nav.Item> 
                    </>   
                ) : (
                    <Nav.Item className={style.navItem}>
                        <Link to="/login" className={style.navItemLink}>
                            <BoxArrowInRight />                                
                            Bejelentkezés
                        </Link>
                    </Nav.Item>
                )}
                
                               
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Topbar;