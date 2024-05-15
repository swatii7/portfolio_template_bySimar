import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import sendImg from '../../assets/FooterImg/send.png'

export default function Footer() {
    return (
        <section className="footerWrapper">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-2">
                        <h4 className="fw-medium text-light font-jost fw-medium">Explore Link</h4>
                        <div className='footerLinks'>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/about" className="text-decoration-none text-white font-jost fw-normal">About</a>
                                </li>
                                <li>
                                    <a href='/resume' className="text-decoration-none text-white font-jost fw-normal">Resume</a>
                                </li>
                                <li>
                                    <a href='/portfolio' className="text-decoration-none text-white font-jost fw-normal">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-lg-2">
                        <h4 className="fw-medium text-light font-jost fw-medium">My Service</h4>
                        <div className='footerLinks'>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/services" className="text-decoration-none text-white font-jost fw-normal">UI/UX Design</a>
                                </li>
                                <li>
                                    <a href='/services' className="text-decoration-none text-white font-jost fw-normal">Mobile App</a>
                                </li>
                                <li>
                                    <a href='/services' className="text-decoration-none text-white font-jost fw-normal">UI Testing</a>
                                </li>
                                <li>
                                    <a href='/services' className="text-decoration-none text-white font-jost fw-normal">Redux   </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4 className="fw-medium text-light font-jost fw-medium">Follow Me</h4>
                        <div className='socialLinks'>
                            <ul className='list-unstyled d-flex' style={{ marginBottom: '35px' }}>
                                <li>
                                    <a href='www.facebook.com' className='text-white linkWrapper d-flex text-center align-items-center justify-content-center'>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li>
                                    <a href='www.facebook.com' className='text-white linkWrapper d-flex text-center align-items-center justify-content-center'>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href='www.facebook.com' className='text-white linkWrapper d-flex text-center align-items-center justify-content-center'>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </li>
                                <li>
                                    <a href='www.facebook.com' className='text-white linkWrapper d-flex text-center align-items-center justify-content-center'>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </li>
                            </ul>
                            <ul className='list-unstyled text-white'>
                                <li className='d-flex align-items-baseline footerContactList'>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p className='text-white font-jost fw-normal fs-6'>123, Anywhere, India</p>
                                </li>
                                <li className='d-flex align-items-baseline footerContactList'>
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                    <p className='text-white font-jost fw-normal fs-6'>
                                        <a href='tel:91-98745-74567' className='text-white text-decoration-none font-jost'>+91-98745-74567</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <h2 className='text-white fw-bold font-jost'>Let's Make Consultation With Us!</h2>
                        <div className="row" style={{marginTop:'35px'}}>
                            <div className="col-8 col-md-10">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" className='inputField' />
                                </Form.Group>
                            </div>
                            <div className="col-4 col-md-2">
                              <button className='text-white mailBtn position-relative overflow-hidden'>
                                <img src={sendImg} style={{width:'20px'}} className='position-relative' />
                              </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

