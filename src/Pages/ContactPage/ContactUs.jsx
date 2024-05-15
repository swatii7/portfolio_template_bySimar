import './Contact.css'
import CommonHeroSection from "../../Components/CommonHeroSection/CommonHeroSection";
import profileImg from '../../assets/CommonImages/contactPageImg.png'
import CustomButton from '../../Components/CustomButton/CustomButton';

export default function ContactUs() {
    return (
        <>
            <CommonHeroSection activePage='Contact Us' heading='Contact Us' />
            <section className="contactFormWrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 mb-5">
                            <div className='contactDetailsWrapper text-center mx-auto mx-lg-0'>
                                <img src={profileImg} className='img-fluid' />
                                <h2 className='font-jost fw-semibold mt-4'>hello@credesign.com</h2>
                                <h4 className='font-jost fw-medium'>Based in New York, USA</h4>
                                <h4 className='font-jost fw-medium'> +123 456 7890</h4>
                                <div className="d-inline-block btnWrapper mt-4 position-relative">
                                    <CustomButton title='Hire Me' href='/contactUs' />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h2 className='contactFormHeading'>Send A Message!</h2>
                            <div className="form row">
                                <div className='col-12 col-md-6 mb-5'>
                                    <input type='text' placeholder='Email' id='email' className='form-control formInput' />
                                </div>
                                <div className='col-12 col-md-6 mb-5'>
                                    <input type='number' placeholder='Phone' id='phone' className='form-control formInput' />
                                </div>
                                <div className='col-12 col-md-6 mb-5'>
                                    <input type='text' placeholder='Package' id='package' className='form-control formInput' />
                                </div>
                                <div className='col-12 col-md-6 mb-5'>
                                    <input type='date' placeholder='' id='date' className='form-control formInput' />
                                </div>
                                <div className='col-12 mb-5'>
                                    <textarea className="form-control formInput" id="FormControlTextarea" rows="3" placeholder='Message'></textarea>
                                </div>
                            </div>
                            <div className="d-inline-block btnWrapper mt-0 position-relative">
                                <CustomButton title='Send Me Message' href='/contactUs' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


