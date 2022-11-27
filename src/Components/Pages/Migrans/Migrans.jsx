import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {megyek} from "../../../Utils/data.js";

class Migrans extends Component {
    constructor(props) {
        super(props)
    }

    szamol = (min, max) => {
        let options = [];

        for (let i = min; i <= max; i++){
            options.push(<option value={i} key={i}>{i}</option>);
        }
        return options;
    }

    render() {
        return(
            <Form className="p-3 min-vh-100">
                <h2 className="text-center text-decoration-underline p-2">Migránsellátás</h2>
                <Row>
                <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Megye
                            </Form.Label>
                            <Form.Select defaultValue="">
                                <option value="" disabled>Válasszon megyét!</option>
                                {/*A megyék listáját az adatbázisba rögzített megyékkel gondoltam feltölteni.*/}
                                <option value="pelda">Példa Megye</option>
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
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Ellátott migráns (fő)
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                min={0}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                }}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Megtett kilométer
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                min={0} 
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col lg={12} className="justify-content-center d-flex mb-3">
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                            Migránsellátás felvitele
                        </Button>
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                            Migránsellátások listázása
                        </Button>
                    </Col>
                    <Col lg={12} className="justify-content-center d-flex mb-3">
                        {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt migránsellátásokat.*/}                           
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

export default Migrans;