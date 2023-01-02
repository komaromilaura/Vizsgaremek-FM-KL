import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Row, Table } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Beszerzes(props){
    const [beszerzesek, setBeszerzesek] = useState([]);
    const [partnerek, setParnerek] = useState([]);
    const [megyek, setMegyek] = useState([]);
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [modified, setModified] = useState(false);
    const [mode, setMode] = useState('create');
    const [originalMegrendeloSzam, setOriginalMegrendeloSzam] = useState("");

    const partnerID = useRef();
    const megrendelo_szama = useRef();
    const megrend_alairasra_tovabbitva = useRef();
    const alairt_megrend_beerkezese = useRef();
    const dijbekero_tovabbitasa = useRef();
    const munkalap_kiallitasa = useRef();
    const szamla_kiallitasa = useRef();
    const szamla_tovább_pu_nek_utalasra = useRef();

    const sendForm = () => {
        if (mode === "create") {                        
            axios.post('/api/beszerzes', {
                partnerID: partnerID.current.value,
                megrendelo_szama: megrendelo_szama.current.value,
                megrend_alairasra_tovabbitva: megrend_alairasra_tovabbitva.current.value,
                alairt_megrend_beerkezese: alairt_megrend_beerkezese.current.value,
                dijbekero_tovabbitasa: dijbekero_tovabbitasa.current.value,
                munkalap_kiallitasa: munkalap_kiallitasa.current.value,
                szamla_kiallitasa: szamla_kiallitasa.current.value,
                szamla_tovább_pu_nek_utalasra: szamla_tovább_pu_nek_utalasra.current.value,
            }).then(data => {
                if (data.status === 201){
                    partnerID.current.value = "-1";
                    megrendelo_szama.current.value = "";
                    megrend_alairasra_tovabbitva.current.value = "";
                    alairt_megrend_beerkezese.current.value = "";
                    dijbekero_tovabbitasa.current.value = "";
                    munkalap_kiallitasa.current.value = "";
                    szamla_kiallitasa.current.value = "";
                    szamla_tovább_pu_nek_utalasra.current.value = "";
                    setSuccess(true);
                    getBeszerzesek();
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
            axios.put('/api/beszerzes/'+originalMegrendeloSzam,{               
                partnerID: partnerID.current.value,
                megrendelo_szama: megrendelo_szama.current.value,
                megrend_alairasra_tovabbitva: megrend_alairasra_tovabbitva.current.value,
                alairt_megrend_beerkezese: alairt_megrend_beerkezese.current.value,
                dijbekero_tovabbitasa: dijbekero_tovabbitasa.current.value,
                munkalap_kiallitasa: munkalap_kiallitasa.current.value,
                szamla_kiallitasa: szamla_kiallitasa.current.value,
                szamla_tovább_pu_nek_utalasra: szamla_tovább_pu_nek_utalasra.current.value,
            }).then(data => {
                if (data.status === 200){
                    partnerID.current.value = "-1";
                    megrendelo_szama.current.value = "";
                    megrend_alairasra_tovabbitva.current.value = "";
                    alairt_megrend_beerkezese.current.value = "";
                    dijbekero_tovabbitasa.current.value = "";
                    munkalap_kiallitasa.current.value = "";
                    szamla_kiallitasa.current.value = "";
                    szamla_tovább_pu_nek_utalasra.current.value = "";
                    setModified(true);
                    getBeszerzesek();
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

    const getBeszerzesek = async () => {
        const response = await axios.get('/api/beszerzes');
        if (response.status === 200) {
            setBeszerzesek(response.data);
        }
    }

    useEffect(() => {
        getBeszerzesek();
    }, []);

    const getPartnerek = async() => {
        const response = await axios.get('/api/partner');
        if (response.status === 200) {
            setParnerek(response.data);
        }
    }

    useEffect(() => {
        getPartnerek();
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

    const updateBeszerzes = (megrendelo_sz) => {
        const beszerzesData = beszerzesek.find(beszerzes => beszerzes.megrendelo_szama === megrendelo_sz);
        setMode("update");
        resetSucess();
        setOriginalMegrendeloSzam(megrendelo_sz);        
        partnerID.current.value = beszerzesData.partnerID;
        megrendelo_szama.current.value = beszerzesData.megrendelo_szama;
        megrend_alairasra_tovabbitva.current.value = beszerzesData.megrend_alairasra_tovabbitva;
        alairt_megrend_beerkezese.current.value = beszerzesData.alairt_megrend_beerkezese;
        dijbekero_tovabbitasa.current.value = beszerzesData.dijbekero_tovabbitasa;
        munkalap_kiallitasa.current.value = beszerzesData.munkalap_kiallitasa;
        szamla_kiallitasa.current.value = beszerzesData.szamla_kiallitasa;
        szamla_tovább_pu_nek_utalasra.current.value = beszerzesData.szamla_tovább_pu_nek_utalasra;      
    }

    const deleteBeszerzes = (megrendelo_szama) => {
        axios.delete("/api/beszerzes/"+megrendelo_szama)
        .then(data => {
            if (data.status === 204){
                setDeleted(true);
                getBeszerzesek();
                resetSucess();
            }
        }).catch(error => {
            if (error.response.status === 500) { 
                const errors = error.response.data.message;                
                console.log(errors);
                alert("A beszerzés törlése sikertelen.")
            }            
        })
    }
   

    return(
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Beszerzések adatai</h2>
            <Row>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Partner
                        </Form.Label>
                        <Form.Select defaultValue="-1" ref={partnerID} onChange={resetSucess} >
                            <option value="-1" disabled>Válasszon partnert!</option>
                            {partnerek && partnerek.map((partner) => {
                                return(
                                    <option value={partner.ID} key={partner.ID}>
                                        {partner.ID}. {partner.nev}
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
                                Új partner felvitele
                            </Button>
                        </Link>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Megrendelő száma
                        </Form.Label>
                        <Form.Control type="text" ref={megrendelo_szama} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Megrendelő aláírásra továbbítva
                        </Form.Label>
                        <Form.Control type="date" ref={megrend_alairasra_tovabbitva} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Aláírt megrendelő beérkezése
                        </Form.Label>
                        <Form.Control type="date" ref={alairt_megrend_beerkezese} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Díjbekérő továbbítása
                        </Form.Label>
                        <Form.Control type="date" ref={dijbekero_tovabbitasa} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Munkalap kiállítása
                        </Form.Label>
                        <Form.Control type="date" ref={munkalap_kiallitasa} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Számla kiállítása
                        </Form.Label>
                        <Form.Control type="date" ref={szamla_kiallitasa} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Számla továbbítása pénzügynek/utalásra
                        </Form.Label>
                        <Form.Control type="date" ref={szamla_tovább_pu_nek_utalasra} onChange={resetSucess} />
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
                        Beszerzés {mode === "create" ? "felvitele" : "módosítása"}
                    </Button>
                    <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                        Beszerzések listázása
                    </Button>
                </Col>
                <Col lg={12} className="justify-content-center d-flex mb-3">
                    {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt beszerzéseket.*/}                           
                    {megyek && megyek.map((megye) => {
                        return(
                            <Button variant="info" className="text-white text-uppercase fw-bold mx-2" key={megye.ID}>
                                {megye.megye_nev} megye adatai
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
                            <th>Partner</th>
                            <th>Megrendelő száma</th>
                            <th>Megrendelő aláírásra továbbítva</th>
                            <th>Aláírt megrendelő beérkezése</th>
                            <th>Díjbekérő továbbítása</th>
                            <th>Munkalap kiállítása</th>
                            <th>Számla kiállítása</th>
                            <th>Számla továbbítása pénzügynek/utalásra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {beszerzesek && beszerzesek.map((beszerzes) => {
                            return(
                                <tr className="align-middle" key={beszerzes.megrendelo_szama}>
                                    <td>
                                        <PencilFill onClick={() => {updateBeszerzes(beszerzes.megrendelo_szama)}} style={{cursor: "pointer"}}/>
                                        <Trash3Fill onClick={() => {deleteBeszerzes(beszerzes.megrendelo_szama)}} style={{cursor: "pointer"}}/>
                                    </td>
                                    <td>{beszerzes.partner.nev}</td>
                                    <td>{beszerzes.megrendelo_szama}</td>
                                    <td>{beszerzes.megrend_alairasra_tovabbitva}</td>
                                    <td>{beszerzes.alairt_megrend_beerkezese}</td>
                                    <td>{beszerzes.dijbekero_tovabbitasa}</td>
                                    <td>{beszerzes.munkalap_kiallitasa}</td>
                                    <td>{beszerzes.szamla_kiallitasa}</td>
                                    <td>{beszerzes.szamla_tovább_pu_nek_utalasra}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>          
        </Form>
    )    
}

export default Beszerzes;