import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import './Register.css'

function Register () {

    let navigate = useNavigate(); 
    const login = () => { 
        let path = '/login'; 
        navigate(path);
    }

    return (
        <Container className="register">
            <Row>
                <Form className="p-5">
                    <Form.Group controlId="emailAddress">
                        <Form.Label>EMAIL ADDRESS</Form.Label>
                        <Form.Control type="email" placeholder="Enter E-mail Address" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="password">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="confirmPassword">
                        <Form.Label>CONFIRM PASSWORD</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
      
                    <Button onClick={login} className="mt-5 ms-auto me-auto ps-4 pe-4 pt-2 pb-2 registerButton" type="submit">
                        Register
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}

export default Register