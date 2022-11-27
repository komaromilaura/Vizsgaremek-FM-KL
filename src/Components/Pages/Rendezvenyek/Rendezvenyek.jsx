import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { megyek } from "../../../Utils/data.js";
import { oraBerek } from "../../../Utils/data.js";
import { gkTipusok } from "../../../Utils/data.js";

class Rendezvenyek extends Component {
    constructor(props){
        super(props)

        this.state = {
            munkakor: "orvos",
            teljOra: 0,
            alapber: 0,
            alapber1ora: 0,
            oradijas: 0,
            berPluszPotlek: 0,
            osszesBer: 0,
            TBJarulek: 0,
            berktgOsszesen: 0,
            gk: "",
            kmKtg: 0,
            teljKm: 0
        }
    }

    szamolOradijasOsszeg(){
        const {
            munkakor,
            teljOra,
            oradijas,
        } = this.state;

        const keresettMK = oraBerek.find((item) => {
            return item.munkakor === munkakor});
            if (typeof(keresettMK) !== "undefined" && keresettMK !== null) {
                this.setState({
                    oradijas: keresettMK.ber * teljOra
                },
                    this.szamolOsszesBer,
                ); 
            }
        return oradijas;
    }

    szamolOsszesBer(){
        const {
            oradijas,
            berPluszPotlek,
            osszesBer
        } = this.state;

        this.setState({
                osszesBer: oradijas + berPluszPotlek
            },
                this.szamolTBjar
            );
        return osszesBer;
    }

    szamolTBjar(){
        const {
            osszesBer,
            TBJarulek
        } = this.state;

        this.setState({
                TBJarulek: (osszesBer * 0.155)
            },
                this.szamolBerktg
            );
        return TBJarulek;
    }

    szamolBerktg() {
        const {
            osszesBer,
            TBJarulek,
            berktgOsszesen
        } = this.state;

        this.setState({
            berktgOsszesen: osszesBer + TBJarulek
        });

        return berktgOsszesen;
    }

    szamolKmKtg(){
        const {
            gk,
            kmKtg,
            teljKm,
        } = this.state;

        const keresettGk = gkTipusok.find((item) => {
            return item.tipus === gk});
        if (typeof(keresettGk) !== "undefined" && keresettGk !== null) {
            this.setState({
                kmKtg: keresettGk.ktg * teljKm
            }); 
        }
        return kmKtg;
    }

    render(){
        const {
            munkakor,
            teljOra,
            alapber,
            alapber1ora,
            oradijas,
            berPluszPotlek,
            osszesBer,
            TBJarulek,
            berktgOsszesen,
            gk,
            kmKtg,
            teljKm
        } = this.state;

        return(
            <Form className="p-3 min-vh-100">
                <h2 className="text-center text-decoration-underline p-2">Térítés nélküli rendezvények egészségügyi biztosításának költségei</h2>
                <Row>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Dolgozó neve 
                            </Form.Label>
                            <Form.Select defaultValue="">
                                <option value="" disabled>Válasszon dolgozót!</option>
                                {/*A dolgozók listáját az adatbázisba felvitt dolgozókkal gondoltam feltölteni.*/}                
                                <option value="">Földháti Marina</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={8} md={6} className="py-2 d-flex align-items-end">
                        <Form.Group>
                            <Link to="/dolgozo">
                                <Button variant="info" className="text-white text-uppercase fw-bold">
                                    Új dolgozó felvitele
                                </Button>
                            </Link>
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Mentőállomás
                            </Form.Label>
                            <Form.Control disabled type="text" />
                            {/* A kiválasztott dolgozóhoz tartozó mentőállomás betöltődik
                            az adatbázisból.*/}
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Munkakör
                            </Form.Label>
                            <Form.Control 
                                //disabled 
                                type="text"
                                value={munkakor}
                                onChange={((event) => {                                    
                                    this.setState({
                                        munkakor: event.target.value,
                                    },
                                        this.szamolOradijasOsszeg
                                    )                                    
                                })}
                            />
                            {/* A kiválasztott dolgozóhoz tartozó munkakör betöltődik
                            az adatbázisból.*/}
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Adóazonosító jel
                            </Form.Label>
                            <Form.Control disabled type="text" />
                            {/* A kiválasztott dolgozóhoz tartozó adóazonosító jel betöltődik
                            az adatbázisból.*/}
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Törzsszám
                            </Form.Label>
                            <Form.Control disabled type="text" />
                            {/* A kiválasztott dolgozóhoz tartozó törzszám betöltődik
                            az adatbázisból.*/}
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                IVIR
                            </Form.Label>
                            <Form.Control disabled type="text" />
                            {/* A kiválasztott dolgozóhoz tartozó IVIR betöltődik
                            az adatbázisból.*/}
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Mozgóőrség helyszíne
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Mozgóőrség elnevezése
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Mozgóőrség dátuma
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Mozgóőrség időpontja
                            </Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Telj. óra
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                min={0}
                                value={teljOra}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }}  
                                onChange={((event) => {
                                    this.setState({
                                        teljOra: parseInt(event.target.value)
                                    },
                                        this.szamolOradijasOsszeg
                                    )                                    
                                })}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>
                                Alapbér
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                min={0}
                                value={alapber}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }} 
                                onChange={(event) => {
                                    this.setState({
                                        alapber: parseInt(event.target.value),
                                        alapber1ora: alapber / 174
                                    })                                    
                                }}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                Alapbér 1 órára
                            </Form.Label>
                            <Form.Control 
                                readOnly
                                plaintext 
                                type="text"
                                value={alapber1ora}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                100% (kollektív)
                            </Form.Label>

                            {/*Az excel táblában a képletben 2014-es dátumok vannak, kell még ez a számolás 2022-ben
                            vagy csak bent maradt valami régi adat?*/}

                            <Form.Control 
                                type="number" 
                                min={0}
                                defaultValue={0}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }} 
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                20%-os óra
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                min={0}
                                defaultValue={0}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }} 
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                50%-os óra
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                min={0}
                                defaultValue={0}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }} 
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                Pótlék összeg
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                min={0}
                                defaultValue={0}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }} 
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                Bér + pótlék
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                min={0}
                                value={berPluszPotlek}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }}
                                onChange={(event) => {
                                    this.setState({
                                        berPluszPotlek: parseInt(event.target.value),
                                    },
                                        this.szamolOsszesBer
                                    );
                                }}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                Óradíjas összeg
                            </Form.Label>
                            <Form.Control 
                                readOnly
                                plaintext 
                                type="text"
                                value={oradijas}                         
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                ÖSSZES BÉR kifizetett
                            </Form.Label>
                            <Form.Control 
                                readOnly
                                plaintext 
                                type="text"
                                value={osszesBer}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                TB járulék
                            </Form.Label>
                            <Form.Control 
                                readOnly
                                plaintext 
                                type="text"
                                value={TBJarulek}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                Bérköltség összesen
                            </Form.Label>
                            <Form.Control 
                                readOnly
                                plaintext 
                                type="text"
                                value={berktgOsszesen}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                Teljesített km
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                min={0}
                                value={teljKm}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }} 
                                onChange={((event) => {
                                    this.setState({
                                        teljKm: parseInt(event.target.value)
                                    },
                                        this.szamolKmKtg
                                    )                                    
                                })}

                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                Km költség
                            </Form.Label>
                            <Form.Control 
                                readOnly
                                plaintext 
                                type="text"
                                value={kmKtg}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                Elszámolás
                            </Form.Label>
                            <Form.Control 
                                type="number" 
                                min={0}
                                defaultValue={0}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }} 
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} md={6} className="py-2">
                        <Form.Group>
                            <Form.Label>        
                                Gk.
                            </Form.Label>
                            <Form.Select 
                                value={gk}
                                onChange={(event) => {
                                    this.setState({
                                        gk: event.target.value
                                    },
                                        this.szamolKmKtg
                                    );
                                }}
                                >
                                <option value="" disabled>Válasszon a listából!</option>
                                {gkTipusok.map((item) => {
                                    return(
                                        <option value={item.tipus} key={item.tipus}>
                                            {item.tipus}
                                        </option>
                                    )
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col lg={12} className="justify-content-center d-flex mb-3">
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                            Rendezvény felvitele
                        </Button>
                        <Button variant="info" className="text-white text-uppercase fw-bold mx-2">
                            Rendezvények listázása
                        </Button>
                    </Col>
                    <Col lg={12} className="justify-content-center d-flex mb-3">
                        {/*Adatbázisból xls / csv - be ?? kilistázza a felvitt rendezvényeket.*/}                           
                        {megyek.map((megye) => {
                            return(
                                <Button variant="info" className="text-white text-uppercase fw-bold mx-2" key={megye}>
                                    {megye} megye adatai
                                </Button>
                            )
                        })}                                
                    </Col>                    
                </Row>
            </Form>
        )
    }
}

export default Rendezvenyek;