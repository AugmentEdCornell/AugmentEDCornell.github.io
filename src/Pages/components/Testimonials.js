import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Testimonials.css'

function Testimonial (props) {
    return (
        <Col className='testimonial p-4 m-5'>
            <p><b><i>"{props.quote}"</i></b></p>
        </Col>
    );
}

function Testimonials () {
    return (
        <Container fluid className='p-3 back'>
            <Row>
                <Testimonial quote="Terrific product idea! I wish I had something like this in school"/>
                <Testimonial quote="Would have loved if something like existed in my school years."/>
                <Testimonial quote="AugmentED will definitely make it easier for me to teach complex science and math."/>
                <Testimonial quote="Really promising product, eager to see how the product develops and grows"/>
            </Row>
        </Container>
    );
}

export default Testimonials