import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { megyek } from "../../../Utils/data.js";

class BelsoEllenorzes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teljesult: "",
            modositasHatarido: "",
            modositasFeladat: ""
        };
    }

    render() {
        const {
            teljesult,
            modositasHatarido,
            modositasFeladat
        }=this.state;

        return(
            <Form className="p-3 min-vh-100">
                <h2 className="text-center text-decoration-underline p-2">Belső ellenőrzés adatai</h2>
                <Row>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Ellenőrzés azonosítója
                            </Form.Label>
                            <Form.Control type="text" />   
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Ellenőrzés iktatószáma
                            </Form.Label>
                            <Form.Control type="text" />   
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>                                                   
                            <Form.Label>
                                Az ellenőrzött szerv, illetve szervezeti egység
                            </Form.Label>
                            <Form.Select defaultValue="">
                                <option value="" disabled>Válasszon szervet / szervezeti egységet!</option>
                                {/*A szervezeti egységek listáját az adatbázisban rözített adatokkal gondoltam feltölteni*/}
                                <option value="pelda">Példa Szervezeti Egység</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Az ellenőrzés tárgya (címe)
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Intézkedést igénylő megállapítás
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Ellenőrzési javaslat  
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                A javaslat alapján előírt intézkedés
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                A vonatkozó intézkedési terv iktatószáma
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                A vonatkozó intézkedési terv jóváhagyásának időpontja
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Az intézkedés felelőse (beosztás)
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Az intézkedés felelőse (szervezeti egység)
                            </Form.Label>
                            <Form.Select defaultValue="">
                                <option value="" disabled>Válasszon szervet / szervezeti egységet!</option>
                                {/*A szervezeti egységek listáját az adatbázisban rözített adatokkal gondoltam feltölteni*/}
                                <option value="pelda">Példa Szervezeti Egység</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Az intézkedés végrehajtásának határideje
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group
                            onChange={(e) => {
                                this.setState({
                                    modositasHatarido: e.target.value
                                });
                            }}
                        >
                            <Form.Label>
                                Határidő módosítás
                            </Form.Label>
                            <Form.Check 
                                type="radio" 
                                name="hataridoMod"
                                label="igen"
                                value="t_igen"                                
                            />
                            <Form.Control 
                                type="date"
                                id="t_datum"
                                disabled={modositasHatarido === "t_igen" ? false : true}
                            />
                            <Form.Check 
                                type="radio" 
                                name="hataridoMod"
                                label="nem"
                                value="t_nem"
                                defaultChecked
                                className="mt-2"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group
                            onChange={(e) => {
                                this.setState({
                                    modositasFeladat: e.target.value
                                });
                            }}
                        >
                            <Form.Label>
                                Feladat módosítás
                            </Form.Label>
                            <Form.Check 
                                type="radio" 
                                name="feladatMod"
                                label="igen"
                                value="t_igen"                                
                            />
                            <Form.Control 
                                as="textarea"
                                row={2}
                                id="t_datum"
                                disabled={modositasFeladat === "t_igen" ? false : true}
                            />
                            <Form.Check 
                                type="radio" 
                                name="feladatMod"
                                label="nem"
                                value="t_nem"
                                defaultChecked
                                className="mt-2"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group
                            onChange={(e) => {
                                this.setState({
                                    teljesult: e.target.value
                                });
                            }}
                        >
                            <Form.Label>
                                Az intézkedés teljesítése
                            </Form.Label>
                            <Form.Check 
                                type="radio" 
                                name="teljesites"
                                label="igen"
                                value="t_igen"                                
                            />
                            <Form.Control 
                                type="date"
                                id="t_datum"
                                disabled={teljesult === "t_igen" ? false : true}
                            />
                            <Form.Check 
                                type="radio" 
                                name="teljesites"
                                label="nem"
                                value="t_nem"
                                defaultChecked
                                className="mt-2"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Megtett intézkedések rövid leírása
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                A határidőben végre nem hajtott intézkedések oka
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                A nem teljesülés kapcsán tett lépések
                            </Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3}
                                disabled={teljesult !== "t_igen" ? false : true}
                                />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Megjegyzés
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col lg={12} className="justify-content-center d-flex mb-3">
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                            Belső ellenőrzés felvitele
                        </Button>
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                            Belső ellenőrzések listázása
                        </Button>
                    </Col>
                    <Col lg={12} className="justify-content-center d-flex mb-3">
                        {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt ellenőrzéseket.*/}                           
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

export default BelsoEllenorzes;