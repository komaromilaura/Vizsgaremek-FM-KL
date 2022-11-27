import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

class Ellenorzo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Form className="p-3 min-vh-100">
                <h2 className="text-center text-decoration-underline p-2">Ellenőrzést végző szerv adatai</h2>
                <Row>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Név
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Irányítószám
                            </Form.Label>
                            <Form.Control
                                id="irszamE"                                 
                                type="text" 
                                maxLength={4}
                                minLength={4}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                }}
                                onBlur={(event) => {
                                    const item=document.getElementById("irszamE");
                                    if (event.target.value.length !== 4) {
                                        alert("Hibás irányítószám!");
                                        item.style.background="red";
                                    } else {
                                        item.style.background="white";
                                    }
                                }}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Város
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Közterület
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Közterület jellege
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Házszám
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Épület, emelet, ajtó
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Helyrajzi szám
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Telefonszám
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Kontakt személy
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col lg={12} className="justify-content-center d-flex">
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-3">
                            Ellenőrzést végző szerv felvitele
                        </Button>
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-3">
                            Ellenőrzést végző szervek listázása
                        </Button>
                        {/*Adatbázisból xls / csv / pdf - be ?? kilistázza a felvitt ellenőrző szerveket.*/}
                    </Col>                    
                </Row>
            </Form>
        )
    }
}

export default Ellenorzo;