import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

class Dolgozok extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Form className="p-3 min-vh-100">
                <h2 className="text-center text-decoration-underline p-2">Dolgozó adatai</h2>
                <Row>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Vezetéknév
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Keresztnév
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                IVIR
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Törzsszám
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Adóazonosító jel
                            </Form.Label>
                            <Form.Control
                                id="adoazon"                                 
                                type="text" 
                                maxLength={10}
                                minLength={10}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                }}
                                onBlur={(event) => {
                                    const val = event.target.value;
                                    const item=document.getElementById("adoazon");
                                    if (val.length !== 10 || val[0] !== "8") {
                                        alert("Hibás adóazonosító jel! Az adóazonosító jel 10 számból áll " +
                                        "és mindig 8-cal kezdődik.");
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
                                Céges email
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
                                Munkakör
                            </Form.Label>
                            <Form.Select defaultValue="">
                                <option value="" disabled>Válasszon munkakört!</option>
                                {/*A munkakörök listáját az adatbázisba rögzített munkakörökből gondoltam feltölteni.*/}
                                <option value="pelda">Példa munkakör</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    
                </Row>
                <Row className="py-4">
                    <Col lg={12} className="justify-content-center d-flex">
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-3">
                            Dolgozó felvitele
                        </Button>
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-3">
                            Dolgozók listázása
                        </Button>
                        {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt partnereket.*/}
                    </Col>                    
                </Row>
            </Form>
        )
    }
}

export default Dolgozok;