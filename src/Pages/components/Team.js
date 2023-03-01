import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './Team.css'
import linkedin from './assets/linkedin.png'
import Avi from './assets/Avi.png'
import Josiah from './assets/Josiah.png'
import Parthit from './assets/Parthit.png'
import Shreyash from './assets/Shreyash.png'
import Yuzhen from './assets/Yuzhen.png'

function Card (props) {
    return (
        <Col md={2} className="card p-4">
            <Row>
                <Image src={props.image} alt={props.name} className="image" />
            </Row>
            <Row className='text-center'>
                <h5><b>{props.name}</b></h5>
                <p className='program'><i>{props.program}</i></p>
            </Row>
            <Row className='mb-3'>
                <a href={props.linkedin}><Image src={linkedin} className="linkedin mt-3" /></a>
            </Row>
        </Col>
    );
}

function Team () {
    return (
        <Container fluid className='p-5'>
            <Row className='text-center'>
                <h2 className='heading'>Meet the Team</h2>
            </Row>
            <Row className='text-center mt-2 mb-4'>
                <p>Our team has diverse learning and teaching experiences that has motivated us to <b><i>Augment Education!</i></b></p>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Card image={Avi} name="Avichal Gupta" program="Urban Tech Major" linkedin="https://www.linkedin.com/in/avichalg/" />
                <Card image={Josiah} name="Josiah Johnson" program="MBA Student" linkedin="https://www.linkedin.com/in/josiah-d-johnson/" />
                <Card image={Parthit} name="Parthit Patel" program="Connective Media Major" linkedin="https://www.linkedin.com/in/parthit/" />
                <Card image={Shreyash} name="Shreyash Gupta" program="Computer Science Major" linkedin="https://www.linkedin.com/in/shreyashkgupta/" />
                <Card image={Yuzhen} name="Yuzhen Zhang" program="Urban Tech Major" linkedin="https://www.linkedin.com/in/adam-yuzhen-zhang-08323b1bb/" />
            </Row>
        </Container>
    );
}

export default Team