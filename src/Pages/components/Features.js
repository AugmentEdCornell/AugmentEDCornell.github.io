import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import './Features.css';
import f1 from "./assets/f1.png";
import f2 from "./assets/f2.png";
import f3 from "./assets/f3.png";
import f4 from "./assets/f4.png";

function Features () {

    return (     
        <>
        <Carousel className="carousel p-5 mt-4" variant='dark' interval={8000}>
            <Carousel.Item>
                <Image className="image_a mt-3 mb-4 ms-auto me-auto" src={f1} alt="Visual Learning" />
                <Carousel.Caption className='caption'>
                    <h3><b>Visual Learning</b></h3>
                    <p>We use technology to help students visualise 3D systems they encounter in their learning journey</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="image mt-3 mb-4 ms-auto me-auto" src={f2} alt="Tactile Learning" />
                <Carousel.Caption className='caption'>
                    <h3><b>Tactile Learning</b></h3>
                    <p>We gamify the learning experience. We build interactive, immersive content that allows students to zoom, to click, and play as they learn by doing.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="image mt-3 mb-4 ms-auto me-auto" src={f3} alt="Stimulating Imagination" />
                <Carousel.Caption className='caption'>
                    <h3><b>Stimulating Imagination</b></h3>
                    <p>We allow students to carry out a hands-on exploration what they are learning about to understand the content from different perspectives</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="image mt-3 mb-4 ms-auto me-auto" src={f4} alt="Increasing Exposure" />
                <Carousel.Caption className='caption'>
                    <h3><b>Increasing Exposure</b></h3>
                    <p>Our solution will incorporate the latest academic advances. The students will be able to form a learning community and learn from each other.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}

export default Features