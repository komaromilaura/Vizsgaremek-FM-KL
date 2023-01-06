import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Row, Table } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Beszerzes(props){
    const [beszerzesek, setBeszerzesek] = useState([]);
    const [partnerek, setParnerek] = useState([]);
    const [megyek, setMegyek] = useState([]);
    const [allomasok, setAllomasok] = useState([]);
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [modified, setModified] = useState(false);
    const [mode, setMode] = useState('create');
    const [originalMegrendeloSzam, setOriginalMegrendeloSzam] = useState("");

    const mentoallomas = useRef();
    const targy = useRef();
    const besz_igeny_datum = useRef();
    const ajanlat_bekeres = useRef();
    const engedelyezesre_kuldve = useRef();
    const engedely_beerkezese = useRef();
    const megrendelo_kiallitasa = useRef();
    const megrendelo_szama = useRef();
    const megrend_alairasra_tovabbitva = useRef();
    const alairt_megrend_beerkezese = useRef();
    const dijbekero_tovabbitasa = useRef();
    const munkalap_kiallitasa = useRef();
    const szamla_kiallitasa = useRef();
    const szamla_tovább_pu_nek_utalasra = useRef();
    const partnerID = useRef();

    const clearForm = () => {
        mentoallomas.current.value  = "-1";
        targy.current.value  = "";
        besz_igeny_datum.current.value  = "";
        ajanlat_bekeres.current.value  = "";
        engedelyezesre_kuldve.current.value  = "";
        engedely_beerkezese.current.value  = "";
        megrendelo_kiallitasa.current.value  = "";
        megrendelo_szama.current.value = "";
        megrend_alairasra_tovabbitva.current.value = "";
        alairt_megrend_beerkezese.current.value = "";
        dijbekero_tovabbitasa.current.value = "";
        munkalap_kiallitasa.current.value = "";
        szamla_kiallitasa.current.value = "";
        szamla_tovább_pu_nek_utalasra.current.value = "";
        partnerID.current.value = "-1";
    }

    const sendForm = () => {
        if (mode === "create") {                        
            axios.post('/api/beszerzes', {
                mentoallomas: mentoallomas.current.value,
                targy: targy.current.value,
                besz_igeny_datum: besz_igeny_datum.current.value,
                ajanlat_bekeres: ajanlat_bekeres.current.value,
                engedelyezesre_kuldve: engedelyezesre_kuldve.current.value,
                engedely_beerkezese: engedely_beerkezese.current.value,
                megrendelo_kiallitasa: megrendelo_kiallitasa.current.value,
                megrendelo_szama: megrendelo_szama.current.value,
                megrend_alairasra_tovabbitva: megrend_alairasra_tovabbitva.current.value,
                alairt_megrend_beerkezese: alairt_megrend_beerkezese.current.value,
                dijbekero_tovabbitasa: dijbekero_tovabbitasa.current.value,
                munkalap_kiallitasa: munkalap_kiallitasa.current.value,
                szamla_kiallitasa: szamla_kiallitasa.current.value,
                szamla_tovább_pu_nek_utalasra: szamla_tovább_pu_nek_utalasra.current.value,
                partnerID: partnerID.current.value,
            }).then(data => {
                if (data.status === 201){
                    clearForm();
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
                mentoallomas: mentoallomas.current.value,
                targy: targy.current.value,
                besz_igeny_datum: besz_igeny_datum.current.value,
                ajanlat_bekeres: ajanlat_bekeres.current.value,
                engedelyezesre_kuldve: engedelyezesre_kuldve.current.value,
                engedely_beerkezese: engedely_beerkezese.current.value,
                megrendelo_kiallitasa: megrendelo_kiallitasa.current.value,
                megrendelo_szama: megrendelo_szama.current.value,
                megrend_alairasra_tovabbitva: megrend_alairasra_tovabbitva.current.value,
                alairt_megrend_beerkezese: alairt_megrend_beerkezese.current.value,
                dijbekero_tovabbitasa: dijbekero_tovabbitasa.current.value,
                munkalap_kiallitasa: munkalap_kiallitasa.current.value,
                szamla_kiallitasa: szamla_kiallitasa.current.value,
                szamla_tovább_pu_nek_utalasra: szamla_tovább_pu_nek_utalasra.current.value,
                partnerID: partnerID.current.value,
            }).then(data => {
                if (data.status === 200){
                    clearForm();
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

    const getAllomasok = async() => {
        const response = await axios.get('/api/allomas');
        if (response.status === 200) {
            setAllomasok(response.data);
        }
    }

    useEffect(() => {
        getAllomasok();
    }, []);


    const updateBeszerzes = (megrendelo_sz) => {
        const beszerzesData = beszerzesek.find(beszerzes => beszerzes.megrendelo_szama === megrendelo_sz);
        setMode("update");
        resetSucess();
        setOriginalMegrendeloSzam(megrendelo_sz);        
        
        mentoallomas.current.value = beszerzesData.mentoallomas;
        targy.current.value = beszerzesData.targy;
        besz_igeny_datum.current.value = beszerzesData.besz_igeny_datum;
        ajanlat_bekeres.current.value = beszerzesData.ajanlat_bekeres;
        engedelyezesre_kuldve.current.value = beszerzesData.engedelyezesre_kuldve;
        engedely_beerkezese.current.value = beszerzesData.engedely_beerkezese;
        megrendelo_kiallitasa.current.value = beszerzesData.megrendelo_kiallitasa;
        megrendelo_szama.current.value = beszerzesData.megrendelo_szama;
        megrend_alairasra_tovabbitva.current.value = beszerzesData.megrend_alairasra_tovabbitva;
        alairt_megrend_beerkezese.current.value = beszerzesData.alairt_megrend_beerkezese;
        dijbekero_tovabbitasa.current.value = beszerzesData.dijbekero_tovabbitasa;
        munkalap_kiallitasa.current.value = beszerzesData.munkalap_kiallitasa;
        szamla_kiallitasa.current.value = beszerzesData.szamla_kiallitasa;
        szamla_tovább_pu_nek_utalasra.current.value = beszerzesData.szamla_tovább_pu_nek_utalasra;
        partnerID.current.value = beszerzesData.partnerID;      
    }

    const cancelUpdate = () => {
        setMode("create")
        clearForm();
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
                            Beszerzési igény tárgya
                        </Form.Label>
                        <Form.Control type="text" ref={targy} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Beszerzési igény dátuma
                        </Form.Label>
                        <Form.Control type="date" ref={besz_igeny_datum} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Árajánlat bekérés
                        </Form.Label>
                        <Form.Control type="date" ref={ajanlat_bekeres} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Engedélyezésre küldve
                        </Form.Label>
                        <Form.Control type="date" ref={engedelyezesre_kuldve} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Engedély beérkezése
                        </Form.Label>
                        <Form.Control type="date" ref={engedely_beerkezese} onChange={resetSucess} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Megrendelő kiállítása
                        </Form.Label>
                        <Form.Control type="date" ref={megrendelo_kiallitasa} onChange={resetSucess} />
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
            <Row className="pb-3">
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
                        <a href="beszerzes/file-export" className="text-white text-uppercase fw-bold mx-3 text-decoration-none">
                            Adatok exportálása
                        </a>
                    </Button>
                </Col>
                <Col lg={12} className="justify-content-center d-flex mb-3">                                           
                    {megyek && megyek.map((megye) => {
                        return(
                            <Button variant="info" key={megye.ID} className="mx-1">
                                <a href={"beszerzes/file-export/"+megye.ID} className="text-white text-uppercase fw-bold text-decoration-none">
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
                            <th>Állomás</th>
                            <th>Beszerzési igény tárgya</th>
                            <th>Beszerzési igény dátuma</th>
                            <th>Árajánlat bekérés</th>
                            <th>Engedélyezésre küldve</th>
                            <th>Engedély beérkezése</th>
                            <th>Megrendelő kiállítása</th>
                            <th>Megrendelő száma</th>
                            <th>Megrendelő aláírásra továbbítva</th>
                            <th>Aláírt megrendelő beérkezése</th>
                            <th>Díjbekérő továbbítása</th>
                            <th>Munkalap kiállítása</th>
                            <th>Számla kiállítása</th>
                            <th>Számla továbbítása pénzügynek/utalásra</th>
                            <th>Partner</th>
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
                                    <td>{beszerzes.allomas.nev}</td>
                                    <td>{beszerzes.targy}</td>
                                    <td>{beszerzes.besz_igeny_datum}</td>
                                    <td>{beszerzes.ajanlat_bekeres}</td>
                                    <td>{beszerzes.engedelyezesre_kuldve}</td>
                                    <td>{beszerzes.engedely_beerkezese}</td>
                                    <td>{beszerzes.megrendelo_kiallitasa}</td>
                                    <td>{beszerzes.megrendelo_szama}</td>
                                    <td>{beszerzes.megrend_alairasra_tovabbitva}</td>
                                    <td>{beszerzes.alairt_megrend_beerkezese}</td>
                                    <td>{beszerzes.dijbekero_tovabbitasa}</td>
                                    <td>{beszerzes.munkalap_kiallitasa}</td>
                                    <td>{beszerzes.szamla_kiallitasa}</td>
                                    <td>{beszerzes.szamla_tovább_pu_nek_utalasra}</td>
                                    <td>{beszerzes.partner.nev}</td>
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