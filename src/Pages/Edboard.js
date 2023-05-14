import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import cell from './components/assets/cell.png'
import digestive_system from './components/assets/digestive-system.png'
import lock from './components/assets/padlock.png'
import stats from './components/assets/bar-chart.png'
import './Edboard.css'
import { useNavigate } from "react-router-dom";

function Edboard () {

    let path = ""
    let nav = useNavigate();
    const uploadFile = () => {
        path = "/uploadFile"
        nav(path)
    }
    return (
        <Container fluid> 
            <Row>
                <Col md={8}>
                    <Row className="pt-5">
                        <h2 className='mb-4 heading'>Educator Dashboard</h2>
                    </Row>
                    <Row className="pt-5">
                        <h2 className='mb-4 subject'>Biology</h2>
                    </Row>
                    <Row className="ms-5">
                        <Col md={3} className="justify-content-center p-4 m-2 topic">
                            <Image src={cell} alt="Cell Biology" fluid/>
                            <p className="text-center mt-3"><b>Cell Biology</b></p>
                        </Col>
                        <Col md={3} className="locked justify-content-center p-4 m-2">
                            <Image src={lock} alt="locked" className="lock"/>
                            <Image src={digestive_system} alt="Digestive System" fluid/>
                            <p className="text-center mt-3"><b>Digestive System</b></p>
                        </Col>
                    </Row>
                    <Row>
                        <Button className="m-5 fileButton" onClick={uploadFile} >
                            Upload Content File
                        </Button>
                    </Row>
                </Col>
                <Col>
                    <Row className="pt-5">
                        <h2 className='mb-4 heading'>Statistics</h2>
                    </Row>
                    <Row className="pt-4">
                        <h5><b>Active study time</b></h5>
                        <p>3.2 hours</p>
                    </Row>
                    <Row className="pt-4">
                        <h5><b>Lessons completed</b></h5>
                        <p>2 out of 5</p>
                    </Row>
                    <Row className="pt-4">
                        <h5><b>Subject Distribution</b></h5>
                        <Image src={stats} alt="Stats" fluid className="stats"/>
                    </Row>
                    <Row className="pt-4">
                        <h5><b>Grade Progress</b></h5>
                        <p>C ---&gt; B+</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Edboard;