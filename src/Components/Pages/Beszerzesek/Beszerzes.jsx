import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { megyek } from "../../../Utils/data.js";

class Beszerzes extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Form className="p-3 min-vh-100">
                <h2 className="text-center text-decoration-underline p-2">Beszerzések adatai</h2>
                <Row>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Partner
                            </Form.Label>
                            <Form.Select defaultValue="">
                                <option value="" disabled>Válasszon partnert!</option>
                                {/*A partnerek listáját az adatbázisba felvitt partnerekkel gondoltam feltölteni*/}
                                <option value="pelda">Példa Kft.</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={8} md={6} className="py-2 d-flex align-items-end">
                        <Form.Group>
                            <Link to="/partner">
                                <Button variant="info" className="text-white text-uppercase fw-bold">
                                    Új partner felvitele
                                </Button>
                            </Link>
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Megrendelő száma
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Megrendelő aláírásra továbbítva
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Aláírt megrendelő beérkezése
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Díjbekérő továbbítása
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Munkalap kiállítása
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Számla kiállítása
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Számla továbbítása pénzügynek/utalásra
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col lg={12} className="justify-content-center d-flex mb-3">
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                            Beszerzés felvitele
                        </Button>
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                            Beszerzések listázása
                        </Button>
                    </Col>
                    <Col lg={12} className="justify-content-center d-flex mb-3">
                        {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt beszerzéseket.*/}                           
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

export default Beszerzes;