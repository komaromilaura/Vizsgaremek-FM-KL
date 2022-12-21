//Légy szíves ezt majd nézd át, hogy jól értelmeztem-e, hogy miket kell számolni

import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {allasok} from "../../../Utils/data.js";
import {megyek} from "../../../Utils/data.js";

class Allashely extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gkvOsszSzervezett: 0,
            gkvOsszBetoltott: 0,
            osszesSzervezett: 0,
            osszesBetoltott: 0
        }
    }

    szamol = (min, max) => {
        let options = [];

        for (let i = min; i <= max; i++){
            options.push(<option value={i} key={i}>{i}</option>);
        }
        return options;
    }

    render() {
        const {
            gkvOsszSzervezett,
            gkvOsszBetoltott,
            osszesSzervezett,
            osszesBetoltott
        }=this.state;

        return(
            <Form className="p-3 min-vh-100">
                <h2 className="text-center text-decoration-underline p-2">Szervezett és betöltött álláshelyek</h2>
                <Row>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Mentőállomás
                            </Form.Label>
                            <Form.Select defaultValue="">
                                <option value="" disabled>Válasszon mentőállomást!</option>
                                {/*A mentőállomások listáját az adatbázisba rögzített mentőállomásokkal gondoltam feltölteni.*/}
                                <option value="pelda">Példa Mentőállomás</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Év
                            </Form.Label>
                            <Form.Select defaultValue="2022">
                                {this.szamol(2000, 2050)}                               
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Hónap
                            </Form.Label>
                            <Form.Select defaultValue="1">
                                {this.szamol(1, 12)}                      
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                {allasok.map((item, index) => {
                    return(
                        <Row key={index}>
                            <Col md={4} className="py-2">
                                <Form.Group>
                                    <Form.Label>
                                        {item.charAt(0).toUpperCase() + item.substring(1)} szervezett
                                    </Form.Label>
                                    <Form.Control 
                                        id={item + "-szervezett"}
                                        type="number" 
                                        min={0}
                                        defaultValue={0}
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            }
                                        }}
                                        onChange={() => {
                                            let szervezettallas = document.getElementById(item + "-szervezett");
                                            let betoltottallas = document.getElementById(item + "-betoltott");
                                            let uresallas = document.getElementById(item + "-ures");
                                            uresallas.value = szervezettallas.value - betoltottallas.value;
                                            
                                            if (parseInt(uresallas.value) < 0) {
                                                uresallas.style.color = "red";
                                            } else {
                                                uresallas.style.color = "black";
                                            }
                                            
                                            let osszesSz = 0;
                                            let gkvOsszSz = 0;
                                            {allasok.map((item) => {
                                                osszesSz += parseInt(document.getElementById(item + "-szervezett").value);
                                                return "";
                                            })}
                                            gkvOsszSz += parseInt(document.getElementById("mentőgépkocsivezető-szervezett").value);
                                            gkvOsszSz += parseInt(document.getElementById("műszaki gondnok-szervezett").value);
                                            gkvOsszSz += parseInt(document.getElementById("garázsmester-szervezett").value);

                                            this.setState({
                                                osszesSzervezett: osszesSz,
                                                gkvOsszSzervezett: gkvOsszSz
                                            });

                                            if (osszesBetoltott > osszesSz) {
                                                document.getElementById("osszes-ures").style.color = "red";
                                            } else {
                                                document.getElementById("osszes-ures").style.color = "black";
                                            }

                                            if (gkvOsszBetoltott > gkvOsszSz) {
                                                document.getElementById("GkvOsszes-ures").style.color = "red";
                                            } else {
                                                document.getElementById("GkvOsszes-ures").style.color = "black";
                                            }
                                        }}
                                    />
                                </Form.Group>                                
                            </Col>
                            <Col md={4} className="py-2">
                                <Form.Group>
                                    <Form.Label>
                                        {item.charAt(0).toUpperCase() + item.substring(1)} betöltött
                                    </Form.Label>
                                    <Form.Control 
                                        id={item + "-betoltott"}
                                        type="number" 
                                        min={0}
                                        defaultValue={0}
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            }
                                        }}
                                        onChange={() => {
                                            let szervezettallas = document.getElementById(item + "-szervezett");
                                            let betoltottallas = document.getElementById(item + "-betoltott");
                                            let uresallas = document.getElementById(item + "-ures");
                                            uresallas.value = szervezettallas.value - betoltottallas.value;
                                            
                                            if (parseInt(uresallas.value) < 0) {
                                                uresallas.style.color = "red";
                                            } else {
                                                uresallas.style.color = "black";
                                            }
                                            
                                            let osszesB = 0;
                                            let gkvOsszB = 0;
                                            {allasok.map((item) => {
                                                osszesB += parseInt(document.getElementById(item + "-betoltott").value);
                                                return "";                                                
                                            })}
                                            gkvOsszB += parseInt(document.getElementById("mentőgépkocsivezető-betoltott").value);
                                            gkvOsszB += parseInt(document.getElementById("műszaki gondnok-betoltott").value);
                                            gkvOsszB += parseInt(document.getElementById("garázsmester-betoltott").value);
                                            
                                            this.setState({
                                                osszesBetoltott: osszesB,
                                                gkvOsszBetoltott: gkvOsszB
                                            });

                                            if (osszesB > osszesSzervezett) {
                                                document.getElementById("osszes-ures").style.color = "red";
                                            } else {
                                                document.getElementById("osszes-ures").style.color = "black";
                                            }

                                            if (gkvOsszB > gkvOsszSzervezett) {
                                                document.getElementById("GkvOsszes-ures").style.color = "red";
                                            } else {
                                                document.getElementById("GkvOsszes-ures").style.color = "black";
                                            }
                                        }}
                                    />
                                </Form.Group>                                
                            </Col>
                            <Col md={4} className="py-2">
                                <Form.Group>
                                    <Form.Label>
                                        {item.charAt(0).toUpperCase() + item.substring(1)} üres álláshely
                                    </Form.Label>
                                    <Form.Control
                                        readOnly
                                        plaintext 
                                        id={item + "-ures"}
                                        type="text"
                                        defaultValue={0}
                                    />
                                </Form.Group>                                
                            </Col>
                        </Row>
                    )
                })}
                <Row>
                    <Col md={4} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                <strong>Szervezett Gkv összesen</strong>
                            </Form.Label>
                            <Form.Control 
                                readOnly
                                plaintext
                                id={"GkvOsszes-szervezett"}
                                type="text" 
                                value={gkvOsszSzervezett}
                            />
                        </Form.Group>                                
                    </Col>
                    <Col md={4} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                <strong>Betöltött Gkv összesen</strong>
                            </Form.Label>
                            <Form.Control
                                readOnly
                                plaintext 
                                id={"GkvOsszes-betoltott"}
                                type="text" 
                                value={gkvOsszBetoltott}
                            />
                        </Form.Group>                                
                    </Col>
                    <Col md={4} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                <strong>Üres Gkv álláshely összesen</strong>
                            </Form.Label>
                            <Form.Control
                                readOnly
                                plaintext 
                                id={"GkvOsszes-ures"}
                                type="text"
                                value={gkvOsszSzervezett - gkvOsszBetoltott}
                            />
                        </Form.Group>                                
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                <strong>Szervezett álláshely összesen</strong>
                            </Form.Label>
                            <Form.Control 
                                readOnly
                                plaintext
                                id={"osszes-szervezett"}
                                type="text" 
                                value={osszesSzervezett}
                            />
                        </Form.Group>                                
                    </Col>
                    <Col md={4} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                <strong>Betöltött álláshely összesen</strong>
                            </Form.Label>
                            <Form.Control
                                readOnly
                                plaintext 
                                id={"osszes-betoltott"}
                                type="text" 
                                value={osszesBetoltott}
                            />
                        </Form.Group>                                
                    </Col>
                    <Col md={4} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                <strong>Üres álláshely összesen</strong>
                            </Form.Label>
                            <Form.Control
                                readOnly
                                plaintext 
                                id={"osszes-ures"}
                                type="text"
                                value={osszesSzervezett - osszesBetoltott}
                            />
                        </Form.Group>                                
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col lg={12} className="justify-content-center d-flex mb-3">
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                            Álláshelyek felvitele
                        </Button>
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                            Álláshelyek listázása
                        </Button>
                    </Col>
                    <Col lg={12} className="justify-content-center d-flex mb-3">
                        {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt álláshelyeket.*/}                           
                        {megyek.map((megye) => {
                            return(
                                <Button variant="info" className="text-white text-uppercase fw-bold mx-2" key={megye}>
                                    {megye} megye adatai
                                </Button>
                            )
                        })}                                
                    </Col>                    
                </Row>
            </Form>
        )
    }
}

export default Allashely;