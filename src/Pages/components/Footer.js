import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer () {
    return (
        <Container fluid>
            <Row className="ms-5 me-5 mt-3 mb-3">
                <Col>
                    <p>AugmentED 2023</p>
                </Col>
                <Col>
                    <p className="text-end">AugmentEDCornell@gmail.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer