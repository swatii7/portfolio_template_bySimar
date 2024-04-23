import Container from 'react-bootstrap/Container';
import { Nav, Navbar, } from 'react-bootstrap'
import logo from '../../assets/Logo.png'
import CustomButton from '../CustomButton/CustomButton';

export default function Header(){
    return(
      <Navbar collapseOnSelect expand="md" className="py-0 py-lg-4">
      <Container className='px-0'>
        <Navbar.Brand href="#home" className='me-0 ps-3'>
                <img src={logo} alt='Page Logo' className='img-fluid navImg' />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mx-auto">
            <Nav.Link className='font-jost px-3' href="#home">Home</Nav.Link>
            <Nav.Link className='font-jost px-3' href="#about">About</Nav.Link>
            <Nav.Link className='font-jost px-3' href="#services">Services</Nav.Link>
            <Nav.Link className='font-jost px-3' href="#resume">Resume</Nav.Link>
            <Nav.Link className='font-jost px-3' href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className='font-jost px-3' href="#blog">Blog</Nav.Link>
            <Nav.Link className='font-jost ps-3 d-block d-lg-none fw-bold' href="#blog">Contact Us</Nav.Link>
          </Nav>
          <div className='d-none d-lg-block btnWrapper mt-0'>
          <CustomButton title='Contact Us' href='#' customClass='contactBtn' />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    )
}


