import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row, Table  } from "react-bootstrap";
import {allasok} from "../../../Utils/data.js";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";

const INITIAL_STATE = {
    formData: {        
        ID: "",
        mentoallomas: "-1",
        ev: 2023,
        ho: 1,
        szakorvos_szervezett: 0.0,
        szakorvos_betoltott: 0.0,
        szakorvos_ures: 0.0,
        vezeto_mentotiszt_szervezett: 0.0,
        vezeto_mentotiszt_betoltott: 0.0,
        vezeto_mentotiszt_ures: 0.0,
        orvos_mentotiszt_szervezett: 0.0,
        orvos_mentotiszt_betoltott: 0.0,
        orvos_mentotiszt_ures: 0.0,
        foapolo_szervezett: 0.0,
        foapolo_betoltott: 0.0,
        foapolo_ures: 0.0,
        mentoapolo_szervezett: 0.0,
        mentoapolo_betoltott: 0.0,
        mentoapolo_ures: 0.0,
        mentoapolo_osszes_szervezett: 0.0,
        mentoapolo_osszes_betoltott: 0.0,
        mentoapolo_osszes_ures: 0.0,
        allomasvezeto_szervezett: 0.0,
        allomasvezeto_betoltott: 0.0,
        allomasvezeto_ures: 0.0,
        ICS_vezeto_szervezett: 0.0,
        ICS_vezeto_betoltott: 0.0,
        ICS_vezeto_ures: 0.0,
        mentotiszt_szervezett: 0.0,
        mentotiszt_betoltott: 0.0,
        mentotiszt_ures: 0.0,
        mentoapolo2_szervezett: 0.0,
        mentoapolo2_betoltott: 0.0,
        mentoapolo2_ures: 0.0,
        apolo_szervezett: 0.0,
        apolo_betoltott: 0.0,
        apolo_ures: 0.0,
        szolgalatvezeto_szervezett: 0.0,
        szolgalatvezeto_betoltott: 0.0,
        szolgalatvezeto_ures: 0.0,
        apolo2_szervezett: 0.0,
        apolo2_betoltott: 0.0,
        apolo2_ures: 0.0,
        uzemgazdasz_szervezett: 0.0,
        uzemgazdasz_betoltott: 0.0,
        uzemgazdasz_ures: 0.0,
        uzemmernok_szervezett: 0.0,
        uzemmernok_betoltott: 0.0,
        uzemmernok_ures: 0.0,
        oktatas_szervezo_szervezett: 0.0,
        oktatas_szervezo_betoltott: 0.0,
        oktatas_szervezo_ures: 0.0,
        ugyintezo_szervezett: 0.0,
        ugyintezo_betoltott: 0.0,
        ugyintezo_ures: 0.0,
        adminisztrator_szervezett: 0.0,
        adminisztrator_betoltott: 0.0,
        adminisztrator_ures: 0.0,
        adatrogzito_szervezett: 0.0,
        adatrogzito_betoltott: 0.0,
        adatrogzito_ures: 0.0,
        autoszerelo_szakmunkas_szervezett: 0.0,
        autoszerelo_szakmunkas_betoltott: 0.0,
        autoszerelo_szakmunkas_ures: 0.0,
        karbantarto_szervezett: 0.0,
        karbantarto_betoltott: 0.0,
        karbantarto_ures: 0.0,
        kazanfuto_szervezett: 0.0,
        kazanfuto_betoltott: 0.0,
        kazanfuto_ures: 0.0,
        mentogepkocsivezeto_szervezett: 0.0,
        mentogepkocsivezeto_betoltott: 0.0,
        mentogepkocsivezeto_ures: 0.0,
        muszaki_gondnok_szervezett: 0.0,
        muszaki_gondnok_betoltott: 0.0,
        muszaki_gondnok_ures: 0.0,
        garazsmester_szervezett: 0.0,
        garazsmester_betoltott: 0.0,
        garazsmester_ures: 0.0,
        szervezett_gkv_osszesen: 0.0,
        betoltott_gkv_osszesen: 0.0,
        ures_gkv_osszesen: 0.0,
        szervezett_allashely_osszesen: 0.0,
        betoltott_allashely_osszesen: 0.0,
        ures_allashely_osszesen: 0.0,
    },
}

function Allashely(props) {        
    const [allashelyek, setAllashelyek] = useState([]);
    const [allomasok, setAllomasok] = useState([]);
    const [megyek, setMegyek] = useState([]);
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [modified, setModified] = useState(false);
    const [mode, setMode] = useState('create');
    const [formData, setFormData] = useState(INITIAL_STATE.formData);
    const [changes, setChanges] = useState(0);

    const sendForm = () => {
        if (mode === "create") {                        
            axios.post('/api/allashely', formData)
            .then(data => {
                if (data.status === 201){
                    setSuccess(true);
                    getAllashelyek();
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
            axios.put('/api/allashely/'+formData.ID, formData).
            then(data => {
                if (data.status === 200){
                    setModified(true);
                    getAllashelyek();
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

    const getAllashelyek = async () => {
        const response = await axios.get('/api/allashely');
        if (response.status === 200) {
            setAllashelyek(response.data);
        }
    }

    useEffect(() => {
        getAllashelyek();
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
        setChanges(changes + 1);
        resetSucess();
    }
    
    const allashelyekOsszesitese = () => {      
        let osszesSz = 0;
        let osszesB = 0;
        let gkvOsszSz = 0;        
        let gkvOsszB = 0;
        let mentoapoloOsszSz = 0;
        let mentoapoloOsszB = 0;
        let szolgalatvezB = 0;
        let szolgalatvezSz = 0;
        {allasok && allasok.map((item) => {
            let szervezettallas = document.getElementById(item.db + "_szervezett");
            let betoltottallas = document.getElementById(item.db + "_betoltott");
            let uresallas = document.getElementById(item.db + "_ures");
            let uresallasokSzama = parseFloat(szervezettallas.value) - parseFloat(betoltottallas.value);
            uresallasokSzama = Math.round(uresallasokSzama * 100) / 100;
            let uresallasNev = uresallas.name;
            
            setFormData(prev => ({
                ...prev,
                [uresallasNev]: uresallasokSzama,
            }))
        
            if (uresallasokSzama < 0) {
                uresallas.style.color = "red";
            } else {
                uresallas.style.color = "black";
            }  
        })}

        mentoapoloOsszSz += Math.round(parseFloat(document.getElementById("mentoapolo_szervezett").value)*100)/100;
        mentoapoloOsszSz += Math.round(parseFloat(document.getElementById("foapolo_szervezett").value)*100)/100;

        mentoapoloOsszB += Math.round(parseFloat(document.getElementById("mentoapolo_betoltott").value)*100)/100;
        mentoapoloOsszB += Math.round(parseFloat(document.getElementById("foapolo_betoltott").value)*100)/100;

        szolgalatvezSz += Math.round(parseFloat(document.getElementById("ICS_vezeto_szervezett").value)*100)/100;
        szolgalatvezSz += Math.round(parseFloat(document.getElementById("mentotiszt_szervezett").value)*100)/100;
        szolgalatvezSz += Math.round(parseFloat(document.getElementById("mentoapolo2_szervezett").value)*100)/100;
        szolgalatvezSz += Math.round(parseFloat(document.getElementById("apolo_szervezett").value)*100)/100;

        szolgalatvezB += Math.round(parseFloat(document.getElementById("ICS_vezeto_betoltott").value)*100)/100;
        szolgalatvezB += Math.round(parseFloat(document.getElementById("mentotiszt_betoltott").value)*100)/100;
        szolgalatvezB += Math.round(parseFloat(document.getElementById("mentoapolo2_betoltott").value)*100)/100;
        szolgalatvezB += Math.round(parseFloat(document.getElementById("apolo_betoltott").value)*100)/100;

        gkvOsszSz += Math.round(parseFloat(document.getElementById("mentogepkocsivezeto_szervezett").value)*100)/100;
        gkvOsszSz += Math.round(parseFloat(document.getElementById("muszaki_gondnok_szervezett").value)*100)/100;
        gkvOsszSz += Math.round(parseFloat(document.getElementById("garazsmester_szervezett").value)*100)/100;

        gkvOsszB += Math.round(parseFloat(document.getElementById("mentogepkocsivezeto_betoltott").value)*100)/100;
        gkvOsszB += Math.round(parseFloat(document.getElementById("muszaki_gondnok_betoltott").value)*100)/100;
        gkvOsszB += Math.round(parseFloat(document.getElementById("garazsmester_betoltott").value)*100)/100;
        
        osszesSz += Math.round(parseFloat(document.getElementById("szakorvos_szervezett").value)*100)/100;
        osszesSz += Math.round(parseFloat(document.getElementById("orvos_mentotiszt_szervezett").value)*100)/100;
        osszesSz += Math.round(parseFloat(document.getElementById("mentoapolo_osszes_szervezett").value)*100)/100;
        osszesSz += Math.round(parseFloat(document.getElementById("allomasvezeto_szervezett").value)*100)/100;
        osszesSz += Math.round(parseFloat(document.getElementById("szervezett_gkv_osszesen").value)*100)/100;

        osszesB += Math.round(parseFloat(document.getElementById("szakorvos_betoltott").value)*100)/100;
        osszesB += Math.round(parseFloat(document.getElementById("orvos_mentotiszt_betoltott").value)*100)/100;
        osszesB += Math.round(parseFloat(document.getElementById("mentoapolo_osszes_betoltott").value)*100)/100;
        osszesB += Math.round(parseFloat(document.getElementById("allomasvezeto_betoltott").value)*100)/100;
        osszesB += Math.round(parseFloat(document.getElementById("betoltott_gkv_osszesen").value)*100)/100;            
        
        if (mentoapoloOsszB > mentoapoloOsszSz) {
            document.getElementById("mentoapolo_osszes_ures").style.color = "red";
        } else {
            document.getElementById("mentoapolo_osszes_ures").style.color = "black";
        }        

        if (szolgalatvezB > szolgalatvezSz) {
            document.getElementById("szolgalatvezeto_ures").style.color = "red";
        } else {
            document.getElementById("szolgalatvezeto_ures").style.color = "black";
        }

        if (gkvOsszB > gkvOsszSz) {
            document.getElementById("ures_gkv_osszesen").style.color = "red";
        } else {
            document.getElementById("ures_gkv_osszesen").style.color = "black";
        }

        if (osszesB > osszesSz) {
            document.getElementById("ures_allashely_osszesen").style.color = "red";
        } else {
            document.getElementById("ures_allashely_osszesen").style.color = "black";
        }

        setFormData(prev => ({
            ...prev,
            mentoapolo_osszes_szervezett: Math.round(mentoapoloOsszSz*100)/100,
            mentoapolo_osszes_betoltott: Math.round(mentoapoloOsszB*100)/100,
            mentoapolo_osszes_ures: Math.round((mentoapoloOsszSz - mentoapoloOsszB)*100)/100,
            szolgalatvezeto_szervezett: Math.round(szolgalatvezSz*100)/100,
            szolgalatvezeto_betoltott: Math.round(szolgalatvezB*100)/100,
            szolgalatvezeto_ures: Math.round((szolgalatvezSz - szolgalatvezB)*100)/100,
            szervezett_gkv_osszesen: Math.round(gkvOsszSz*100)/100,
            betoltott_gkv_osszesen: Math.round(gkvOsszB*100)/100,
            ures_gkv_osszesen: Math.round((gkvOsszSz - gkvOsszB)*100)/100,
            szervezett_allashely_osszesen: Math.round(osszesSz*100)/100,
            betoltott_allashely_osszesen: Math.round(osszesB*100)/100,
            ures_allashely_osszesen: Math.round((osszesSz - osszesB)*100)/100,
        }))
    }

    

    useEffect(() => {
        allashelyekOsszesitese();
    },[changes]);

    const updateAllashely = (id) => {
        const allashelyData = allashelyek.find(allashely => allashely.ID === id);
        setMode("update");
        resetSucess(); 
        setFormData(allashelyData);
        setChanges(changes + 1);
    }

    const cancelUpdate = () => {
        setMode("create")
        setFormData(INITIAL_STATE.formData);
    }

    const deleteAllashely = (id) => {
        axios.delete("/api/allashely/"+id)
        .then(data => {
            if (data.status === 204){
                setDeleted(true);
                getAllashelyek();
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

    const szamol = (min, max) => {
        let options = [];

        for (let i = min; i <= max; i++){
            options.push(<option value={i} key={i}>{i}</option>);
        }
        return options;
    }

    return(
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Szervezett és betöltött álláshelyek</h2>
            <Row>
                <Col lg={4} md={6} className="py-2">
                    <Form.Control type="hidden" name="ID" value={formData.ID} onChange={changeData} />
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
                            Év
                        </Form.Label>
                        <Form.Select name="ev" value={formData.ev} onChange={changeData} >
                            {szamol(2000, 2050)}                               
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Hónap
                        </Form.Label>
                        <Form.Select name="ho" value={formData.ho} onChange={changeData} >
                            {szamol(1, 12)}                      
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            
            {allasok.map((item) => {
                var nev_szervezett = item.db + "_szervezett";
                let ertek_szervezett = formData[nev_szervezett];
                let nev_betoltott = item.db + "_betoltott";
                let ertek_betoltott = formData[nev_betoltott];
                let nev_ures = item.db + "_ures";
                let ertek_ures = formData[nev_ures];
                return(
                    <Row key={item.db}>
                        <Col md={4} className="py-2">
                            <Form.Group>
                                <Form.Label>
                                    {item.name.charAt(0).toUpperCase() + item.name.substring(1)} szervezett
                                </Form.Label>
                                <Form.Control 
                                    id={nev_szervezett}
                                    name={nev_szervezett}
                                    value={ertek_szervezett || 0}
                                    step="0.01"
                                    type="number" 
                                    min={0}
                                    onKeyDown={(event) => {
                                        if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                            return;
                                        }
                                        if (!/[0-9,]/.test(event.key)) {
                                        event.preventDefault();
                                        }
                                    }}
                                    onChange={changeData}
                                />
                            </Form.Group>                                
                        </Col>
                        <Col md={4} className="py-2">
                            <Form.Group>
                                <Form.Label>
                                    {item.name.charAt(0).toUpperCase() + item.name.substring(1)} betöltött
                                </Form.Label>
                                <Form.Control
                                    id={nev_betoltott}
                                    name={nev_betoltott}
                                    value={ertek_betoltott || 0.0} 
                                    step="0.01"
                                    type="number" 
                                    min={0}
                                    onKeyDown={(event) => {
                                        if(event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace" || event.key == "Delete") {
                                            return;
                                        }
                                        if (!/[0-9,]/.test(event.key)) {
                                        event.preventDefault();
                                        }
                                    }}
                                    onChange={changeData}
                                />
                            </Form.Group>                                
                        </Col>
                        <Col md={4} className="py-2">
                            <Form.Group>
                                <Form.Label>
                                    {item.name.charAt(0).toUpperCase() + item.name.substring(1)} üres álláshely
                                </Form.Label>
                                <Form.Control
                                    id={nev_ures}
                                    name={nev_ures}
                                    value={ertek_ures || 0.0} 
                                    step="0.01"
                                    readOnly
                                    plaintext 
                                    type="text"
                                    onChange={changeData}
                                />
                            </Form.Group>                                
                        </Col>
                    </Row>
                )
            })}
            <Row>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Mentőápoló összes szervezett</strong>
                        </Form.Label>
                        <Form.Control 
                            readOnly
                            plaintext
                            id={"mentoapolo_osszes_szervezett"}
                            name={"mentoapolo_osszes_szervezett"}
                            type="text" 
                            value={formData.mentoapolo_osszes_szervezett}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Mentőápoló összes betöltött</strong>
                        </Form.Label>
                        <Form.Control
                            readOnly
                            plaintext 
                            id={"mentoapolo_osszes_betoltott"}
                            name={"mentoapolo_osszes_betoltott"}
                            type="text" 
                            value={formData.mentoapolo_osszes_betoltott}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Mentőápoló összes üres álláshely</strong>
                        </Form.Label>
                        <Form.Control
                            readOnly
                            plaintext 
                            id={"mentoapolo_osszes_ures"}
                            name={"mentoapolo_osszes_ures"}
                            type="text"
                            value={formData.mentoapolo_osszes_ures}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
			</Row> 
            <Row>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Szolgálatvezető összesen szervezett</strong>
                        </Form.Label>
                        <Form.Control 
                            readOnly
                            plaintext
                            id={"szolgalatvezeto_szervezett"}
                            name={"szolgalatvezeto_szervezett"}
                            type="text" 
                            value={formData.szolgalatvezeto_szervezett}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Szolgálatvezető összesen betöltött</strong>
                        </Form.Label>
                        <Form.Control
                            readOnly
                            plaintext 
                            id={"szolgalatvezeto_betoltott"}
                            name={"szolgalatvezeto_betoltott"}
                            type="text" 
                            value={formData.szolgalatvezeto_betoltott}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Szolgálatvezető összesen üres álláshely</strong>
                        </Form.Label>
                        <Form.Control
                            readOnly
                            plaintext 
                            id={"szolgalatvezeto_ures"}
                            name={"szolgalatvezeto_ures"}
                            type="text"
                            value={formData.szolgalatvezeto_ures}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
			</Row> 
            <Row>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Szervezett Gkv összesen</strong>
                        </Form.Label>
                        <Form.Control 
                            readOnly
                            plaintext
                            id={"szervezett_gkv_osszesen"}
                            name={"szervezett_gkv_osszesen"}
                            type="text" 
                            value={formData.szervezett_gkv_osszesen}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Betöltött Gkv összesen</strong>
                        </Form.Label>
                        <Form.Control
                            readOnly
                            plaintext 
                            id={"betoltott_gkv_osszesen"}
                            name={"betoltott_gkv_osszesen"}
                            type="text" 
                            value={formData.betoltott_gkv_osszesen}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Üres Gkv álláshely összesen</strong>
                        </Form.Label>
                        <Form.Control
                            readOnly
                            plaintext 
                            id={"ures_gkv_osszesen"}
                            name={"ures_gkv_osszesen"}
                            type="text"
                            value={formData.ures_gkv_osszesen}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
            </Row>
            <Row>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Szervezett álláshely összesen</strong>
                        </Form.Label>
                        <Form.Control 
                            readOnly
                            plaintext
                            id={"szervezett_allashely_osszesen"}
                            name={"szervezett_allashely_osszesen"}
                            type="text" 
                            value={formData.szervezett_allashely_osszesen}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Betöltött álláshely összesen</strong>
                        </Form.Label>
                        <Form.Control
                            readOnly
                            plaintext 
                            id={"betoltott_allashely_osszesen"}
                            name={"betoltott_allashely_osszesen"}
                            type="text" 
                            value={formData.betoltott_allashely_osszesen}
                            onChange={changeData}
                        />
                    </Form.Group>                                
                </Col>
                <Col md={4} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            <strong>Üres álláshely összesen</strong>
                        </Form.Label>
                        <Form.Control
                            readOnly
                            plaintext 
                            id={"ures_allashely_osszesen"}
                            name={"ures_allashely_osszesen"}
                            type="text"
                            value={formData.ures_allashely_osszesen}
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
                        Álláshely {mode === "create" ? "felvitele" : "módosítása"}
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
                        <a href="allashely/file-export" className="text-white text-uppercase fw-bold mx-3 text-decoration-none">
                            Adatok exportálása
                        </a>
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
                            <th>ID</th>
                            <th>Mentőállomás</th>
                            <th>Év</th>
                            <th>Hó</th>
                            {allasok.map((item) => {
                                return(
                                    <React.Fragment key={item.db}>
                                        <th key={item.db + "_szervezett"}>{item.name.charAt(0).toUpperCase() + item.name.substring(1)} szervezett</th>
                                        <th key={item.db + "_betoltott"}>{item.name.charAt(0).toUpperCase() + item.name.substring(1)} betöltött</th>
                                        <th key={item.db + "_ures"}>{item.name.charAt(0).toUpperCase() + item.name.substring(1)} üres</th>                          
                                    </React.Fragment>
                                )
                            })}
                            <th>Mentőápoló összes szervezett</th>
                            <th>Mentőápoló összes betöltött</th>
                            <th>Mentőápoló összes üres álláshely</th>
                            <th>Szolgálatvezető összesen szervezett</th>
                            <th>Szolgálatvezető összesen betöltött</th>
                            <th>Szolgálatvezető összesen üres álláshely</th>
                            <th>Gkv összesen szervezett</th>
                            <th>Gkv összesen betöltött</th>
                            <th>Gkv összesen üres álláshely</th>
                            <th>Összesen szervezett</th>
                            <th>Összesen betöltött</th>
                            <th>Összesen üres álláshely</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {allashelyek && allashelyek.map((allashely) => {
                            return(
                                <tr className="align-middle" key={allashely.ID}>
                                    <td>
                                        <PencilFill onClick={() => {updateAllashely(allashely.ID)}} style={{cursor: "pointer"}}/>
                                        <Trash3Fill onClick={() => {deleteAllashely(allashely.ID)}} style={{cursor: "pointer"}}/>
                                    </td>
                                    <td>{allashely.ID}</td>
                                    <td>{allashely.allomas.nev}</td>
                                    <td>{allashely.ev}</td>
                                    <td>{allashely.ho}</td>
                                    <td>{allashely.szakorvos_szervezett}</td>
                                    <td>{allashely.szakorvos_betoltott}</td>
                                    <td>{allashely.szakorvos_ures}</td>
                                    <td>{allashely.vezeto_mentotiszt_szervezett}</td>
                                    <td>{allashely.vezeto_mentotiszt_betoltott}</td>
                                    <td>{allashely.vezeto_mentotiszt_ures}</td>
                                    <td>{allashely.orvos_mentotiszt_szervezett}</td>
                                    <td>{allashely.orvos_mentotiszt_betoltott}</td>
                                    <td>{allashely.orvos_mentotiszt_ures}</td>
                                    <td>{allashely.foapolo_szervezett}</td>
                                    <td>{allashely.foapolo_betoltott}</td>
                                    <td>{allashely.foapolo_ures}</td>
                                    <td>{allashely.mentoapolo_szervezett}</td>
                                    <td>{allashely.mentoapolo_betoltott}</td>
                                    <td>{allashely.mentoapolo_ures}</td>                                    
                                    <td>{allashely.allomasvezeto_szervezett}</td>
                                    <td>{allashely.allomasvezeto_betoltott}</td>
                                    <td>{allashely.allomasvezeto_ures}</td>
                                    <td>{allashely.ICS_vezeto_szervezett}</td>
                                    <td>{allashely.ICS_vezeto_betoltott}</td>
                                    <td>{allashely.ICS_vezeto_ures}</td>
                                    <td>{allashely.mentotiszt_szervezett}</td>
                                    <td>{allashely.mentotiszt_betoltott}</td>
                                    <td>{allashely.mentotiszt_ures}</td>
                                    <td>{allashely.mentoapolo2_szervezett}</td>
                                    <td>{allashely.mentoapolo2_betoltott}</td>
                                    <td>{allashely.mentoapolo2_ures}</td>
                                    <td>{allashely.apolo_szervezett}</td>
                                    <td>{allashely.apolo_betoltott}</td>
                                    <td>{allashely.apolo_ures}</td>                                    
                                    <td>{allashely.apolo2_szervezett}</td>
                                    <td>{allashely.apolo2_betoltott}</td>
                                    <td>{allashely.apolo2_ures}</td>
                                    <td>{allashely.uzemgazdasz_szervezett}</td>
                                    <td>{allashely.uzemgazdasz_betoltott}</td>
                                    <td>{allashely.uzemgazdasz_ures}</td>
                                    <td>{allashely.uzemmernok_szervezett}</td>
                                    <td>{allashely.uzemmernok_betoltott}</td>
                                    <td>{allashely.uzemmernok_ures}</td>
                                    <td>{allashely.oktatas_szervezo_szervezett}</td>
                                    <td>{allashely.oktatas_szervezo_betoltott}</td>
                                    <td>{allashely.oktatas_szervezo_ures}</td>
                                    <td>{allashely.ugyintezo_szervezett}</td>
                                    <td>{allashely.ugyintezo_betoltott}</td>
                                    <td>{allashely.ugyintezo_ures}</td>
                                    <td>{allashely.adminisztrator_szervezett}</td>
                                    <td>{allashely.adminisztrator_betoltott}</td>
                                    <td>{allashely.adminisztrator_ures}</td>
                                    <td>{allashely.adatrogzito_szervezett}</td>
                                    <td>{allashely.adatrogzito_betoltott}</td>
                                    <td>{allashely.adatrogzito_ures}</td>
                                    <td>{allashely.autoszerelo_szakmunkas_szervezett}</td>
                                    <td>{allashely.autoszerelo_szakmunkas_betoltott}</td>
                                    <td>{allashely.autoszerelo_szakmunkas_ures}</td>
                                    <td>{allashely.karbantarto_szervezett}</td>
                                    <td>{allashely.karbantarto_betoltott}</td>
                                    <td>{allashely.karbantarto_ures}</td>
                                    <td>{allashely.kazanfuto_szervezett}</td>
                                    <td>{allashely.kazanfuto_betoltott}</td>
                                    <td>{allashely.kazanfuto_ures}</td>
                                    <td>{allashely.mentogepkocsivezeto_szervezett}</td>
                                    <td>{allashely.mentogepkocsivezeto_betoltott}</td>
                                    <td>{allashely.mentogepkocsivezeto_ures}</td>
                                    <td>{allashely.muszaki_gondnok_szervezett}</td>
                                    <td>{allashely.muszaki_gondnok_betoltott}</td>
                                    <td>{allashely.muszaki_gondnok_ures}</td>
                                    <td>{allashely.garazsmester_szervezett}</td>
                                    <td>{allashely.garazsmester_betoltott}</td>
                                    <td>{allashely.garazsmester_ures}</td>
                                    <td>{allashely.mentoapolo_osszes_szervezett}</td>
                                    <td>{allashely.mentoapolo_osszes_betoltott}</td>
                                    <td>{allashely.mentoapolo_osszes_ures}</td>
                                    <td>{allashely.szolgalatvezeto_szervezett}</td>
                                    <td>{allashely.szolgalatvezeto_betoltott}</td>
                                    <td>{allashely.szolgalatvezeto_ures}</td>
                                    <td>{allashely.szervezett_gkv_osszesen}</td>
                                    <td>{allashely.betoltott_gkv_osszesen}</td>
                                    <td>{allashely.ures_gkv_osszesen}</td>
                                    <td>{allashely.szervezett_allashely_osszesen}</td>
                                    <td>{allashely.betoltott_allashely_osszesen}</td>
                                    <td>{allashely.ures_allashely_osszesen}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        </Form>
    )    
}

export default Allashely;