import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Row, Table } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";

function Migrans(props) {
    const [migransEllatas, setMigransEllatas] = useState([]);
    const [megyek, setMegyek] = useState([]);
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [modified, setModified] = useState(false);
    const [mode, setMode] = useState('create');

    const ID = useRef();
    const megyeID = useRef();
    const ev = useRef();
    const honap = useRef();
    const fo = useRef();
    const megtett_km = useRef();

    const clearForm = () => {
        ID.current.value = "";
        megyeID.current.value = "-1";
        ev.current.value = "2023";
        honap.current.value = "";
        fo.current.value = "";
        megtett_km.current.value = "";
}

    const sendForm = () => {
        if (mode === "create") {                        
            axios.post('/api/migrans', {
                megyeID: megyeID.current.value,
                ev: ev.current.value,
                honap: honap.current.value,
                fo: fo.current.value,
                megtett_km: megtett_km.current.value,
            }).then(data => {
                if (data.status === 201){
                    clearForm();
                    setSuccess(true);
                    getMigransEllatas();
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
            axios.put('/api/migrans/'+ID.current.value,{               
                megyeID: megyeID.current.value,
                ev: ev.current.value,
                honap: honap.current.value,
                fo: fo.current.value,
                megtett_km: megtett_km.current.value,
            }).then(data => {
                if (data.status === 200){
                    clearForm();
                    setModified(true);
                    getMigransEllatas();
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

    const getMigransEllatas = async () => {
        const response = await axios.get('/api/migrans');
        if (response.status === 200) {
            setMigransEllatas(response.data);
        }
    }

    useEffect(() => {
        getMigransEllatas();
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

    const updateMigransEllatas = (id) => {
        const migransData = migransEllatas.find(migrans => migrans.ID === id);
        setMode("update");
        resetSucess();       
        ID.current.value = migransData.ID;
        megyeID.current.value = migransData.megyeID;
        ev.current.value = migransData.ev;
        honap.current.value = migransData.honap;
        fo.current.value = migransData.fo;
        megtett_km.current.value = migransData.megtett_km;     
    }

    const cancelUpdate = () => {
        setMode("create")
        clearForm();
    }

    const deleteMigransEllatas = (id) => {
        axios.delete("/api/migrans/"+id)
        .then(data => {
            if (data.status === 204){
                setDeleted(true);
                getMigransEllatas();
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
            <h2 className="text-center text-decoration-underline p-2">Migránsellátás</h2>
            <Row>
                <Col lg={4} md={6} className="py-2">
                    <Form.Control type="hidden" ref={ID} />
                    <Form.Group>
                        <Form.Label>
                            Megye
                        </Form.Label>
                        <Form.Select defaultValue="-1" ref={megyeID} onChange={resetSucess} >
                            <option value="-1" disabled>Válasszon megyét!</option>
                            {megyek && megyek.map((megye) => {
                                return(
                                    <option value={megye.ID} key={megye.ID}>
                                        {megye.ID}. {megye.megye_nev}
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
                        <Form.Select ref={honap} onChange={resetSucess} >
                            {szamol(1, 12)}                      
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Ellátott migráns (fő)
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
                            ref={fo}
                            onChange={resetSucess} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Megtett kilométer
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
                            ref={megtett_km}
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
                        Migránsellátás {mode === "create" ? "felvitele" : "módosítása"}
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
                        <a href="migrans/file-export" className="text-white text-uppercase fw-bold mx-3 text-decoration-none">
                            Adatok exportálása
                        </a>
                    </Button> 
                </Col>
                <Col lg={12} className="justify-content-center d-flex mb-3">
                    {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt migránsellátásokat.*/}                           
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
                            <th>Megye</th>
                            <th>Év</th>
                            <th>Hónap</th>
                            <th>Ellátott migráns (fő)</th>
                            <th>Megtett kilométer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {migransEllatas && migransEllatas.map((ellatas) => {
                            return(
                                <tr className="align-middle" key={ellatas.ID}>
                                    <td>
                                        <PencilFill 
                                            onClick={() => {updateMigransEllatas(ellatas.ID)}} 
                                            style={{cursor: "pointer"}}
                                            className="me-2"
                                        />
                                        <Trash3Fill 
                                            onClick={() => {deleteMigransEllatas(ellatas.ID)}} 
                                            style={{cursor: "pointer"}}
                                        />
                                    </td>
                                    <td>{ellatas.ID}</td>
                                    <td>{ellatas.megye.megye_nev}</td>
                                    <td>{ellatas.ev}</td>
                                    <td>{ellatas.honap}</td>
                                    <td>{ellatas.fo}</td>
                                    <td>{ellatas.megtett_km}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>          
        </Form>
    )
}

export default Migrans;