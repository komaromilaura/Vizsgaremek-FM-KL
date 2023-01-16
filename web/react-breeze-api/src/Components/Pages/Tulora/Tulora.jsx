import axios from "../../../api/axios_sajat";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Row,  Table  } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";

function Tulora(props) {
    const [tulorak, setTulorak] = useState([]);
    const [megyek, setMegyek] = useState([]);
    const [allomasok, setAllomasok] = useState([]);
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [modified, setModified] = useState(false);
    const [mode, setMode] = useState('create');

    const ID = useRef();
    const mentoallomas = useRef();
    const ev = useRef();
    const honap = useRef();
    const ment_fel_miatti_tulora = useRef();
    const egyeb_tulora = useRef();
    const orvos_mentotiszt = useRef();
    const apolo = useRef();
    const mentesiranyitasban_dolg = useRef();
    const mentogkvezeto = useRef();
    const betegszall_iranyitasban_dolg = useRef();

    const clearForm = () => {
        ID.current.value = "";
        mentoallomas.current.value = "-1";
        ev.current.value = "2023";
        honap.current.value = "1";
        ment_fel_miatti_tulora.current.value = 0;
        egyeb_tulora.current.value = 0;
        orvos_mentotiszt.current.value = 0;
        apolo.current.value = 0;
        mentesiranyitasban_dolg.current.value = 0;
        mentogkvezeto.current.value = 0;
        betegszall_iranyitasban_dolg.current.value = 0;
}

    const sendForm = () => {
        if (mode === "create") {                        
            axios.post('/api/tulora', {
                mentoallomas: mentoallomas.current.value,
                ev: ev.current.value,
                honap: honap.current.value,
                ment_fel_miatti_tulora: ment_fel_miatti_tulora.current.value,
                egyeb_tulora: egyeb_tulora.current.value,
                orvos_mentotiszt: orvos_mentotiszt.current.value,
                apolo: apolo.current.value,
                mentesiranyitasban_dolg: mentesiranyitasban_dolg.current.value,
                mentogkvezeto: mentogkvezeto.current.value,
                betegszall_iranyitasban_dolg: betegszall_iranyitasban_dolg.current.value,
            }).then(data => {
                if (data.status === 201){
                    clearForm();
                    setSuccess(true);
                    getTulora();
                }
            }).catch(error => {
                if (error.response.status === 422) { 
                    const errors = error.response.data.errors;
                    let errorsString = "";
                    Object.keys(errors).map((err) => {                   
                        errorsString += errors[err].join(" ") + "\n";
                    })
                    alert(errorsString);
                }else{
                    alert("Az adatok felvitele sikertelen.");
                }        
            })
        }else{
            axios.put('/api/tulora/'+ID.current.value,{               
                mentoallomas: mentoallomas.current.value,
                ev: ev.current.value,
                honap: honap.current.value,
                ment_fel_miatti_tulora: ment_fel_miatti_tulora.current.value,
                egyeb_tulora: egyeb_tulora.current.value,
                orvos_mentotiszt: orvos_mentotiszt.current.value,
                apolo: apolo.current.value,
                mentesiranyitasban_dolg: mentesiranyitasban_dolg.current.value,
                mentogkvezeto: mentogkvezeto.current.value,
                betegszall_iranyitasban_dolg: betegszall_iranyitasban_dolg.current.value,
            }).then(data => {
                if (data.status === 200){
                    clearForm();
                    setModified(true);
                    getTulora();
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
                }else{
                    alert("Az adatok felvitele sikertelen.");
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

    const getTulora = async () => {
        const response = await axios.get('/api/tulora');
        if (response.status === 200) {
            setTulorak(response.data);
        }
    }

    useEffect(() => {
        getTulora();
    }, []);

    const getMegyek = async() => {
        const response = await axios.get('/api/megye');
        if (response.status === 200) {
            setMegyek(response.data);
        }
    }

    useEffect(() => {
        getMegyek();
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

    const updateTulora = (id) => {
        const tuloraData = tulorak.find(tulora => tulora.ID === id);
        setMode("update");
        resetSucess();       
        ID.current.value = tuloraData.ID;
        mentoallomas.current.value = tuloraData.mentoallomas;
        ev.current.value = tuloraData.ev;
        honap.current.value = tuloraData.honap;
        ment_fel_miatti_tulora.current.value = tuloraData.ment_fel_miatti_tulora;
        egyeb_tulora.current.value = tuloraData.egyeb_tulora;     
        orvos_mentotiszt.current.value = tuloraData.orvos_mentotiszt;     
        apolo.current.value = tuloraData.apolo;     
        mentesiranyitasban_dolg.current.value = tuloraData.mentesiranyitasban_dolg;     
        mentogkvezeto.current.value = tuloraData.mentogkvezeto;     
        betegszall_iranyitasban_dolg.current.value = tuloraData.betegszall_iranyitasban_dolg;     
    }

    const cancelUpdate = () => {
        setMode("create")
        clearForm();
    }

    const deleteTulora = (id) => {
        axios.delete("/api/tulora/"+id)
        .then(data => {
            if (data.status === 204){
                setDeleted(true);
                getTulora();
                resetSucess();
                setMode("create");
            }
        }).catch(error => {
            if (error.response.status === 500) { 
                const errors = error.response.data.message;                
                console.log(errors);
                alert("A kiválasztott adatok törlése sikertelen.")
            }            
        })
    }
        
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
                    <Form.Control type="hidden" ref={ID} />
                    <Form.Group>
                        <Form.Label>
                            Mentőállomás
                        </Form.Label>
                        <Form.Select defaultValue="-1" ref={mentoallomas} onChange={resetSucess} >
                            <option value="-1" disabled>Válasszon egy mentőállomást!</option>
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
                            Év
                        </Form.Label>
                        <Form.Select defaultValue="2023" ref={ev} onChange={resetSucess} >
                            {szamol(2000, 2050)}                               
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Hónap
                        </Form.Label>
                        <Form.Select defaultValue="1" ref={honap} onChange={resetSucess} >
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
                            step="0.01"
                            min={0}
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9,]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            ref={ment_fel_miatti_tulora}
                            onChange={resetSucess} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Egyéb (továbbképzés, projekt, stb) túlóra 
                        </Form.Label>
                        <Form.Control 
                            type="number" 
                            step="0.01"
                            min={0} 
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9,]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            ref={egyeb_tulora}
                            onChange={resetSucess} 
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
                            step="0.01" 
                            min={0} 
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9,]/.test(event.key)) {
                                    event.preventDefault();
                                }                                
                            }}
                            ref={orvos_mentotiszt}
                            onChange={resetSucess}
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
                            step="0.01" 
                            min={0} 
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9,]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            ref={apolo}
                            onChange={resetSucess}
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
                            step="0.01" 
                            min={0} 
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9,]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            ref={mentesiranyitasban_dolg}
                            onChange={resetSucess}
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
                            step="0.01"
                            min={0} 
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9,]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            ref={mentogkvezeto}
                            onChange={resetSucess}
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
                            step="0.01"
                            min={0} 
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9,]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            ref={betegszall_iranyitasban_dolg}
                            onChange={resetSucess}
                        />
                    </Form.Group>
                </Col>                    
            </Row>
            <Row className="py-4">
                <Col lg={12} className="justify-content-center d-flex mb-3">
                    <Button 
                        variant="info" 
                        className="text-white text-uppercase fw-bold mx-2"
                        onClick={sendForm}
                    >
                        Túlórák {mode === "create" ? "felvitele" : "módosítása"}
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
                        <a href="http://localhost:8000/tulora/file-export" className="text-white text-uppercase fw-bold mx-3 text-decoration-none">
                            Adatok exportálása
                        </a>
                    </Button> 
                </Col>
                <Col lg={12} className="justify-content-center d-flex mb-3">
                    {megyek && megyek.map((megye) => {
                        return(
                            <Button variant="info" key={megye.ID} className="mx-1">
                                <a href={"http://localhost:8000/tulora/file-export/"+megye.ID} className="text-white text-uppercase fw-bold text-decoration-none">
                                    {megye.megye_nev} megye adatai
                                </a>                                
                            </Button>
                        )
                    })}                                                          
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
                            <th>Mentőállomás</th>
                            <th>Év</th>
                            <th>Hónap</th>
                            <th>Mentési feladatok miatti túlóra</th>
                            <th>Egyéb (továbbképzés, projekt, stb) túlóra</th>
                            <th>Orvos/mentőtiszt</th>
                            <th>Ápoló</th>
                            <th>Mentésirányításban dolgozó</th>
                            <th>Mentőgépkocsivezető</th>
                            <th>Betegszállítás irányításban dolgozó</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {tulorak && tulorak.map((tulora) => {
                            return(
                                <tr className="align-middle" key={tulora.ID}>
                                    <td>
                                        <PencilFill 
                                            onClick={() => {updateTulora(tulora.ID)}} 
                                            style={{cursor: "pointer"}}
                                            className="me-2"
                                        />
                                        <Trash3Fill 
                                            onClick={() => {deleteTulora(tulora.ID)}} 
                                            style={{cursor: "pointer"}}
                                        />
                                    </td>
                                    <td>{tulora.ID}</td>
                                    <td>{tulora.allomas.nev}</td>
                                    <td>{tulora.ev}</td>
                                    <td>{tulora.honap}</td>
                                    <td>{tulora.ment_fel_miatti_tulora}</td>
                                    <td>{tulora.egyeb_tulora}</td>
                                    <td>{tulora.orvos_mentotiszt}</td>
                                    <td>{tulora.apolo}</td>
                                    <td>{tulora.mentesiranyitasban_dolg}</td>
                                    <td>{tulora.mentogkvezeto}</td>
                                    <td>{tulora.betegszall_iranyitasban_dolg}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>          
        </Form>
    )    
}

export default Tulora;