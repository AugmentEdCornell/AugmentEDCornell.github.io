import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './SubscriptionPlans.css'

function SubscriptionPlans () {
    return (
        <Container fluid>
            <Row className="justify-content-center mt-5">
                <Col md={3} className="planCard one p-4 me-3 mb-5">
                    <h5><b>INDIVIDUAL</b></h5>
                    <br></br>
                    <ul className="list">
                        <li>
                            Access to all modules
                        </li>
                        <li>
                            1 eductor account,
                            <br></br>
                            1 student account
                        </li>
                        <li>
                            Real-time individual statistics
                        </li>
                    </ul>
                    <br></br>
                    <h3 className="price"><b>$15</b></h3>
                    <p><i>per month</i></p>
                </Col>
                <Col md={3} className="planCard two p-4 ms-3 me-3 mb-5">
                    <h5><b>CLASSROOM</b></h5>
                    <br></br>
                    <ul className="list">
                        <li>
                            Access to all modules
                        </li>
                        <li>
                            1 educator account,
                            <br></br>
                            20 student accounts
                        </li>
                        <li>
                            Real-time classroom statistics
                        </li>
                    </ul>
                    <br></br>
                    <h3 className="price"><b>$29</b></h3>
                    <p><i>per month</i></p>
                </Col>
                <Col md={3} className="planCard three p-4 ms-3 me-3 mb-5">
                    <h5><b>SCHOOLS</b></h5>
                    <br></br>
                    <ul className="list">
                        <li>
                            Access to all modules
                        </li>
                        <li>
                            20 educator accounts,
                            <br></br>
                            400 student accounts
                        </li>
                        <li>
                            Real time school statistics
                        </li>
                    </ul>
                    <br></br>
                    <h3 className="price"><b>$99</b></h3>
                    <p><i>per month</i></p>
                </Col>
            </Row>
        </Container>
    );
}

export default  SubscriptionPlans;