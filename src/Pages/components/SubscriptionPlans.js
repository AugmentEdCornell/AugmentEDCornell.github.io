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
                    <p>Description</p>
                    <ul>
                        <li>
                            Point 1
                        </li>
                        <li>
                            Point 2
                        </li>
                        <li>
                            Point 3
                        </li>
                    </ul>
                    <h3>Price</h3>
                </Col>
                <Col md={3} className="planCard two p-4 ms-3 me-3 mb-5">
                    <h5><b>CLASSROOM</b></h5>
                    <p>Description</p>
                    <ul>
                        <li>
                            Point 1
                        </li>
                        <li>
                            Point 2
                        </li>
                        <li>
                            Point 3
                        </li>
                    </ul>
                    <h3>Price</h3>
                </Col>
                <Col md={3} className="planCard three p-4 ms-3 me-3 mb-5">
                    <h5><b>SCHOOLS</b></h5>
                    <p>Description</p>
                    <ul>
                        <li>
                            Point 1
                        </li>
                        <li>
                            Point 2
                        </li>
                        <li>
                            Point 3
                        </li>
                    </ul>
                    <h3>Price</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default  SubscriptionPlans;