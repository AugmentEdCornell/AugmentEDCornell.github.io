import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Motivations.css'

function Motivations () {
    return (
        <Container fluid className='motivations p-5'>
            <Row className='text-center'>
                <h2 className='heading'>The Motivation Behind AugmentED</h2>
            </Row>
            <Row className='mt-3 mb-3 ms-5 me-5 pt-3 pb-3 ps-5 pe-5 point'>
                <p>The impact of COVID-19 on younger students has been huge. Amongst other things, it pushed <b>massive adoption of technology</b> in education, including in K-12 schools.</p>
            </Row>
            <Row className='mt-3 mb-3 ms-5 me-5 pt-3 pb-3 ps-5 pe-5 point'>
                <p>Despite the technology adoption, most content presented to them is <b>text based.</b></p>
            </Row>
            <Row className='mt-3 mb-3 ms-5 me-5 pt-3 pb-3 ps-5 pe-5 point'>
                <p>Talking to educators, we have discovered that <b>the gap</b> between the highest and the lowest performers is NOT primarily academic ability, but a combination of <b>the way content is presented</b> and many other reasons, including the social and economic conditions the students are in.</p>
            </Row>
            <Row className='mt-3 mb-3 ms-5 me-5 pt-3 pb-3 ps-5 pe-5 point'>
                <p>Students are <b>visual learners</b>. We would like to focus on presenting educational content to students in a way that is <b>intuitive for them</b> and is easy to understand. <b>They learn by doing</b>, and we feel using 3D content will make doing more accessible.</p>
            </Row>
        </Container>
    )
}

export default Motivations