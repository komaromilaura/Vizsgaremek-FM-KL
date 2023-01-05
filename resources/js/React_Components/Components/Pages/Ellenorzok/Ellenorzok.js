import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Row, Table } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";

function Ellenorzo (props) {
    const [ellenorok, setEllenorok] = useState([]);
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
    const kontakt_szemely = useRef(); 

    const clearForm = () => {
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
        kontakt_szemely.current.value = "";
	}

    const sendForm = () => {
        if (mode === "create") {
            axios.post('/api/ellenor', {
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
                kontakt_szemely: kontakt_szemely.current.value,
            }).then(data => {
                if (data.status === 201){
                    clearForm();
                    setSuccess(true);
                    getEllenorok();
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
            axios.put('/api/ellenor/' + ID.current.value,{               
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
                kontakt_szemely: kontakt_szemely.current.value,
            }).then(data => {
                if (data.status === 200){
                    clearForm();
                    setModified(true);
                    getEllenorok();
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

    const getEllenorok = async() => {
        const response = await axios.get('/api/ellenor');
        if (response.status === 200) {
            setEllenorok(response.data);
        }
    }

    useEffect(() => {
        getEllenorok();
    }, []);

    const updateEllenor = (id) => {
        const ellenorData = ellenorok.find(ellenor => ellenor.ID === id);
        setMode("update");
        resetSucess();             
        ID.current.value = ellenorData.ID;
        nev.current.value = ellenorData.nev;
        ir_szam.current.value = ellenorData.ir_szam;
        varos.current.value = ellenorData.varos;
        kozterulet.current.value = ellenorData.kozterulet;
        kozt_jellege.current.value = ellenorData.kozt_jellege;
        hazszam.current.value = ellenorData.hazszam;
        epulet_emelet_ajto.current.value = ellenorData.epulet_emelet_ajto;
        helyrazi_szam.current.value = ellenorData.helyrazi_szam;
        email.current.value = ellenorData.email;
        telefon.current.value = ellenorData.telefon;
        kontakt_szemely.current.value = ellenorData.kontakt_szemely;        
    }

    const cancelUpdate = () => {
        setMode("create")
        clearForm();
    }

    const deleteEllenor = (id) => {
        axios.delete("/api/ellenor/"+id)
        .then(data => {
            if (data.status === 204){
                setDeleted(true);
                getEllenorok();
                resetSucess();
            }
        }).catch(error => {
            if (error.response.status === 500) { 
                const errors = error.response.data.message;                
                console.log(errors);
                alert("A ellenőr törlése sikertelen.")
            }            
        })
    }

    return(
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Ellenőrzést végző szerv adatai</h2>
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
                            id="irszamE"                                 
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
                        <Form.Control type="text" ref={varos} onChange={resetSucess} />
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
                        <Form.Control type="text" ref={kozt_jellege} onChange={resetSucess} />
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
                            Kontakt személy
                        </Form.Label>
                        <Form.Control type="text" ref={kontakt_szemely} onChange={resetSucess} />
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
                         Ellenőrzést végző szerv {mode === "create" ? "felvitele" : "módosítása"}
                    </Button>
                    {mode === 'update' && (
                        <Button 
                            variant="warning" 
                            className="text-white text-uppercase fw-bold mx-2"
                            onClick={cancelUpdate}
                        >
                            Mégsem
                        </Button>
                    )}
                    <Button variant="info" >
                        <a href="ellenor/file-export" className="text-white text-uppercase fw-bold mx-3 text-decoration-none">
                            Adatok exportálása
                        </a>
                    </Button>  
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
                            <th>Kontakt személy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ellenorok && ellenorok.map((ellenor) => {
                            return(
                                <tr className="align-middle" key={ellenor.ID}>
                                    <td>
                                        <PencilFill onClick={() => {updateEllenor(ellenor.ID)}} style={{cursor: "pointer"}}/>
                                        <Trash3Fill onClick={() => {deleteEllenor(ellenor.ID)}} style={{cursor: "pointer"}}/>
                                    </td>
                                    <td>{ellenor.ID}</td>
                                    <td>{ellenor.nev}</td>
                                    <td>{ellenor.ir_szam}</td>
                                    <td>{ellenor.varos}</td>
                                    <td>{ellenor.kozterulet}</td>
                                    <td>{ellenor.kozt_jellege}</td>
                                    <td>{ellenor.hazszam}</td>
                                    <td>{ellenor.epulet_emelet_ajto}</td>
                                    <td>{ellenor.helyrazi_szam}</td>
                                    <td>{ellenor.email}</td>
                                    <td>{ellenor.telefon}</td>
                                    <td>{ellenor.kontakt_szemely}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>          
        </Form>
    )
}

export default Ellenorzo;