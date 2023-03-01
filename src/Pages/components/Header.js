import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import logo from './assets/ar.png';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import "@fontsource/montserrat";

function Header() {
    let navigate = useNavigate(); 
    const login = () => { 
        let path = '/login'; 
        navigate(path);
    }
    return (
        <Navbar className='ps-5 pe-5 navbar' bg="light" fixed="top">
            <Navbar.Brand className="navbar-brand" href="/#home">
                <Image className="me-2 logo" src={logo} alt="AugmentED Logo" />
                <span className="brand-name">AUGMENT</span>
                <span className="brand-name-gray">ED</span>
            </Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link href="/#home">ABOUT</Nav.Link>
                <Nav.Link href="/#motivations">MOTIVATIONS</Nav.Link>
                <Nav.Link href="/#team">TEAM</Nav.Link>
                <Button className="ms-4 button" onClick={login}>Try Free Demo</Button>
            </Nav>
        </Navbar>
    );
}

export default Header;