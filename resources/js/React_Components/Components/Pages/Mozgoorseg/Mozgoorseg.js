import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row, Table } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const INITIAL_STATE = {
    formData: {
        megrendeloID: "-1",
        szerzodesszam: "",
        rendezveny_neve: "",
        rendezveny_datuma: "",
        rendezveny_helye: "",
        mentoallomas: "-1",
        roko: "0",
        eset: "0",
        mentogk: "0",
        gyalogorseg: "0",
        bevetel: "0",
        koltseg: "0",
        maradvany: "0",
    }
}

function Mozgoorseg(props) {
    const [mozgoorsegek, setMozgoorsegek] = useState([]);
    const [allomasok, setAllomasok] = useState([]);
    const [megrendelok, setMegrendelok] = useState([]);
    const [megyek, setMegyek] = useState([]);
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [modified, setModified] = useState(false);
    const [mode, setMode] = useState('create');
    const [originalSzerzodesszam, setOriginalSzerzodesszam] = useState("");
    const [formData, setFormData] = useState(INITIAL_STATE.formData);

    const sendForm = () => {
        if (mode === "create") {                        
            axios.post('/api/mozgoorseg', formData)
            .then(data => {
                if (data.status === 201){
                    setSuccess(true);
                    getMozgoorsegek();
                    setFormData(INITIAL_STATE.formData);
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
            axios.put('/api/mozgoorseg/'+originalSzerzodesszam, formData).
            then(data => {
                if (data.status === 200){
                    setModified(true);
                    getMozgoorsegek();
                    setMode("create");
                    setFormData(INITIAL_STATE.formData);
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

    const getMozgoorsegek = async () => {
        const response = await axios.get('/api/mozgoorseg');
        if (response.status === 200) {
            setMozgoorsegek(response.data);
        }
    }

    useEffect(() => {
        getMozgoorsegek();
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

    const getMegrendelok = async() => {
        const response = await axios.get('/api/partner');
        if (response.status === 200) {
            setMegrendelok(response.data);
        }        
    }

    useEffect(() => {
        getMegrendelok();
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

    const changeData = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))     
        resetSucess();
    }

    const checkBevetelKoltsegMod = () => {
        setFormData(prev => ({
            ...prev,
            maradvany: parseInt(formData.bevetel) - parseInt(formData.koltseg)
        }))        
    }    

    useEffect(() => {
        checkBevetelKoltsegMod();
    }, [formData.bevetel, formData.koltseg]);

    const updateMozgoorseg = (szerzodes_szam) => {
        const mozgoorsegData = mozgoorsegek.find(mozgoorseg => mozgoorseg.szerzodesszam === szerzodes_szam);
        setMode("update");
        resetSucess();
        setOriginalSzerzodesszam(szerzodes_szam); 
        setFormData(mozgoorsegData)
    }

    const cancelUpdate = () => {
        setMode("create")
        setFormData(INITIAL_STATE.formData);
    }

    const deleteMozgoorseg = (szerzodes_szam) => {
        axios.delete("/api/mozgoorseg/"+szerzodes_szam)
        .then(data => {
            if (data.status === 204){
                setDeleted(true);
                getMozgoorsegek();
                resetSucess();
            }
        }).catch(error => {
            if (error.response.status === 500) { 
                const errors = error.response.data.message;                
                console.log(errors);
                alert("Az adatok törlése sikertelen.")
            }            
        })
    }  
        
    return(
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Mozgóőrség</h2>
            <Row>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Megrendelő neve 
                        </Form.Label>
                        <Form.Select name="megrendeloID" value={formData.megrendeloID} onChange={changeData}  >
                            <option value="-1" disabled>Válasszon megrendelőt!</option>
                            {megrendelok && megrendelok.map((megrendelo) => {
                                return(
                                    <option value={megrendelo.ID} key={megrendelo.ID}>
                                        {megrendelo.ID}. {megrendelo.nev}
                                    </option>
                                )
                            })}                         
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={8} md={6} className="py-2 d-flex align-items-end">
                    <Form.Group>
                        <Link to="/partner">
                            <Button variant="info" className="text-white text-uppercase fw-bold">
                                Új megrendelő felvitele
                            </Button>
                        </Link>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Szerződésszám
                        </Form.Label>
                        <Form.Control type="text" name="szerzodesszam" value={formData.szerzodesszam} onChange={changeData}  />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Rendezvény elnevezése
                        </Form.Label>
                        <Form.Control type="text" name="rendezveny_neve" value={formData.rendezveny_neve} onChange={changeData}  />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Rendezvény/esemény ideje
                        </Form.Label>
                        <Form.Control type="date" name="rendezveny_datuma" value={formData.rendezveny_datuma} onChange={changeData}  />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Rendezvény/esemény helye
                        </Form.Label>
                        <Form.Control type="text"  name="rendezveny_helye" value={formData.rendezveny_helye} onChange={changeData}  />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Mentőállomás
                        </Form.Label>
                        <Form.Select name="mentoallomas" value={formData.mentoallomas} onChange={changeData} >
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
                            ROKO
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
                            name="roko" 
                            value={formData.roko} 
                            onChange={changeData}  
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
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                }
                            }} 
                            name="eset" 
                            value={formData.eset} 
                            onChange={changeData} 
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
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                }
                            }} 
                            name="mentogk" 
                            value={formData.mentogk} 
                            onChange={changeData}  
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
                            onKeyDown={(event) => {
                                if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                    return;
                                }
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                }
                            }} 
                            name="gyalogorseg" 
                            value={formData.gyalogorseg} 
                            onChange={changeData}  
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
                            name="bevetel" 
                            value={formData.bevetel || 0} 
                            onChange={changeData}  
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
                            name="koltseg" 
                            value={formData.koltseg || 0} 
                            onChange={changeData}  
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
                            name="maradvany" 
                            value={formData.maradvany} 
                            onChange={changeData}
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
                        Mozgóőrség {mode === "create" ? "felvitele" : "módosítása"}
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
                        <a href="mozgoorseg/file-export" className="text-white text-uppercase fw-bold mx-3 text-decoration-none">
                            Adatok exportálása
                        </a>
                    </Button>                  
                </Col>
                <Col lg={12} className="justify-content-center d-flex mb-3">
                    {megyek && megyek.map((megye) => {
                        return(
                            <Button variant="info" key={megye.ID} className="mx-1">
                                <a href={"mozgoorseg/file-export/"+megye.ID} className="text-white text-uppercase fw-bold text-decoration-none">
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
                            <th>Szerződésszám</th>
                            <th>Megrendelő neve</th>
                            <th>Rendezvény elnevezése</th>
                            <th>Rendezvény/esemény ideje</th>
                            <th>Rendezvény/esemény helye</th>
                            <th>Mentőállomás</th>
                            <th>ROKO</th>
                            <th>Eset</th>
                            <th>Mentőgk.</th>
                            <th>Gyalogőrség</th>
                            <th>Bevétel</th>
                            <th>Költség</th>
                            <th>Maradvány</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {mozgoorsegek && mozgoorsegek.map((mozgoorseg) => {
                            return(
                                <tr className="align-middle" key={mozgoorseg.szerzodesszam}>
                                    <td>
                                        <PencilFill onClick={() => {updateMozgoorseg(mozgoorseg.szerzodesszam)}} style={{cursor: "pointer"}}/>
                                        <Trash3Fill onClick={() => {deleteMozgoorseg(mozgoorseg.szerzodesszam)}} style={{cursor: "pointer"}}/>
                                    </td>
                                    <td>{mozgoorseg.szerzodesszam}</td>
                                    <td>{mozgoorseg.megrendelo.nev}</td>
                                    <td>{mozgoorseg.rendezveny_neve}</td>
                                    <td>{mozgoorseg.rendezveny_datuma}</td>
                                    <td>{mozgoorseg.rendezveny_helye}</td>
                                    <td>{mozgoorseg.allomas.nev}</td>
                                    <td>{mozgoorseg.roko}</td>
                                    <td>{mozgoorseg.eset}</td>
                                    <td>{mozgoorseg.mentogk}</td>
                                    <td>{mozgoorseg.gyalogorseg}</td>
                                    <td>{mozgoorseg.bevetel}</td>
                                    <td>{mozgoorseg.koltseg}</td>
                                    <td>{mozgoorseg.maradvany}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        </Form>
    )
}

export default Mozgoorseg;