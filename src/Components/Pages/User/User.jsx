import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

class User extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Form className="p-3 min-vh-100">
                <h2 className="text-center text-decoration-underline p-2">Saját adatok</h2>
                <Row>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                IVIR
                            </Form.Label>
                            <Form.Control disabled type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Vezetéknév
                            </Form.Label>
                            <Form.Control disabled type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Keresztnév
                            </Form.Label>
                            <Form.Control disabled type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Megye
                            </Form.Label>
                            <Form.Control disabled type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Jelszó
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="p-4">
                    <Col lg={12} className="justify-content-center d-flex">
                    <Button variant="info" className="text-white text-uppercase fw-bold">
                        Jelszó módosítása
                    </Button>
                    </Col>                    
                </Row>
            </Form>
        )
    }
}

export default User;