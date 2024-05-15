import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/Logo.png';
import CustomButton from '../CustomButton/CustomButton';

export default function Header() {
    const location = useLocation();
    const [isActive, setIsActive] = useState('');

    useEffect(() => {
        setIsActive(location.pathname);
    }, [location]);

    return (
        <Navbar collapseOnSelect expand="md" className="py-0 py-lg-4">
            <Container className='px-0'>
                <Navbar.Brand href="#home" className='me-0 ps-3'>
                    <img src={logo} alt='Page Logo' className='img-fluid navImg' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className={`font-jost px-3 ${isActive === '/' ? 'active' : ''}`} href="/">Home</Nav.Link>
                        <Nav.Link className={`font-jost px-3 ${isActive === '/about' ? 'active' : ''}`} href="/about">About</Nav.Link>
                        <Nav.Link className={`font-jost px-3 ${isActive === '/services' ? 'active' : ''}`} href="/services">Services</Nav.Link>
                        <Nav.Link className={`font-jost px-3 ${isActive === '/resume' ? 'active' : ''}`} href="/resume">Resume</Nav.Link>
                        <Nav.Link className={`font-jost px-3 ${isActive === '/portfolio' ? 'active' : ''}`} href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link className='font-jost ps-3 d-block d-lg-none fw-bold' href="/contactUs">Contact Us</Nav.Link>
                    </Nav>
                    <div className='d-none d-lg-block btnWrapper mt-0'>
                        <CustomButton title='Contact Us' href='/contactUs' customClass='contactBtn' />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
