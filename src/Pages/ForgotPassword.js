import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";   
import { auth } from "./firebase";
import { sendPasswordResetEmail } from "firebase/auth";


function ForgotPassword () {

    const forgotPass = (e) => {
        e.preventDefault();
        const form = document.getElementById("resetForm")
        const emailAddress = form.elements.emailAddress.value
        sendPasswordResetEmail(auth, emailAddress)
            .then(() => {
                alert("Password reset email has been sent.")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === "auth/user-not-found") {
                    alert("Account not found.")
                }
                if (errorCode === "auth/invalid-email") {
                    alert("Invalid email address. Please check and submit again.")
                }
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <Container className="login">
            <Row>
                <Form className="p-5" id="resetForm">
                    <Form.Group controlId="emailAddress">
                        <Form.Label>EMAIL ADDRESS</Form.Label>
                        <Form.Control type="email" placeholder="Enter E-mail Address" />
                        <Form.Text className="text-muted">
                            We'll send you an email to reset your password.
                        </Form.Text>
                    </Form.Group>

                    <Button onClick={forgotPass} className="mt-5 ms-auto me-auto ps-4 pe-4 pt-2 pb-2 loginButton" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}

export default ForgotPassword;