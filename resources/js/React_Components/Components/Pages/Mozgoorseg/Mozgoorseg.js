import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {megyek} from "../../../Utils/data.js";

function Mozgoorseg(props) {
    const [bevetel, setBevetel] = useState();
    const [kiadas, setKiadas] = useState();
    const [maradvany, setMaradvany] = useState();

    useEffect(() => {
        setMaradvany(bevetel - kiadas);
    }, [bevetel, kiadas]);
        
    return(
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Mozgóőrség</h2>
            <Row>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Megrendelő neve 
                        </Form.Label>
                        <Form.Select defaultValue="">
                            <option value="" disabled>Válasszon megrendelőt!</option>
                            {/*A megrendelők listáját az adatbázisba felvitt partnerekkel gondoltam feltölteni.
                                Szerinted a megrendelőket felvihetjük a partner táblába vagy a megrendelőknek is
                                csináljak külön felviteli lehetőséget és külön táblájuk lesz az adatbáziban? 
                                Gondolom mindkét esetben cégekről van szó.*/}
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
                            Szerződésszám
                        </Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Rendezvény elnevezése
                        </Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Rendezvény/esemény ideje
                        </Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Rendezvény/esemény helye
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
                            ROKO
                        </Form.Label>
                        <Form.Control 
                            type="number" 
                            min={0}
                            defaultValue={0}
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
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
                            Eset
                        </Form.Label>
                        <Form.Control 
                            type="number" 
                            min={0}
                            defaultValue={0}
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
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
                            Mentőgk.
                        </Form.Label>
                        <Form.Control 
                            type="number" 
                            min={0}
                            defaultValue={0}
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
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
                            Gyalogőrség
                        </Form.Label>
                        <Form.Control 
                            type="number" 
                            min={0}
                            defaultValue={0}
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
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
                            Bevétel
                        </Form.Label>
                        <Form.Control 
                            type="number" 
                            min={0}
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            defaultValue={bevetel}
                            onBlur={(e) => {
                               setBevetel(e.target.value);
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Költség
                        </Form.Label>
                        <Form.Control 
                            type="number" 
                            min={0}
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            defaultValue={kiadas}
                            onBlur={(e) => {
                                setKiadas(e.target.value);
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Maradvány
                        </Form.Label>
                        <Form.Control 
                            readOnly 
                            plaintext 
                            type="text"
                            value={maradvany || 0}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="py-4">
                <Col lg={12} className="justify-content-center d-flex mb-3">
                    <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                        Mozgóőrség felvitele
                    </Button>
                    <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                        Mozgóőrségek listázása
                    </Button>
                </Col>
                <Col lg={12} className="justify-content-center d-flex mb-3">
                    {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt mozgóőrségeket.*/}                           
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

export default Mozgoorseg;