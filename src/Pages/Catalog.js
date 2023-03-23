import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import cell from './components/assets/cell.png'
import digestive_system from './components/assets/digestive-system.png'
import lock from './components/assets/padlock.png'
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './Catalog.css'

function Catalog () {

    let nav = useNavigate(); 
    const edboard_login = () => { 
        let path = '/edboardLogin'; 
        nav(path);
    }

    const product = () => { 
        let path = '/product';
        nav(path);
    }
    return (
        <Container fluid>
            <Row className="pt-5">
                <h2 className='mb-4 heading'>Biology</h2>
            </Row>
            <Row className="ms-5">
                <Col onClick={product} md={2} className="justify-content-center p-4 m-2 topic">
                    <Image src={cell} alt="Cell Biology" fluid/>
                    <p className="text-center mt-3"><b>Cell Biology</b></p>
                </Col>
                <Col md={2} className="locked justify-content-center p-4 m-2">
                    <Image src={lock} alt="locked" className="lock"/>
                    <Image src={digestive_system} alt="Digestive System" fluid/>
                    <p className="text-center mt-3"><b>Digestive System</b></p>
                </Col>
            </Row>
            <Row>
                <Button onClick={edboard_login} className="edButton pt-2 pb-2 ps-4 pe-4 mt-5" type="submit">
                    Educator Dashboard
                </Button>
            </Row>
        </Container>
    );
}

export default Catalog;