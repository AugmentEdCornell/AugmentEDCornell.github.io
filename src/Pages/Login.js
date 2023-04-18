import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import './Login.css'
import Google from './components/assets/google.png'
import { auth, provider } from './firebase.js'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login () {

    let navigate = useNavigate(); 
    const register = () => { 
        let path = '/register'; 
        navigate(path);
    }

    let nav = useNavigate(); 
    const catalog = (e) => { 
        e.preventDefault();
        const form = document.getElementById("loginForm")
        const email = form.elements.emailAddress.value
        const password = form.elements.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential => {
                const user = userCredential.user
                console.log(user)
                let path = '/catalog'; 
                nav(path);
            }))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === "auth/invalid-email") {
                    alert("Invalid email address. Please check and enter again.")
                }
                else if (errorCode === "auth/user-not-found") {
                    alert("Email address not registered. Please create a new account before proceeding.")
                }
                else if (errorCode === "auth/missing-password") {
                    alert("Please enter password")
                }
                else if (errorCode === "auth/wrong-password") {
                    alert("Incorrect password. Please check and try again.")
                }
                console.log(errorCode, errorMessage)
            })
    }

    const googleSignIn = () => {
        console.log("GSign")
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(token, user)
                let path = '/interestForm'; 
                nav(path);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
            })
    }
    
    return (
        <Container className="login">
            <Row>
                <Form className="p-5" id="loginForm">
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
                        <a href='/forgotPassword'>Forgot Password?</a>
                    </Form.Group>
      
                    <Button onClick={catalog} className="mt-5 ms-auto me-auto ps-4 pe-4 pt-2 pb-2 loginButton" type="submit">
                        Login
                    </Button>
                </Form>
            </Row>
            <Row>
                <p className="text-center"><b>OR</b></p>
            </Row>
            <Row className="m-5 googleSignIn justify-content-center" onClick={googleSignIn}>
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