import { Button, Card, Col, Form, Row } from "react-bootstrap";
import style from "./Style/Login.module.scss";
import { useState } from "react";
import useAuthContext from "../../Context/AuthContext";

const Login = () => {
    const [IVIR, setIVIR] = useState("");
    const [password, setPassword] = useState("");   
    const { login, errors} = useAuthContext();
    
    const handleLogin = async (event) => {
        event.preventDefault();
        login({ IVIR, password })
    }

    return (        
        <Form className="p-3 min-vh-100" onSubmit={handleLogin}>
            <Card className="w-75 m-auto mt-4">
                <Card.Header className={`${style.fejlec}`}>
                    <h2 className="text-center text-decoration-underline p-2">
                        Bejelentkezés
                    </h2>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg={12} md={12} className="py-2">
                            <Form.Group>
                                <Form.Label>
                                    IVIR
                                </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={IVIR}
                                    onChange={(e) => {
                                        setIVIR(e.target.value);
                                    }}
                                />
                                {errors.IVIR && (
                                    <Form.Text className="text-danger">
                                        {errors.IVIR[0]}
                                    </Form.Text>
                                )}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} className="py-2">
                            <Form.Group>
                                <Form.Label>
                                    Jelszó
                                </Form.Label>
                                <Form.Control 
                                    type="password" 
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}} 
                                />
                                {errors.password && (
                                    <Form.Text className="text-danger">
                                        {errors.password[0]}
                                    </Form.Text>
                                )}
                            </Form.Group>
                        </Col>      
                    </Row>
                </Card.Body>
                <Card.Footer className="justify-content-center d-flex">
                    <Button 
                        type="submit" 
                        variant="info" 
                        className="text-white text-uppercase fw-bold mx-2"
                    >
                        Bejelentkezés
                    </Button>
                </Card.Footer>
            </Card>  
        </Form>        
    )
}

export default Login;