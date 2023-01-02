import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Row, Table } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";

function Partner(props){
    const [partnerek, setParnerek] = useState([]);
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [modified, setModified] = useState(false);
    const [mode, setMode] = useState('create');

    const ID = useRef();
    const nev = useRef();
    const ir_szam = useRef();
    const varos = useRef();
    const kozterulet = useRef();
    const kozt_jellege = useRef();
    const hazszam = useRef();
    const epulet_emelet_ajto = useRef();
    const helyrazi_szam = useRef();
    const email = useRef();
    const telefon = useRef();
    const adoszam = useRef(); 
    
    const sendForm = () => {
        if (mode === "create") {
            axios.post('/api/partner', {
                nev: nev.current.value,
                ir_szam: ir_szam.current.value,
                varos: varos.current.value,
                kozterulet: kozterulet.current.value,
                kozt_jellege: kozt_jellege.current.value,
                hazszam: hazszam.current.value,
                epulet_emelet_ajto: epulet_emelet_ajto.current.value,
                helyrazi_szam: helyrazi_szam.current.value,
                email: email.current.value,
                telefon: telefon.current.value,
                adoszam: adoszam.current.value,
            }).then(data => {
                if (data.status === 201){
                    ID.current.value = "";
                    nev.current.value = "";
                    ir_szam.current.value = "";
                    varos.current.value = "";
                    kozterulet.current.value = "";
                    kozt_jellege.current.value = "";
                    hazszam.current.value = "";
                    epulet_emelet_ajto.current.value = "";
                    helyrazi_szam.current.value = "";
                    email.current.value = "";
                    telefon.current.value = "";
                    adoszam.current.value = "";
                    setSuccess(true);
                    getPartnerek();
                }
            }).catch(error => {
                if (error.response.status === 422) { 
                    const errors = error.response.data.errors;
                    let errorsString = "";
                    Object.keys(errors).map((err) => {                   
                        errorsString += errors[err].join(" ") + "\n";
                    })
                    alert(errorsString);
                }            
            })
        }else{
            axios.put('/api/partner/' + ID.current.value,{               
                nev: nev.current.value,
                ir_szam: ir_szam.current.value,
                varos: varos.current.value,
                kozterulet: kozterulet.current.value,
                kozt_jellege: kozt_jellege.current.value,
                hazszam: hazszam.current.value,
                epulet_emelet_ajto: epulet_emelet_ajto.current.value,
                helyrazi_szam: helyrazi_szam.current.value,
                email: email.current.value,
                telefon: telefon.current.value,
                adoszam: adoszam.current.value,
            }).then(data => {
                if (data.status === 200){
                    ID.current.value = "";
                    nev.current.value = "";
                    ir_szam.current.value = "";
                    varos.current.value = "";
                    kozterulet.current.value = "";
                    kozt_jellege.current.value = "";
                    hazszam.current.value = "";
                    epulet_emelet_ajto.current.value = "";
                    helyrazi_szam.current.value = "";
                    email.current.value = "";
                    telefon.current.value = "";
                    adoszam.current.value = "";
                    setModified(true);
                    getPartnerek();
                    setMode("create");
                }
            }).catch(error => {
                if (error.response.status === 422) { 
                    const errors = error.response.data.errors;
                    let errorsString = "";
                    Object.keys(errors).map((err) => {                   
                        errorsString += errors[err].join(" ") + "\n";
                    })
                    alert(errorsString);
                }            
            })
        }
    }

    const resetSucess = () => {
        if (success){
            setSuccess(false);
        }
        if (deleted){
            setDeleted(false);
        }
        if (modified){
            setModified(false);
        }
    }

    const getPartnerek = async() => {
        const response = await axios.get('/api/partner');
        if (response.status === 200) {
            setParnerek(response.data);
        }
    }

    useEffect(() => {
        getPartnerek();
    }, []);

    const updatePartner = (id) => {
        const partnerData = partnerek.find(partner => partner.ID === id);
        setMode("update");
        resetSucess();             
        ID.current.value = partnerData.ID;
        nev.current.value = partnerData.nev;
        ir_szam.current.value = partnerData.ir_szam;
        varos.current.value = partnerData.varos;
        kozterulet.current.value = partnerData.kozterulet;
        kozt_jellege.current.value = partnerData.kozt_jellege;
        hazszam.current.value = partnerData.hazszam;
        epulet_emelet_ajto.current.value = partnerData.epulet_emelet_ajto;
        helyrazi_szam.current.value = partnerData.helyrazi_szam;
        email.current.value = partnerData.email;
        telefon.current.value = partnerData.telefon;
        adoszam.current.value = partnerData.adoszam;        
    }

    const deletePartner = (id) => {
        axios.delete("/api/partner/"+id)
        .then(data => {
            if (data.status === 204){
                setDeleted(true);
                getPartnerek();
                resetSucess();
            }
        }).catch(error => {
            if (error.response.status === 500) { 
                const errors = error.response.data.message;                
                console.log(errors);
                alert("A partner törlése sikertelen.")
            }            
        })
    }
   
    return(
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Partner adatai</h2>
            <Row>
                <Col lg={4} md={6} className="py-2">
                    <Form.Control type="hidden" ref={ID} />
                    <Form.Group>
                        <Form.Label>
                            Név
                        </Form.Label>
                        <Form.Control type="text" ref={nev} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Irányítószám
                        </Form.Label>
                        <Form.Control
                            id="irszamP"                                 
                            type="text" 
                            maxLength={4}
                            minLength={4}
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                                }
                            }
                            onBlur={(event) => {
                                const item=document.getElementById("irszamP");
                                if (event.target.value.length !== 4) {
                                    alert("Hibás irányítószám!");
                                    item.style.background="red";
                                } else {
                                    item.style.background="white";
                                }
                            }}
                            ref={ir_szam}
                            onChange={resetSucess}
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Város
                        </Form.Label>
                        <Form.Control type="text" ref={varos} onChange={resetSucess}/>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Közterület
                        </Form.Label>
                        <Form.Control type="text" ref={kozterulet} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Közterület jellege
                        </Form.Label>
                        <Form.Control type="text" ref={kozt_jellege} onChange={resetSucess}/>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Házszám
                        </Form.Label>
                        <Form.Control type="text" ref={hazszam} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Épület, emelet, ajtó
                        </Form.Label>
                        <Form.Control type="text" ref={epulet_emelet_ajto} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Helyrajzi szám
                        </Form.Label>
                        <Form.Control type="text" ref={helyrazi_szam} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control type="email" ref={email} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Telefonszám
                        </Form.Label>
                        <Form.Control type="text" ref={telefon} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Adószám
                        </Form.Label>
                        <Form.Control
                            id="adoszamP"                                 
                            type="text" 
                            maxLength={13}
                            minLength={13}
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9-]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            onBlur={(event) => {
                                const item=document.getElementById("adoszamP");
                                if (event.target.value.length !== 13) {
                                    alert("Hibás adószám!");
                                    item.style.background="red";
                                } else if (item.value[8] !== '-' || item.value[10] !== "-") {
                                    alert("Hibás adószám!");
                                    item.style.background="red";                                    
                                } else if (item.value[0] === "-" || item.value[1] === "-" || item.value[2] === "-" || 
                                item.value[3] === "-" || item.value[4] === "-" || item.value[5] === "-" || 
                                item.value[6] === "-" || item.value[7] === "-" || item.value[9] === "-" || 
                                item.value[11] === "-" || item.value[12] === "-" ) {
                                    alert("Hibás adószám!");
                                    item.style.background="red";  
                                }
                                else{
                                    item.style.background="white";
                                }
                            }}
                            ref={adoszam}
                            onChange={resetSucess}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="py-4">
                <Col lg={12} className="justify-content-center d-flex">
                    <Button 
                        variant="info" 
                        className="text-white text-uppercase fw-bold mx-3"
                        onClick={sendForm}
                    >
                        Partner {mode === "create" ? "felvitele" : "módosítása"}
                    </Button>
                    <Button variant="info" className="text-white text-uppercase fw-bold mx-3">
                        Partnerek listázása
                    </Button>
                    {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt partnereket.*/}
                </Col>
                {success && (
                    <Alert variant="success" className="mt-3">
                        Sikeres felvitel!
                    </Alert>
                )}
                {deleted && (
                    <Alert variant="danger" className="mt-3">
                        Sikeres törlés!
                    </Alert>
                )}
                {modified && (
                    <Alert variant="primary" className="mt-3">
                        Sikeres módosítás!
                    </Alert>
                )}                     
            </Row>
            <Row className="py-4">
                <Table striped bordered hover responsive className="w-100 border-secondary">
                    <thead>
                        <tr className="align-middle text-center">
                            <th></th>
                            <th>ID</th>
                            <th>Név</th>
                            <th>Irányítószám</th>
                            <th>Város</th>
                            <th>Közterület</th>
                            <th>Közterület jellege</th>
                            <th>Házszám</th>
                            <th>Épület, emelet, ajtó</th>
                            <th>Helyrajzi szám</th>
                            <th>Email</th>
                            <th>Telefonszám</th>
                            <th>Adószám</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partnerek && partnerek.map((partner) => {
                            return(
                                <tr className="align-middle" key={partner.ID}>
                                    <td>
                                        <PencilFill onClick={() => {updatePartner(partner.ID)}} style={{cursor: "pointer"}}/>
                                        <Trash3Fill onClick={() => {deletePartner(partner.ID)}} style={{cursor: "pointer"}}/>
                                    </td>
                                    <td>{partner.ID}</td>
                                    <td>{partner.nev}</td>
                                    <td>{partner.ir_szam}</td>
                                    <td>{partner.varos}</td>
                                    <td>{partner.kozterulet}</td>
                                    <td>{partner.kozt_jellege}</td>
                                    <td>{partner.hazszam}</td>
                                    <td>{partner.epulet_emelet_ajto}</td>
                                    <td>{partner.helyrazi_szam}</td>
                                    <td>{partner.email}</td>
                                    <td>{partner.telefon}</td>
                                    <td>{partner.adoszam}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>          
        </Form>
        
    )
}


export default Partner;