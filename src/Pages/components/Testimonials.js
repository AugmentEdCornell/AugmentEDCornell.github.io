import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Testimonials.css'

function Testimonial (props) {
    return (
        <Col className='testimonial text-center p-5 m-5'>
            <p>"{props.quote}"</p>
        </Col>
    );
}

function Testimonials () {
    return (
        <Container fluid className='p-3 back'>
            <Row>
                <Testimonial quote="Testimonial 1"/>
                <Testimonial quote="Testimonial 2"/>
                <Testimonial quote="Testimonial 3"/>
                <Testimonial quote="Testimonial 4"/>
            </Row>
        </Container>
    );
}

export default Testimonials