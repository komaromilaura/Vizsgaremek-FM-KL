import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Row,  Table  } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";

function Letszam(props) {
    const [letszam, setLetszam] = useState([]);
    const [megyek, setMegyek] = useState([]);
    const [allomasok, setAllomasok] = useState([]);
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [modified, setModified] = useState(false);
    const [mode, setMode] = useState('create');

    const ID = useRef();
    const mentoallomas = useRef();
    const ev = useRef();
    const negyedev = useRef();
    const kivon_all_szevezett = useRef();
    const kivon_all_betoltott = useRef();
    const mentesiranyitas_szervezett = useRef();
    const mentesiranyitas_betoltott = useRef();
    const betegszall_szervezett = useRef();
    const betegszall_betoltott = useRef();
    const orvos_mentotiszt = useRef();
    const apolo = useRef();
    const mentesiranyitasban_dolg = useRef();
    const mentogkvezeto = useRef();
    const betegszall_iranyitasban_dolg = useRef();

    const clearForm = () => {
        ID.current.value = "";
        mentoallomas.current.value = "-1";
        ev.current.value = "2023";
        negyedev.current.value = "1";
        kivon_all_szevezett.current.value = 0;
        kivon_all_betoltott.current.value = 0;
        mentesiranyitas_szervezett.current.value = 0;
        mentesiranyitas_betoltott.current.value = 0;
        betegszall_szervezett.current.value = 0;
        betegszall_betoltott.current.value = 0;
        orvos_mentotiszt.current.value = 0;
        apolo.current.value = 0;
        mentesiranyitasban_dolg.current.value = 0;
        mentogkvezeto.current.value = 0;
        betegszall_iranyitasban_dolg.current.value = 0;
}

    const sendForm = () => {
        if (mode === "create") {                        
            axios.post('/api/letszam', {
                mentoallomas: mentoallomas.current.value,
                ev: ev.current.value,
                negyedev: negyedev.current.value,
                kivon_all_szevezett: kivon_all_szevezett.current.value,
                kivon_all_betoltott: kivon_all_betoltott.current.value,
                mentesiranyitas_szervezett: mentesiranyitas_szervezett.current.value,
                mentesiranyitas_betoltott: mentesiranyitas_betoltott.current.value,
                betegszall_szervezett: betegszall_szervezett.current.value,
                betegszall_betoltott: betegszall_betoltott.current.value,
                orvos_mentotiszt: orvos_mentotiszt.current.value,
                apolo: apolo.current.value,
                mentesiranyitasban_dolg: mentesiranyitasban_dolg.current.value,
                mentogkvezeto: mentogkvezeto.current.value,
                betegszall_iranyitasban_dolg: betegszall_iranyitasban_dolg.current.value,
            }).then(data => {
                if (data.status === 201){
                    clearForm();
                    setSuccess(true);
                    getLetszam();
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
            axios.put('/api/letszam/'+ID.current.value,{               
                mentoallomas: mentoallomas.current.value,
                ev: ev.current.value,
                negyedev: negyedev.current.value,
                kivon_all_szevezett: kivon_all_szevezett.current.value,
                kivon_all_betoltott: kivon_all_betoltott.current.value,
                mentesiranyitas_szervezett: mentesiranyitas_szervezett.current.value,
                mentesiranyitas_betoltott: mentesiranyitas_betoltott.current.value,
                betegszall_szervezett: betegszall_szervezett.current.value,
                betegszall_betoltott: betegszall_betoltott.current.value,
                orvos_mentotiszt: orvos_mentotiszt.current.value,
                apolo: apolo.current.value,
                mentesiranyitasban_dolg: mentesiranyitasban_dolg.current.value,
                mentogkvezeto: mentogkvezeto.current.value,
                betegszall_iranyitasban_dolg: betegszall_iranyitasban_dolg.current.value,
            }).then(data => {
                if (data.status === 200){
                    clearForm();
                    setModified(true);
                    getLetszam();
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

    const getLetszam = async () => {
        const response = await axios.get('/api/letszam');
        if (response.status === 200) {
            setLetszam(response.data);
        }
    }

    useEffect(() => {
        getLetszam();
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

    const updateLetszam = (id) => {
        const letszamData = letszam.find(lsz => lsz.ID === id);
        setMode("update");
        resetSucess();       
        ID.current.value = letszamData.ID;
        mentoallomas.current.value = letszamData.mentoallomas;
        ev.current.value = letszamData.ev;
        negyedev.current.value = letszamData.negyedev;
        kivon_all_szevezett.current.value = letszamData.kivon_all_szevezett;
        kivon_all_betoltott.current.value = letszamData.kivon_all_betoltott;     
        mentesiranyitas_szervezett.current.value = letszamData.mentesiranyitas_szervezett;     
        mentesiranyitas_betoltott.current.value = letszamData.mentesiranyitas_betoltott;     
        betegszall_szervezett.current.value = letszamData.betegszall_szervezett;     
        betegszall_betoltott.current.value = letszamData.betegszall_betoltott;  
        orvos_mentotiszt.current.value = letszamData.orvos_mentotiszt;     
        apolo.current.value = letszamData.apolo;     
        mentesiranyitasban_dolg.current.value = letszamData.mentesiranyitasban_dolg;     
        mentogkvezeto.current.value = letszamData.mentogkvezeto;     
        betegszall_iranyitasban_dolg.current.value = letszamData.betegszall_iranyitasban_dolg;     
    }

    const cancelUpdate = () => {
        setMode("create")
        clearForm();
    }

    const deleteLetszam = (id) => {
        axios.delete("/api/letszam/"+id)
        .then(data => {
            if (data.status === 204){
                setDeleted(true);
                getLetszam();
                resetSucess();
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
            <h2 className="text-center text-decoration-underline p-2">Létszám jelentés</h2>
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
                            Negyedév
                        </Form.Label>
                        <Form.Select defaultValue="1" ref={negyedev} onChange={resetSucess} >
                            {szamol(1, 4)}                      
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Kivonuló állomány (szervezett)
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
                            ref={kivon_all_szevezett}
                            onChange={resetSucess} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Kivonuló állomány (betöltött)
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
                            ref={kivon_all_betoltott}
                            onChange={resetSucess} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Mentésirányítás (szervezett)
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
                            ref={mentesiranyitas_szervezett}
                            onChange={resetSucess} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Mentésirányítás (betöltött)
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
                            ref={mentesiranyitas_betoltott}
                            onChange={resetSucess} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Betegszállítás (szervezett)
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
                            ref={betegszall_szervezett}
                            onChange={resetSucess} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Betegszállítás (betöltött)
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
                            ref={betegszall_betoltott}
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
                        Létszám {mode === "create" ? "felvitele" : "módosítása"}
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
                        <a href="letszam/file-export" className="text-white text-uppercase fw-bold mx-3 text-decoration-none">
                            Adatok exportálása
                        </a>
                    </Button> 
                </Col>
                <Col lg={12} className="justify-content-center d-flex mb-3">
                    {megyek && megyek.map((megye) => {
                        return(
                            <Button variant="info" key={megye.ID} className="mx-1">
                                <a href={"letszam/file-export/"+megye.ID} className="text-white text-uppercase fw-bold text-decoration-none">
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
                            <th>Negyedév</th>
                            <th>Kivonuló állomány (szervezett)</th>
                            <th>Kivonuló állomány (betöltött)</th>
                            <th>Mentésirányítás (szervezett)</th>
                            <th>Mentésirányítás (betöltött)</th>
                            <th>Betegszállítás (szervezett)</th>
                            <th>Betegszállítás (betöltött)</th>
                            <th>Orvos/mentőtiszt</th>
                            <th>Ápoló</th>
                            <th>Mentésirányításban dolgozó</th>
                            <th>Mentőgépkocsivezető</th>
                            <th>Betegszállítás irányításban dolgozó</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {letszam && letszam.map((lsz) => {
                            return(
                                <tr className="align-middle" key={lsz.ID}>
                                    <td>
                                        <PencilFill 
                                            onClick={() => {updateLetszam(lsz.ID)}} 
                                            style={{cursor: "pointer"}}
                                            className="me-2"
                                        />
                                        <Trash3Fill 
                                            onClick={() => {deleteLetszam(lsz.ID)}} 
                                            style={{cursor: "pointer"}}
                                        />
                                    </td>
                                    <td>{lsz.ID}</td>
                                    <td>{lsz.allomas.nev}</td>
                                    <td>{lsz.ev}</td>
                                    <td>{lsz.negyedev}</td>
                                    <td>{lsz.kivon_all_szevezett}</td>
                                    <td>{lsz.kivon_all_betoltott}</td>
                                    <td>{lsz.mentesiranyitas_szervezett}</td>
                                    <td>{lsz.mentesiranyitas_betoltott}</td>
                                    <td>{lsz.betegszall_szervezett}</td>
                                    <td>{lsz.betegszall_betoltott}</td>
                                    <td>{lsz.orvos_mentotiszt}</td>
                                    <td>{lsz.apolo}</td>
                                    <td>{lsz.mentesiranyitasban_dolg}</td>
                                    <td>{lsz.mentogkvezeto}</td>
                                    <td>{lsz.betegszall_iranyitasban_dolg}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>          
        </Form>
    )    
}

export default Letszam;