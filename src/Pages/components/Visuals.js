import Image from 'react-bootstrap/Image';
import graphic from './assets/Image.png';
import './Visuals.css'

export function Slogan() {
    return (
        <h2 className='tagline'>Explore. Engage. Evolve!</h2>
    );
}

export function Graphic() {
    return (
        <Image className="clipart mt-4 ps-5 pe-5" src={graphic} alt="Graphic"/>
    )
}