import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";

const INITIAL_STATE = {
    formData: {
        IVIR: "",
        Vezetek_nev: "",
        Kereszt_nev: "",
        Jelszo: "",
        Vas: "",
        Gyor: "",
        Zala: "",
        Admin: "",
        Aktiv: ""
    },
}

function User (props) {    
    const [modified, setModified] = useState(false);
    const [user, setUser] = useState(INITIAL_STATE.formData);

    const bejelentkezettUser = 123456;
    
    const sendForm = () => {        
        axios.put('/api/user/'+user.IVIR, user)
        .then(data => {
            if (data.status === 200){               
                setModified(true);
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
            getUser();           
        })
    }    

    const resetSucess = () => {
        if (modified){
            setModified(false);
        }
    }

    const changePassWord = (event) => {
        resetSucess();
        setUser(prev => ({
            ...prev,
            Jelszo: event.target.value
        }))
    }

    const getUser = async () => {
        const response = await axios.get('/api/user/'+bejelentkezettUser);
        if (response.status === 200) {
            setUser(response.data);
        }
    }

    useEffect(() => {
        getUser();
    }, []);
    
    return(
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Saját adatok</h2>
            <Row>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            IVIR
                        </Form.Label>
                        <Form.Control disabled type="text" value={user.IVIR} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2" >
                    <Form.Group>
                        <Form.Label>
                            Vezetéknév
                        </Form.Label>
                        <Form.Control disabled type="text" value={user.Vezetek_nev} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Keresztnév
                        </Form.Label>
                        <Form.Control disabled type="text" value={user.Kereszt_nev} />
                    </Form.Group>
                </Col>                
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Jelszó
                        </Form.Label>
                        <Form.Control type="text" value={user.Jelszo} onChange={(event) => {changePassWord(event)}} />
                    </Form.Group>
                </Col>         
                <Col lg={4} md={6} className="py-2 align-items-center d-flex">
                    <Form.Check                                    
                        type="switch"                        
                        label="Vas megye"
                        disabled
                        checked={user.Vas}
                    />
                </Col>
                <Col lg={4} md={6} className="py-2 align-items-center d-flex">
                    <Form.Check                                    
                        type="switch"                        
                        label="Győr-Moson-Sopron megye"
                        disabled
                        checked={user.Gyor}
                    />
                </Col>
                <Col lg={4} md={6} className="py-2 align-items-center d-flex">
                    <Form.Check                                    
                        type="switch"                        
                        label="Zala megye"
                        disabled
                        checked={user.Zala}
                    />
                </Col>      
                <Col lg={4} md={6} className="py-2">
                    <Form.Check
                        type="switch"                        
                        label="Admin"
                        disabled
                        checked={user.Admin}
                        
                    />
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Check
                        type="switch"                        
                        label="Aktív"
                        disabled
                        checked={user.Aktiv}
                        
                    />
                </Col>                    
            </Row>
            <Row className="p-4">
                <Col lg={12} className="justify-content-center d-flex">
                    <Button 
                        variant="info" 
                        className="text-white text-uppercase fw-bold mx-2"
                        onClick={sendForm}
                    >
                    Jelszó módosítása
                    </Button>
                </Col>                    
            </Row>
                {modified && (
                    <Alert variant="primary" className="mt-3">
                        Sikeres módosítás!
                    </Alert>
                )} 
        </Form>
    )
}

export default User;