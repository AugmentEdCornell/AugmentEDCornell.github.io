import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import logo from './assets/ar.png';
import logout from './assets/log-out.png'
import { useNavigate } from 'react-router-dom';
import './Header.css';
import "@fontsource/montserrat";
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { Tooltip } from 'react-tooltip'

function Header() {
    let navigate = useNavigate(); 
    let path = ""
        
    const logoutUser = () => {
        auth.signOut();
        navigate('/login');
    }
    
    const login = (e) => { 
        e.preventDefault();
        console.log(auth.currentUser)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user is in")
                path = '/catalog'
                navigate(path)
            }
            else {
                path = '/login'
                navigate(path)
            }
          });
        console.log("ive been called")
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
                <Image src={logout} alt='profile' className='m-2 logout' onClick={logoutUser}
                    data-tooltip-id="logout" 
                    data-tooltip-content="Logout current user"
                    data-tooltip-place="top"/>
                <Tooltip id='logout' />
            </Nav>
        </Navbar>
    );
}

export default Header;