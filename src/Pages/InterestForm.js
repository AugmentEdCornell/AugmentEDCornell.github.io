import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import './Register.css'
import SubscriptionPlans from "./components/SubscriptionPlans";
import { auth, db} from './firebase.js'
import { ref, set } from 'firebase/database';
import { useState } from "react";

function InterestForm () {

    console.log(auth.currentUser.email)

    let navigate = useNavigate(); 
    const login = (e) => { 
        e.preventDefault();
        const form = document.getElementById("registerForm")
        const firstName = form.elements.firstName.value
        const lastName = form.elements.lastName.value
        const emailAddress = auth.currentUser.email
        const accountType = form.elements.accountType.value
        const subscriptionType = form.elements.subscriptionType.value
        const updates = form.elements.updates.value
        if (firstName === "") {
            alert("Please enter first name.")
        }
        else if (lastName === "") {
            alert("Please enter last name.")
        }
        else {
            set(ref(db, 'Augmented Users/' + auth.currentUser.uid), {
                firstName: firstName,
                lastName: lastName,
                accountType: accountType,
                emailAddress: emailAddress,
                subscriptionType: subscriptionType,
                updates: updates
            })
            console.log(firstName, lastName, emailAddress, accountType, subscriptionType, updates)
            let path = '/catalog'; 
            navigate(path);
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
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </Container>
    );
}

export default InterestForm;