import './Core.css';
import Features from './components/Features';
import Header from './components/Header';
import { Slogan } from './components/Visuals';
import { Graphic } from './components/Visuals';
import Motivations from './components/Motivations';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Core() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className='pt-5' id="home">
        <Col md={6} className="features">
          <Slogan />
          <Features />
        </Col>
        <Col md={6}>
          <Graphic />
        </Col>
      </Row>
      <Row className="pt-5" id="motivations">
        <Motivations />
      </Row>
      <Row className="pt-5" id="team">
        <Team />
      </Row>
      <Row>
        <Testimonials />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Core;
