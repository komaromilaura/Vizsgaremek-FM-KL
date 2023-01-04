import clsx from "clsx";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router";
import Allashely from "../Pages/Allashely/Allashely";
import BelsoEllenorzes from "../Pages/BelsoEllenorzes/BelsoEllenorzes";
import Beszerzes from "../Pages/Beszerzesek/Beszerzes";
import Dolgozok from "../Pages/Dolgozok/Dolgozok";
import Ellenorzo from "../Pages/Ellenorzok/Ellenorzok";
import KulsoEllenorzes from "../Pages/KulsoEllenorzes/KulsoEllenorzes";
import Letszam from "../Pages/Letszam/Letszam";
import LogOut from "../Pages/Log out/LogOut";
import Migrans from "../Pages/Migrans/Migrans";
import Mozgoorseg from "../Pages/Mozgoorseg/Mozgoorseg";
import Partner from "../Pages/Partner/Partner";
import Rendezvenyek from "../Pages/Rendezvenyek/Rendezvenyek";
import Tulora from "../Pages/Tulora/Tulora";
import User from "../Pages/User/User";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import style from "./Style/Dashboard.module.scss";

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Container fluid className="p-0 min-vh-100">
                <Row className="min-vh-100 w-100 mx-0">
                    <Col lg={2} className="min-vh-100 px-0">
                        <Sidebar />
                    </Col>
                    <Col lg={10} className={clsx("min-vh-100 px-0 m-0", style.pages)}>
                        <Topbar />
                        <Container fluid className="min-vh-100 m-0 p-0">
                            <Routes>
                                <Route path="/logout" element={<LogOut />}/>
                                <Route path="/user" element={<User />} />
                                <Route path="/dolgozo" element={<Dolgozok />} />
                                <Route path="/partner" element={<Partner />}/> 
                                <Route path="/" element={<Partner />}/>
                                <Route path="/ellenor" element={<Ellenorzo />}/> 
                                <Route path="/beszerzes" element={<Beszerzes />}/> 
                                <Route path="/belso_ell" element={<BelsoEllenorzes />}/> 
                                <Route path="/kulso_ell" element={<KulsoEllenorzes />}/> 
                                <Route path="/migrans" element={<Migrans />}/> 
                                <Route path="/mozgoorseg" element={<Mozgoorseg />} /> 
                                <Route path="/allashely" element={<Allashely />} /> 
                                <Route path="/rendezvenyek" element={<Rendezvenyek />}/> 
                                <Route path="/tulora" element={<Tulora />}/> 
                                <Route path="/letszam" element={<Letszam />}/> 
                                <Route />
                            </Routes>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboard;