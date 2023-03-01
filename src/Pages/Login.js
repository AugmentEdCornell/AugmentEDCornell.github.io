import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import './Login.css'
import Google from './components/assets/google.png'

function Login () {

    let navigate = useNavigate(); 
    const register = () => { 
        let path = '/register'; 
        navigate(path);
    }

    let nav = useNavigate(); 
    const product = () => { 
        let path = '/product'; 
        nav(path);
    }

    return (
        <Container className="login">
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

                    <Form.Group className="mt-3 text-end">
                        <p>Forgot Password?</p>
                    </Form.Group>
      
                    <Button onClick={product} className="mt-5 ms-auto me-auto ps-4 pe-4 pt-2 pb-2 loginButton" type="submit">
                        Login
                    </Button>
                </Form>
            </Row>
            <Row>
                <p className="text-center"><b>OR</b></p>
            </Row>
            <Row className="m-5 justify-content-center">
                <Col md="auto">
                    <Image src={Google} className="google" />
                </Col>
                <Col md="auto">
                    <p className="text-center gsign">Sign in using your Google Account</p>
                </Col>
            </Row>
            <Row className="m-5">
                <Button onClick={register} className="ps-4 pe-4 pt-2 pb-2 mt-3 mb-5 ms-auto me-auto signup">
                    Create new account
                </Button>
            </Row>
        </Container>
    );
}

export default Login