import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import './Register.css'
import SubscriptionPlans from "./components/SubscriptionPlans";
import { auth, db} from './firebase.js'
import { ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function Register () {

    let navigate = useNavigate(); 
    const login = (e) => { 
        e.preventDefault();
        const form = document.getElementById("registerForm")
        const firstName = form.elements.firstName.value
        const lastName = form.elements.lastName.value
        const accountType = form.elements.accountType.value
        const emailAddress = form.elements.emailAddress.value
        const password = form.elements.password.value
        const confirmPassword = form.elements.confirmPassword.value
        const subscriptionType = form.elements.subscriptionType.value
        const updates = form.elements.updates.value
        if (firstName === "") {
            alert("Please enter first name.")
        }
        else if (lastName === "") {
            alert("Please enter last name.")
        }
        else {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(auth, emailAddress, password)
                    .then((userCredential) => {
                        set(ref(db, 'Augmented Users/' + firstName + " " + lastName), {
                            accountType: accountType,
                            emailAddress: emailAddress,
                            subscriptionType: subscriptionType,
                            updates: updates
                        })
                        console.log(firstName, lastName, accountType, emailAddress, password, confirmPassword, subscriptionType, updates)
                        let path = '/catalog'; 
                        navigate(path);
                })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        if (errorCode === "auth/email-already-in-use") {
                            alert("Email already exists. Please login or choose a different email address.")
                        }
                        else if (errorCode === "auth/weak-password") {
                            alert("Password must be alteast 6 characters.")
                        }
                        else if (errorCode === "auth/missing-password") {
                            alert("Please enter password")
                        }
                        else if (errorCode === "auth/invalid-email") {
                            alert("Invalid email address. Please check and enter again.")
                        }
                        else {
                            alert(error)
                        }
                        console.log(errorCode, errorMessage)
                });
            }
            else {
                alert("Passwords do not match. Please check and enter again.")
            }
        }
    }

    const [checked, setChecked] = useState(false); 

  const checkVal = () => {
    setChecked(!checked)
  }

  
    return (
        <Container>
            <h1 className="head text-center">Subscription Plans</h1>
            <SubscriptionPlans className="m-5"/>
            <h1 className="head_if text-center">Interest Form</h1>
            <Container className="register mt-5 mb-5">
                <Row>
                    <Form className="p-5" id="registerForm">

                        <Form.Group controlId="firstName">
                            <Form.Label>FIRST NAME</Form.Label>
                            <Form.Control type="text" placeholder="First name" />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="lastName">
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="accountType">
                            <Form.Label>ACCOUNT TYPE</Form.Label>
                            <Form.Select>
                                <option>Educator</option>
                                <option>Parent</option>
                                <option>Student</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="emailAddress">
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

                        <Form.Group className="mt-3" controlId="subscriptionType">
                            <Form.Label>SUBSCRIPTION PACK</Form.Label>
                            <Form.Select>
                                <option>Individual</option>
                                <option>Classroom</option>
                                <option>School</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                                We won't charge you right now. We're only storing your preferences.
                            </Form.Text>
                        </Form.Group >

                        <Form.Group className="mt-3" controlId="updates">
                            <Form.Check type="checkbox" label="Subscribe to AugmentED Notifcations" value={checked} onChange={checkVal}/>
                            <Form.Text className="text-muted">
                                We'll notify you about product launch and special discounts. We'll never spam you!
                            </Form.Text>
                        </Form.Group>
        
                        <Button onClick={login} className="mt-5 ms-auto me-auto ps-4 pe-4 pt-2 pb-2 registerButton" type="submit">
                            Register
                        </Button>
                    </Form>
                </Row>
            </Container>
        </Container>
    );
}

export default Register