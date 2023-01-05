import { Button, Col, Form, Row } from "react-bootstrap";
import { megyek } from "../../../Utils/data.js";

function Tulora(props) {
        
    const szamol = (min, max) => {
        let options = [];

        for (let i = min; i <= max; i++){
            options.push(<option value={i} key={i}>{i}</option>);
        }
        return options;
    }


    return(    
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Túlórák</h2>
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
                        <Form.Select defaultValue="2023">
                            {szamol(2000, 2050)}                               
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Hónap
                        </Form.Label>
                        <Form.Select defaultValue="1">
                            {szamol(1, 12)}                      
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Mentési feladatok miatti túlóra
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
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Egyéb ( továbbképzés, projekt, stb) túlóra 
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
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <h2 className="text-center text-decoration-underline p-4">Túlóra/fő (munkaköri csoportos)</h2>        
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Orvos/mentőtiszt
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
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Ápoló
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
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Mentésirányításban dolgozó
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
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Mentőgépkocsivezető
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
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Betegszállítás irányításban dolgozó
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
                        />
                    </Form.Group>
                </Col>                    
            </Row>
            <Row className="py-4">
                <Col lg={12} className="justify-content-center d-flex mb-3">
                    <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                        Túlórák felvitele
                    </Button>
                    <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                        Túlórák listázása
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

export default Tulora;