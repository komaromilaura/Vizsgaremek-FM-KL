import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Row, Table } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";

function Dolgozok (props) {
    const [dolgozok, setDolgozok] = useState([]);
    const [allomasok, setAllomasok] = useState([]);
    const [munkakorok, setMunkakorok] = useState([]);
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [modified, setModified] = useState(false);
    const [mode, setMode] = useState('create');
    const [originalIVIR, setOriginalIVIR] = useState("");
    
    const vezetek_nev = useRef();
    const kereszt_nev = useRef();
    const IVIR = useRef();
    const torzsszam = useRef();
    const adoazonosito = useRef();
    const ir_szam = useRef();
    const varos = useRef();
    const kozterulet = useRef();
    const kozterulet_jellege = useRef();
    const hazszam = useRef();
    const epulet_emelet_ajto = useRef();
    const ceges_email = useRef();
    const telefon = useRef();
    const allomas = useRef();
    const munkakorID = useRef();

    const clearForm = () => {
        vezetek_nev.current.value = ""
        kereszt_nev.current.value = ""
        IVIR.current.value = ""
        torzsszam.current.value = ""
        adoazonosito.current.value = ""
        ir_szam.current.value = ""
        varos.current.value = ""
        kozterulet.current.value = ""
        kozterulet_jellege.current.value = ""
        hazszam.current.value = ""
        epulet_emelet_ajto.current.value = ""
        ceges_email.current.value = ""
        telefon.current.value = ""
        allomas.current.value = "-1"
        munkakorID.current.value = "-1"
    }

    const sendForm = () => {
        if (mode === "create") {                        
            axios.post('/api/dolgozo', {
                vezetek_nev: vezetek_nev.current.value,
                kereszt_nev: kereszt_nev.current.value,
                IVIR: IVIR.current.value,
                torzsszam: torzsszam.current.value,
                adoazonosito: adoazonosito.current.value,
                ir_szam: ir_szam.current.value,
                varos: varos.current.value,
                kozterulet: kozterulet.current.value,
                kozterulet_jellege: kozterulet_jellege.current.value,
                hazszam: hazszam.current.value,
                epulet_emelet_ajto: epulet_emelet_ajto.current.value,
                ceges_email: ceges_email.current.value,
                telefon: telefon.current.value,
                allomas: allomas.current.value,
                munkakorID: munkakorID.current.value,
            }).then(data => {
                if (data.status === 201){
                    clearForm();
                    setSuccess(true);
                    getDolgozok();
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
            axios.put('/api/dolgozo/'+originalIVIR,{               
                vezetek_nev: vezetek_nev.current.value,
                kereszt_nev: kereszt_nev.current.value,
                IVIR: IVIR.current.value,
                torzsszam: torzsszam.current.value,
                adoazonosito: adoazonosito.current.value,
                ir_szam: ir_szam.current.value,
                varos: varos.current.value,
                kozterulet: kozterulet.current.value,
                kozterulet_jellege: kozterulet_jellege.current.value,
                hazszam: hazszam.current.value,
                epulet_emelet_ajto: epulet_emelet_ajto.current.value,
                ceges_email: ceges_email.current.value,
                telefon: telefon.current.value,
                allomas: allomas.current.value,
                munkakorID: munkakorID.current.value,
            }).then(data => {
                if (data.status === 200){
                    clearForm();
                    setModified(true);
                    getDolgozok();
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

    const getDolgozok = async () => {
        const response = await axios.get('/api/dolgozo');
        if (response.status === 200) {
            setDolgozok(response.data);
        }
    }

    useEffect(() => {
        getDolgozok();
    }, []);

    const getAllomasok = async() => {
        const response = await axios.get('/api/allomas');
        if (response.status === 200) {
            setAllomasok(response.data);
        }
    }

    useEffect(() => {
        getAllomasok();
    }, []);

    const getMunkakorok = async() => {
        const response = await axios.get('/api/munkakor');
        if (response.status === 200) {
            setMunkakorok(response.data);
        }
    }

    useEffect(() => {
        getMunkakorok();
    }, []);

    const updateDolgozo = (ivir) => {
        const dolgozoData = dolgozok.find(dolgozo => dolgozo.IVIR === ivir);
        setMode("update");
        resetSucess();
        setOriginalIVIR(ivir);        
        vezetek_nev.current.value = dolgozoData.vezetek_nev;
        kereszt_nev.current.value = dolgozoData.kereszt_nev;
        IVIR.current.value = dolgozoData.IVIR;
        torzsszam.current.value = dolgozoData.torzsszam;
        adoazonosito.current.value = dolgozoData.adoazonosito;
        ir_szam.current.value = dolgozoData.ir_szam;
        varos.current.value = dolgozoData.varos;
        kozterulet.current.value = dolgozoData.kozterulet;
        kozterulet_jellege.current.value = dolgozoData.kozterulet_jellege;
        hazszam.current.value = dolgozoData.hazszam;
        epulet_emelet_ajto.current.value = dolgozoData.epulet_emelet_ajto;
        ceges_email.current.value = dolgozoData.ceges_email;
        telefon.current.value = dolgozoData.telefon;
        allomas.current.value = dolgozoData.allomas.nev;
        munkakorID.current.value = dolgozoData.munkakorID;
    }

    const cancelUpdate = () => {
        setMode("create")
        clearForm();
    }

    const deleteDolgozo = (ivir) => {
        axios.delete("/api/dolgozo/"+ivir)
        .then(data => {
            if (data.status === 204){
                setDeleted(true);
                getDolgozok();
                resetSucess();
            }
        }).catch(error => {
            if (error.response.status === 500) { 
                const errors = error.response.data.message;                
                console.log(errors);
                alert("A dolgozó törlése sikertelen.")
            }            
        })
    }

    return(
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Dolgozó adatai</h2>
            <Row>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Vezetéknév
                        </Form.Label>
                        <Form.Control type="text" ref={vezetek_nev} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Keresztnév
                        </Form.Label>
                        <Form.Control type="text" ref={kereszt_nev} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            IVIR
                        </Form.Label>
                        <Form.Control 
                            id="ivirSzam"                                 
                            type="text" 
                            maxLength={6}
                            minLength={6}
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            onBlur={(event) => {
                                const val = event.target.value;
                                const item=document.getElementById("ivirSzam");
                                if (val.length !== 6) {
                                    alert("Hibás IVIR! Az IVIR-nek 6 számból kell állnia!");
                                    item.style.background="red";
                                } else {
                                    item.style.background="white";
                                }
                            }}
                            ref={IVIR} 
                            onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Törzsszám
                        </Form.Label>
                        <Form.Control 
                            type="text"
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }} 
                            ref={torzsszam} 
                            onChange={resetSucess} 
                        />
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
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
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
                            ref={adoazonosito} 
                            onChange={resetSucess} 
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
                        <Form.Control type="text" ref={kozterulet_jellege} onChange={resetSucess} />
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
                            Céges email
                        </Form.Label>
                        <Form.Control type="email" ref={ceges_email} onChange={resetSucess} />
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
                            Mentőállomás
                        </Form.Label>
                        <Form.Select defaultValue="-1" ref={allomas} onChange={resetSucess} >
                            <option value="-1" disabled>Válasszon mentőállomást!</option>
                            {allomasok && allomasok.map((allomas) => {
                                return(
                                    <option value={allomas.nev} key={allomas.nev}>
                                        {allomas.sorszam}. {allomas.nev}
                                    </option>
                                )
                            })}                           
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Munkakör
                        </Form.Label>
                        <Form.Select defaultValue="-1" ref={munkakorID} onChange={resetSucess} >
                            <option value="-1" disabled>Válasszon munkakört!</option>
                            {munkakorok && munkakorok.map((munkakor) => {
                                return(
                                    <option value={munkakor.ID} key={munkakor.ID}>
                                        {munkakor.ID}. {munkakor.munkakor}
                                    </option>
                                )
                            })}  
                        </Form.Select>
                    </Form.Group>
                </Col>
                
            </Row>
            <Row className="py-4">
                <Col lg={12} className="justify-content-center d-flex">
                    <Button 
                        variant="info" 
                        className="text-white text-uppercase fw-bold mx-2"
                        onClick={sendForm}
                    >
                        Dolgozó {mode === "create" ? "felvitele" : "módosítása"}
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
                    <Button variant="info" className="text-white text-uppercase fw-bold mx-3">
                        Dolgozók listázása
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
                            <th>Vezetéknév</th>
                            <th>Keresztnév</th>
                            <th>IVIR</th>
                            <th>Törzsszám</th>
                            <th>Adóazonosító jel</th>
                            <th>Irányítószám</th>
                            <th>Város</th>
                            <th>Közterület</th>
                            <th>Közterület jellege</th>
                            <th>Házszám</th>
                            <th>Épület, emelet, ajtó</th>
                            <th>Céges email</th>
                            <th>Telefonszám</th>
                            <th>Mentőállomás</th>
                            <th>Munkakör</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dolgozok && dolgozok.map((dolgozo) => {
                            return(
                                <tr className="align-middle" key={dolgozo.IVIR}>
                                    <td>
                                        <PencilFill onClick={() => {updateDolgozo(dolgozo.IVIR)}} style={{cursor: "pointer"}}/>
                                        <Trash3Fill onClick={() => {deleteDolgozo(dolgozo.IVIR)}} style={{cursor: "pointer"}}/>
                                    </td>
                                    <td>{dolgozo.vezetek_nev}</td>
                                    <td>{dolgozo.kereszt_nev}</td>
                                    <td>{dolgozo.IVIR}</td>
                                    <td>{dolgozo.torzsszam}</td>
                                    <td>{dolgozo.adoazonosito}</td>
                                    <td>{dolgozo.ir_szam}</td>
                                    <td>{dolgozo.varos}</td>
                                    <td>{dolgozo.kozterulet}</td>
                                    <td>{dolgozo.kozterulet_jellege}</td>
                                    <td>{dolgozo.hazszam}</td>
                                    <td>{dolgozo.epulet_emelet_ajto}</td>
                                    <td>{dolgozo.ceges_email}</td>
                                    <td>{dolgozo.telefon}</td>
                                    <td>{dolgozo.allomas.nev}</td>
                                    <td>{dolgozo.munkakor.munkakor}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>          
        </Form>
    )
}

export default Dolgozok;