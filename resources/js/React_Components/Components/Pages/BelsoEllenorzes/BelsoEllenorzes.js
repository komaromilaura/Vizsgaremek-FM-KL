import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row, Table } from "react-bootstrap";
import { Check, PencilFill, Trash3Fill, X } from "react-bootstrap-icons";

const INITIAL_STATE = {
    formData: {
        ell_azon: "",
        ell_iktszam: "",
        ell_szerv: "-1",
        ell_targya: "",
        intezkedest_igenylo_megall: "",
        ell_javaslat: "",
        javaslat_alapjan_eloirt_int: "",
        int_terv_iktszama: "",
        int_terv_jovahagyas_datuma: "",
        felelos_beosztas: "",
        felelos_szerv_egyseg: "-1",
        int_vegrehajt_hatarido: "",
        hatarido_mod_1: 0,
        hatarido_mod_2: "",
        feladat_mod_1: 0,
        feladat_mod_2: "",
        int_teljesites_1: 0,
        int_teljesites_2: "",
        megtett_int: "",
        hatidoben_vegre_nem_hajt_int_oka: "",
        nem_telj_kapcsan_tett_lepesek: "",
        megjegyzes: "",
    },
}

function BelsoEllenorzes(props) {
    const [belsoEllenorzesek, setBelsoEllenorzesek] = useState([]);
    const [ellSzerv, setEllSzerv] = useState([]);
    const [felelosSzervEgyseg, setFelelosSzervEgyseg] = useState([]);
    const [megyek, setMegyek] = useState([]);
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [modified, setModified] = useState(false);
    const [mode, setMode] = useState('create');
    const [originalEll_azon, setOriginalEll_azon] = useState("");
    const [formData, setFormData] = useState(INITIAL_STATE.formData);

    const sendForm = () => {
        if (mode === "create") {                        
            axios.post('/api/belso_ell', formData)
            .then(data => {
                if (data.status === 201){
                    setSuccess(true);
                    getBelsoEllenorzesek();
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
            axios.put('/api/belso_ell/'+originalEll_azon, formData).
            then(data => {
                if (data.status === 200){
                    setModified(true);
                    getBelsoEllenorzesek();
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

    const getBelsoEllenorzesek = async () => {
        const response = await axios.get('/api/belso_ell');
        if (response.status === 200) {
            setBelsoEllenorzesek(response.data);
        }
    }

    useEffect(() => {
        getBelsoEllenorzesek();
    }, []);

    const getEllSzerv = async() => {
        const response = await axios.get('/api/allomas');
        if (response.status === 200) {
            setEllSzerv(response.data);
        }
    }

    useEffect(() => {
        getEllSzerv();
    }, []);

    const getFelelosSzervEgyseg = async() => {
        const response = await axios.get('/api/allomas');
        if (response.status === 200) {
            setFelelosSzervEgyseg(response.data);
        }
    }

    useEffect(() => {
        getFelelosSzervEgyseg();
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
    
    const checkHatarIdoMod = (e) => {
        if (parseInt(formData.hatarido_mod_1) === 0) {
            setFormData(prev => ({
                ...prev,
                hatarido_mod_2: ""
            }))
        };
    }

    useEffect(() => {
        checkHatarIdoMod();
    }, [formData.hatarido_mod_1]);

    const checkFeladatMod = (e) => {
        if (parseInt(formData.feladat_mod_1) === 0) {
            setFormData(prev => ({
                ...prev,
                feladat_mod_2: ""
            }))
        };
    }

    useEffect(() => {
        checkFeladatMod();
    },[formData.feladat_mod_1]);

    const checkTeljesitesMod = (e) => {
        if (parseInt(formData.int_teljesites_1) === 0) {
            setFormData(prev => ({
                ...prev,
                int_teljesites_2: ""
            }))
        };
        if (parseInt(formData.int_teljesites_1) === 1) {
            setFormData(prev => ({
                ...prev,
                nem_telj_kapcsan_tett_lepesek: ""
            }))
        };
    }

    useEffect(() => {
        checkTeljesitesMod();
    },[formData.int_teljesites_1]);

    const updateBelsoEllenorzesek = (ell_az) => {
        const belsoEllenorzesData = belsoEllenorzesek.find(belsoEllenorzes => belsoEllenorzes.ell_azon === ell_az);
        setMode("update");
        resetSucess();
        setOriginalEll_azon(ell_az); 
        setFormData(belsoEllenorzesData)
    }

    const cancelUpdate = () => {
        setMode("create")
        setFormData(INITIAL_STATE.formData);
    }

    const deleteBelsoEllenorzesek = (ell_az) => {
        axios.delete("/api/belso_ell/"+ell_az)
        .then(data => {
            if (data.status === 204){
                setDeleted(true);
                getBelsoEllenorzesek();
                resetSucess();
            }
        }).catch(error => {
            if (error.response.status === 500) { 
                const errors = error.response.data.message;                
                console.log(errors);
                alert("A belső ellenőrzés törlése sikertelen.")
            }            
        })
    }  

    return(
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Belső ellenőrzés adatai</h2>
            <Row>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Ellenőrzés azonosítója
                        </Form.Label>
                        <Form.Control type="text" name="ell_azon" value={formData.ell_azon} onChange={changeData} />   
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Ellenőrzés iktatószáma
                        </Form.Label>
                        <Form.Control type="text" name="ell_iktszam" value={formData.ell_iktszam} onChange={changeData} />   
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>                                                   
                        <Form.Label>
                            Az ellenőrzött szerv, illetve szervezeti egység
                        </Form.Label>
                        <Form.Select name="ell_szerv" value={formData.ell_szerv} onChange={changeData} >
                            <option value="-1" disabled>Válasszon szervet / szervezeti egységet!</option>
                            {ellSzerv && ellSzerv.map((szerv) => {
                                return(
                                    <option value={szerv.nev} key={szerv.nev}>
                                        {szerv.sorszam}. {szerv.nev}
                                    </option>
                                )
                            })}     
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Az ellenőrzés tárgya (címe)
                        </Form.Label>
                        <Form.Control type="text" name="ell_targya" value={formData.ell_targya} onChange={changeData} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Intézkedést igénylő megállapítás
                        </Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="intezkedest_igenylo_megall" 
                            value={formData.intezkedest_igenylo_megall} 
                            onChange={changeData} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Ellenőrzési javaslat  
                        </Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="ell_javaslat" 
                            value={formData.ell_javaslat} 
                            onChange={changeData} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            A javaslat alapján előírt intézkedés
                        </Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="javaslat_alapjan_eloirt_int"
                            value={formData.javaslat_alapjan_eloirt_int} 
                            onChange={changeData} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            A vonatkozó intézkedési terv iktatószáma
                        </Form.Label>
                        <Form.Control type="text" name="int_terv_iktszama" value={formData.int_terv_iktszama} onChange={changeData} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            A vonatkozó intézkedési terv jóváhagyásának időpontja
                        </Form.Label>
                        <Form.Control type="date" name="int_terv_jovahagyas_datuma" value={formData.int_terv_jovahagyas_datuma} onChange={changeData} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Az intézkedés felelőse (beosztás)
                        </Form.Label>
                        <Form.Control type="text" name="felelos_beosztas" value={formData.felelos_beosztas} onChange={changeData} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Az intézkedés felelőse (szervezeti egység)
                        </Form.Label>
                        <Form.Select name="felelos_szerv_egyseg" value={formData.felelos_szerv_egyseg} onChange={changeData} >
                            <option value="-1" disabled>Válasszon szervet / szervezeti egységet!</option>
                            {felelosSzervEgyseg && felelosSzervEgyseg.map((szerv) => {
                                return(
                                    <option value={szerv.nev} key={szerv.nev}>
                                        {szerv.sorszam}. {szerv.nev}
                                    </option>
                                )
                            })}    
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Az intézkedés végrehajtásának határideje
                        </Form.Label>
                        <Form.Control type="date" name="int_vegrehajt_hatarido" value={formData.int_vegrehajt_hatarido} onChange={changeData} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group
                        onChange={changeData}
                        name="hatarido_mod_1"
                        value={formData.hatarido_mod_1}
                    >
                        <Form.Label>
                            Határidő módosítás
                        </Form.Label>                                             
                        <Form.Check 
                            type="radio" 
                            name="hatarido_mod_1"
                            label="nem"                           
                            value="0"
                            checked={parseInt(formData.hatarido_mod_1) === 0}
                            onChange={changeData}                             
                        />
                        <Form.Check 
                            type="radio" 
                            name="hatarido_mod_1"
                            label="igen"
                            value="1"
                            checked={parseInt(formData.hatarido_mod_1) === 1}
                            className="mb-2"
                            onChange={changeData}                     
                        />   
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="date"
                            name="hatarido_mod_2"
                            disabled={parseInt(formData.hatarido_mod_1) === 1 ? false : true}
                            value={formData.hatarido_mod_2 || ""}
                            onChange={changeData}                            
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group
                        onChange={changeData}
                        name="feladat_mod_1"
                        value={formData.feladat_mod_1}
                    >
                        <Form.Label>
                            Feladat módosítás
                        </Form.Label>
                        <Form.Check 
                            type="radio" 
                            name="feladat_mod_1"
                            label="nem"
                            value="0"
                            checked={parseInt(formData.feladat_mod_1) === 0}
                            onChange={changeData}
                        />
                        <Form.Check 
                            type="radio" 
                            name="feladat_mod_1"
                            label="igen"
                            value="1"
                            checked={parseInt(formData.feladat_mod_1) === 1}
                            className="mb-2"
                            onChange={changeData}                                 
                        />  
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            as="textarea"
                            row={2}
                            disabled={parseInt(formData.feladat_mod_1) === 1 ? false : true}
                            name="feladat_mod_2"
                            value={formData.feladat_mod_2  || ""}
                            onChange={changeData}   
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group
                        onChange={changeData}
                        name="int_teljesites_1"
                        value={formData.int_teljesites_1}
                    >
                        <Form.Label>
                            Az intézkedés teljesítése
                        </Form.Label>                        
                        <Form.Check 
                            type="radio" 
                            name="int_teljesites_1"
                            label="nem"
                            value="0"
                            checked={parseInt(formData.int_teljesites_1) === 0}
                            onChange={changeData}                          
                        />
                        <Form.Check 
                            type="radio" 
                            name="int_teljesites_1"
                            label="igen"
                            value="1"
                            checked={parseInt(formData.int_teljesites_1) === 1}   
                            className="mb-2"
                            onChange={changeData}                           
                        />
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="date"
                            disabled={parseInt(formData.int_teljesites_1) === 1 ? false : true}
                            name="int_teljesites_2"
                            value={formData.int_teljesites_2 || ""}
                            onChange={changeData} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Megtett intézkedések rövid leírása
                        </Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="megtett_int"
                            value={formData.megtett_int}
                            onChange={changeData}
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            A határidőben végre nem hajtott intézkedések oka
                        </Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="hatidoben_vegre_nem_hajt_int_oka"
                            value={formData.hatidoben_vegre_nem_hajt_int_oka || ""}
                            onChange={changeData}
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            A nem teljesülés kapcsán tett lépések
                        </Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3}
                            disabled={parseInt(formData.int_teljesites_1) === 1 ? true : false}
                            name="nem_telj_kapcsan_tett_lepesek"
                            value={formData.nem_telj_kapcsan_tett_lepesek  || ""}
                            onChange={changeData}
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Megjegyzés
                        </Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="megjegyzes" 
                            value={formData.megjegyzes || ""}
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
                        Belső ellenőrzés {mode === "create" ? "felvitele" : "módosítása"}
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
                    <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                        Belső ellenőrzések listázása
                    </Button>                    
                </Col>
                <Col lg={12} className="justify-content-center d-flex mb-3">
                    {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt ellenőrzéseket.*/}                           
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
                            <th>Ellenőrzés azonosítója</th>
                            <th>Ellenőrzés iktatószáma</th>
                            <th>Az ellenőrzött szerv, illetve szervezeti egység</th>
                            <th>Az ellenőrzés tárgya (címe)</th>
                            <th>Intézkedést igénylő megállapítás</th>
                            <th>Ellenőrzési javaslat</th>
                            <th>A javaslat alapján előírt intézkedés</th>
                            <th>A vonatkozó intézkedési terv iktatószáma</th>
                            <th>A vonatkozó intézkedési terv jóváhagyásának időpontja</th>
                            <th>Az intézkedés felelőse (beosztás)</th>
                            <th>Az intézkedés felelőse (szervezeti egység)</th>
                            <th>Az intézkedés végrehajtásának határideje</th>
                            <th>Határidő módosítás (igen / nem)</th>
                            <th>Határidő módosítás (dátum)</th>
                            <th>Feladat módosítás (igen / nem)</th>
                            <th>Feladat módosítás (dátum)</th>
                            <th>Az intézkedés teljesítése (igen / nem)</th>
                            <th>Az intézkedés teljesítése (dátum)</th>
                            <th>Megtett intézkedések rövid leírása</th>
                            <th>A határidőben végre nem hajtott intézkedések oka</th>
                            <th>A nem teljesülés kapcsán tett lépések</th>
                            <th>Megjegyzés</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {belsoEllenorzesek && belsoEllenorzesek.map((belsoEllenorzes) => {
                            return(
                                <tr className="align-middle" key={belsoEllenorzes.ell_azon}>
                                    <td>
                                        <PencilFill onClick={() => {updateBelsoEllenorzesek(belsoEllenorzes.ell_azon)}} style={{cursor: "pointer"}}/>
                                        <Trash3Fill onClick={() => {deleteBelsoEllenorzesek(belsoEllenorzes.ell_azon)}} style={{cursor: "pointer"}}/>
                                    </td>
                                    <td>{belsoEllenorzes.ell_azon}</td>
                                    <td>{belsoEllenorzes.ell_iktszam}</td>
                                    <td>{belsoEllenorzes.ell_szerv}</td>
                                    <td>{belsoEllenorzes.ell_targya}</td>
                                    <td>{belsoEllenorzes.intezkedest_igenylo_megall}</td>
                                    <td>{belsoEllenorzes.ell_javaslat}</td>
                                    <td>{belsoEllenorzes.javaslat_alapjan_eloirt_int}</td>
                                    <td>{belsoEllenorzes.int_terv_iktszama}</td>
                                    <td>{belsoEllenorzes.int_terv_jovahagyas_datuma}</td>
                                    <td>{belsoEllenorzes.felelos_beosztas}</td>
                                    <td>{belsoEllenorzes.felelos_szerv_egyseg}</td>
                                    <td>{belsoEllenorzes.int_vegrehajt_hatarido}</td>
                                    <td className="text-center">
                                        {parseInt(belsoEllenorzes.hatarido_mod_1) === 0 ? React.createElement(X) : React.createElement(Check)}
                                    </td>
                                    <td>{belsoEllenorzes.hatarido_mod_2}</td>
                                    <td className="text-center">
                                        {parseInt(belsoEllenorzes.feladat_mod_1) === 0 ? React.createElement(X) : React.createElement(Check)}
                                    </td>
                                    <td>{belsoEllenorzes.feladat_mod_2}</td>
                                    <td className="text-center">
                                        {parseInt(belsoEllenorzes.int_teljesites_1) === 0 ? React.createElement(X) : React.createElement(Check)}
                                    </td>
                                    <td>{belsoEllenorzes.int_teljesites_2}</td>
                                    <td>{belsoEllenorzes.megtett_int}</td>
                                    <td>{belsoEllenorzes.hatidoben_vegre_nem_hajt_int_oka}</td>
                                    <td>{belsoEllenorzes.nem_telj_kapcsan_tett_lepesek}</td>
                                    <td>{belsoEllenorzes.megjegyzes}</td>   
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        </Form>
    )
}

export default BelsoEllenorzes;