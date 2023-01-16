import axios from "../../../api/axios_sajat";
import { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import useAuthContext from "../../Context/AuthContext";

function User (props) {    
    const [modified, setModified] = useState(false);
    const {user, getUser} = useAuthContext();
    const [passwd, setPasswd] = useState("");
    
    const sendForm = () => {        
        axios.put('/api/user/'+user.IVIR, {'password': passwd})
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
        setPasswd(event.target.value);
    }
    
    return(
        <Form className="p-3 min-vh-100">
            <h2 className="text-center text-decoration-underline p-2">Saját adatok</h2>
            <Row>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            IVIR
                        </Form.Label>
                        <Form.Control disabled type="text" value={user !== null ? user.IVIR : ""} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2" >
                    <Form.Group>
                        <Form.Label>
                            Vezetéknév
                        </Form.Label>
                        <Form.Control disabled type="text" value={user !== null ? user.Vezetek_nev : ""} />
                    </Form.Group>
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Keresztnév
                        </Form.Label>
                        <Form.Control disabled type="text" value={user !== null ? user.Kereszt_nev : ""} />
                    </Form.Group>
                </Col>                
                <Col lg={4} md={6} className="py-2">
                    <Form.Group>
                        <Form.Label>
                            Jelszó
                        </Form.Label>
                        <Form.Control 
                            type="password" 
                            value={passwd} 
                            onChange={(event) => {changePassWord(event)}} 
                            />
                    </Form.Group>
                </Col>         
                <Col lg={4} md={6} className="py-2 align-items-center d-flex">
                    <Form.Check                                    
                        type="switch"                        
                        label="Vas megye"
                        disabled
                        checked={user !== null ? user.Vas : 0}
                    />
                </Col>
                <Col lg={4} md={6} className="py-2 align-items-center d-flex">
                    <Form.Check                                    
                        type="switch"                        
                        label="Győr-Moson-Sopron megye"
                        disabled
                        checked={user !== null ? user.Gyor : 0}
                    />
                </Col>
                <Col lg={4} md={6} className="py-2 align-items-center d-flex">
                    <Form.Check                                    
                        type="switch"                        
                        label="Zala megye"
                        disabled
                        checked={user !== null ? user.Zala : 0}
                    />
                </Col>      
                <Col lg={4} md={6} className="py-2">
                    <Form.Check
                        type="switch"                        
                        label="Admin"
                        disabled
                        checked={user !== null ? user.Admin : 0}
                        
                    />
                </Col>
                <Col lg={4} md={6} className="py-2">
                    <Form.Check
                        type="switch"                        
                        label="Aktív"
                        disabled
                        checked={user !== null ? user.Aktiv : 0}
                        
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