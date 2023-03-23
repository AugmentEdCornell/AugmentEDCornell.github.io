import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './EdboardLogin.css'
import { useNavigate } from "react-router-dom";

function EdboardLogin () {

    let nav = useNavigate(); 
    const edboard = () => { 
        let path = '/edboard'; 
        nav(path);
    }

    return (
        <Container fluid>
            <Row className="pt-5">
                <h2 className='mb-4 heading'>Educator Dashboard</h2>
            </Row>

            <Form className="ms-4 p-5">
                <Form.Group controlId="pin">
                    <Form.Label>ENTER PIN</Form.Label>
                    <Form.Control type="password" placeholder="Enter pin here" className="pin" />
                </Form.Group>

                <Button onClick={edboard} className="edLoginButton pt-2 pb-2 ps-4 pe-4 mt-5" type="submit">
                        Login
                </Button>
            </Form>
        </Container>
    );
}

export default EdboardLogin;