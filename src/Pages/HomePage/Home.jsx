import { TypeAnimation } from "react-type-animation";
import './HomePage.css'
import dotImg from '../../assets/CommonImages/orangeDot.png'
import profileImg from '../../assets/HomePageImg/bannerImg.png'
import CustomButton from "../../Components/CustomButton/CustomButton";
import homeAnimateImg from '../../assets/HomePageImg/homeNannerShape.png'
import paticleImg from '.././../assets/HomePageImg/particleOne.png'
import profilePic from '../../assets/HomePageImg/about.png'
import bgImgSecond from '../../assets/HomePageImg/particleTwo.png'
import aboutIconOneImg from '../../assets/HomePageImg/aboutIconOne.png'
import aboutIconTwoImg from '../../assets/HomePageImg/aboutIconTwo.png'
import CountUp from 'react-countup';
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { CheckSquare, ArrowRight} from "react-bootstrap-icons";
import CustomHeading from "../../Components/CustomHeading/CustomHeading";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { ServiceCardArr, blogArr } from "../../Data/Data";
import CommonPortfolio from "../../Components/PortfolioSection/CommonPortfolioSection";
import Card from 'react-bootstrap/Card';

export default function Home() {

    const [counterOn, setCounterOn] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            {/* hero section  */}
            <section className="heroSection position-relative">
                <div className="container-fluid customContainer">
                    <div className="row me-0 align-items-center">
                        <div className="col-12 col-lg-7 text-center position-relative heroContent ps-3 ps-lg-5 pe-0">
                            <div className="position-absolute firstBgWrapper">
                                <img src={paticleImg} alt="background image" className="img-fluid" width={70} />
                            </div>
                            <div className="d-flex align-items-start ms-2">
                                <img src={dotImg} alt="dot image" height={18} />
                                <p className="text-uppercase font-jost ms-2 fs-6">i am full stack developer</p>
                            </div>
                            <div className="text-start">
                                <h1 className="font-jost fw-bold">
                                    I'm{' '}
                                    <TypeAnimation sequence={[
                                        'Simar Rajput',
                                        1000,
                                        'Developer',
                                        1000,
                                        'App Developer',
                                        1000,
                                    ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                        style={{ fontSize: '1em', display: 'inline-block', color: '#ff6b00' }}
                                    />
                                </h1>
                                <p className="font-jost fw-normal profileContent mt-4">Welcome to my digital domain! I am a passionate full stack developer dedicated to crafting immersive digital experiences and robust, scalable solutions. With a blend of creativity and technical prowess, I navigate seamlessly between frontend elegance and backend functionality, shaping the digital landscape one line of code at a time</p>
                                <div className="d-inline-block btnWrapper position-relative">
                                    <CustomButton title='View My CV' href='/resume' />
                                </div>
                                <div className="position-absolute secondBgWrapper">
                                    <img src={bgImgSecond} alt="background image" className="img-fluid" width={70} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 imageWrapper">
                            <img src={homeAnimateImg} alt="background image" className="img-fluid position-absolute homeBannerShape" />
                            <img src={profileImg} alt="profile image" className="img-fluid position-relative profileImg" />
                        </div>
                    </div>
                </div>
            </section>
            {/* about section */}

            <section className="aboutWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 text-center text-lg-start">
                            <div className="imageOverlay position-relative mx-auto">
                                <img src={profilePic} alt="profile image" className="img-fluid position-relative profileImg" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <CustomHeading subHeading='About Me' heading='I Can Develop Anything You Want' customClass='mt-4' />
                            <blockquote>Code is the paintbrush of the digital age. As a full stack developer, I create masterpieces.</blockquote>
                            <p className="font-jost">Every line of code I write is a step forward in a journey of perpetual learning and growth. From the elegance of frontend design to the robustness of backend architecture, I relish the opportunity to tackle challenges head-on, pushing the boundaries of possibility and refining my craft with each project undertaken.</p>
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <div className="row" style={{ marginTop: '50px' }}>
                                    <div className="col-12 col-md-6 d-flex align-items-start">
                                        <div className="me-3">
                                            <img src={aboutIconOneImg} />
                                        </div>
                                        <div>
                                            <h4 className="fw-bold numberText">
                                                {counterOn && <CountUp start={0} end={7} duration={5} delay={0} />}
                                                +
                                            </h4>
                                            <h4 className="font-jost fw-medium aboutContent">Complete Project</h4>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 d-flex align-items-start">
                                        <div className="me-3">
                                            <img src={aboutIconTwoImg} />
                                        </div>
                                        <div className="">
                                            <h4 className="fw-bold numberText">
                                                {counterOn && <CountUp start={0} end={5} duration={5} delay={0} />}
                                                +
                                            </h4>
                                            <h4 className="font-jost fw-medium aboutContent">Year of experience</h4>
                                        </div>
                                    </div>
                                </div>
                            </ScrollTrigger>
                            <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
                                {isVisible && <div className="row animate__animated animate__fadeInUp" style={{ marginTop: '50px' }}>
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex quaityContent">
                                            <CheckSquare className="pointIcon" />
                                            <p className="font-jost mb-0" style={{ marginTop: '-4px' }}>Work simple and cline design</p>
                                        </div>
                                        <div className="d-flex quaityContent">
                                            <CheckSquare className="pointIcon" />
                                            <p className="font-jost mb-0" style={{ marginTop: '-4px' }}>New idea and user friendly design</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex quaityContent">
                                            <CheckSquare className="pointIcon" />
                                            <p className="font-jost mb-0" style={{ marginTop: '-4px' }}>Web Design Full stack</p>
                                        </div>
                                        <div className="d-flex quaityContent">
                                            <CheckSquare className="pointIcon" />
                                            <p className="font-jost mb-0" style={{ marginTop: '-4px' }}>Unlimited Revisions</p>
                                        </div>
                                    </div>
                                </div>}

                            </ScrollTrigger>
                            <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
                                {isVisible && <div className="d-inline-block btnWrapper position-relative animate__animated animate__fadeInUp animate__delay-1s" style={{ marginTop: '30px' }}>
                                    <CustomButton title='Download My CV' href='#resume' />
                                </div>}
                            </ScrollTrigger>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service section  */}
            <section className="serviceWrapper">
                <div className="container">
                    <CustomHeading subHeading='My Service' heading='Services I offer' customClass='text-center' imageClass='text-center justify-content-center' headingClass='text-uppercase' />
                    <div className="row servieCardRow">
                        {ServiceCardArr.map((card, index) =>
                            <div className={card.columnClass} key={index}>
                                <ServiceCard image={card.imageSrc} alt={card.alt} heading={card.heading} description={card.description} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* my resume section */}
            <section className="resumeWrapper">
                <div className="container">
                    <CustomHeading subHeading='My Resume' heading='10+ YEARS OF EXPERIENCE' customClass='text-center' imageClass='text-center justify-content-center' headingClass='text-uppercase' />
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-12 col-lg-2 d-none d-lg-block">
                            <div className="resumeItem position-relative h-100">
                                <h3 className="position-absolute fs-4 fw-medium resumeItemTopic font-jost resumeItemOne">Education</h3>
                                <h3 className="position-absolute fs-4 fw-medium resumeItemTopic font-jost resumeItemTwo">Software Skills</h3>
                                <h3 className="position-absolute fs-4 fw-medium resumeItemTopic font-jost resumeItemThree">Experience</h3>
                            </div>
                        </div>
                        <div className="col-12 col-lg-10">
                            <div className="row bg-white detailsWrapper align-items-start animate__animated animate__fadeInUp">
                                <div className="col-12 col-lg-4 resumeDetailItem resumeFirstItem">
                                    <h4 className="">B.Tech (CSE)</h4>
                                    <p className="font-jost fw-normal">Guru Teg Bahadur Khalsa College, Malout Punjab</p>
                                    <p className="font-jost fw-normal">2013 - 2016</p>
                                </div>
                                <div className="col-12 col-lg-4 resumeDetailItem resumeSecondItem">
                                    <h4 className="">Diploma (CSE)</h4>
                                    <p className="font-jost fw-normal">SKP College, Fazilka Punjab</p>
                                    <p className="font-jost fw-normal">2010 - 2013</p>
                                </div>
                                <div className="col-12 col-lg-4 resumeDetailItem resumeThirdItem">
                                    <h4 className="">Matrics School Education</h4>
                                    <p className="font-jost fw-normal">Ever Green Public School, Mandi Roran Wala Punjab</p>
                                    <p className="font-jost fw-normal">2010</p>
                                </div>
                            </div>
                            <div className="row mt-4 bg-white detailsWrapper animate__animated animate__fadeInUpZ">
                                <div className="col-12 col-lg-4 resumeDetailItem resumeFirstItem">
                                    <h4 className="">UI/UX Design</h4>
                                    <div className="d-flex justify-content-between mt-3">
                                        <p className="font-jost skillName overflow-hidden col-10 position-relative fw-normal my-0">HTML</p>
                                        <p className="skillPercent text-center col-2 fw-normal my-0 font-jost">95%</p>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <p className="font-jost skillName overflow-hidden col-10 position-relative fw-normal my-0">CSS</p>
                                        <p className="skillPercent text-center col-2 fw-normal my-0 font-jost">80%</p>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <p className="font-jost skillName overflow-hidden col-10 position-relative fw-normal my-0">Bootstrap</p>
                                        <p className="skillPercent text-center col-2 fw-normal my-0 font-jost">75%</p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 resumeDetailItem resumeSecondItem">
                                    <h4 className="">Diploma (CSE)</h4>
                                    <p className="font-jost fw-normal">SKP College, Fazilka Punjab</p>
                                    <p className="font-jost fw-normal">2010 - 2013</p>
                                </div>
                                <div className="col-12 col-lg-4 resumeDetailItem resumeThirdItem">
                                    <h4 className="">Matriculation School Education</h4>
                                    <p className="font-jost fw-normal">Ever Green Public School, Mandi Roran Wala Punjab</p>
                                    <p className="font-jost fw-normal">2010</p>
                                </div>
                            </div>
                            <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
                                {isVisible &&
                                    <div className="row bg-white mt-4 detailsWrapper align-items-start animate__animated animate__fadeInUp">
                                        <div className="col-12 col-lg-4 resumeDetailItem resumeFirstItem">
                                            <h4 className="">Senior Software Engineer</h4>
                                            <p className="font-jost fw-normal mb-1">Sourcefuse Technologies India Pvt Ltd - Noida</p>
                                            <p className="font-jost fw-normal mt-1">March 2023 - Present</p>

                                            <p className="font-jost fw-normal mb-1">Indianic InfoTech Private Limited - Gujrat</p>
                                            <p className="font-jost fw-normal mt-1">July 2022 - Feb 2023</p>
                                        </div>
                                        <div className="col-12 col-lg-4 resumeDetailItem resumeFirstItem">
                                            <h4 className="">React Native Developer</h4>
                                            <p className="font-jost fw-normal mb-1">Mobile Programming Private Limited - Gurgaon</p>
                                            <p className="font-jost fw-normal mt-1">Nov 2021 - Jun 2022</p>

                                            <p className="font-jost fw-normal mb-1">Zamora Innovation Pvt Ltd - Mohali</p>
                                            <p className="font-jost fw-normal mt-1">May 2019 - Oct 2021</p>
                                        </div>
                                        <div className="col-12 col-lg-4 resumeDetailItem resumeSecondItem">
                                            <h4 className="">React Native Developer</h4>
                                            <p className="font-jost fw-normal mb-1">Inext Solution Private Limited - Chandigarh</p>
                                            <p className="font-jost fw-normal mt-1">Jul 2018 - May 2019</p>
                                        </div>
                                    </div>
                                }
                            </ScrollTrigger>

                        </div>
                    </div>
                </div>

            </section>

            {/* My Portfolio section */}
            <section className="portfolioWrapper">
                <div className="container">
                    <CommonPortfolio />
                    <div className="blog_wrapper">
                        <CustomHeading subHeading='My Blog' heading='Latest Blog' customClass='text-center' imageClass='text-center justify-content-center' headingClass='text-uppercase' />
                        <div className="mt-5 row">
                            {blogArr.map((blog, index) =>
                                <div className={blog.className} key={index}>
                                    <Card className="h-100">
                                        <div className="imgOverlay position-relative">
                                            <Card.Img variant="top" src={blog.image} className="cardImg" />
                                        </div>
                                        <Card.Body className="blogCardContent">
                                            <p className="blogDate font-urbanist fw-normal">{blog.date}</p>
                                            <Card.Title>
                                                <a href={blog.linkHref} className="text-decoration-none blog_heading font-jost fw-semibold fs-4 mb-4">
                                                    {blog.blogTitle}
                                                </a>
                                            </Card.Title>
                                            <a href={blog.linkHref} className='text-decoration-none font-jost fw-semibold btnLink'>
                                                <span className='me-2'>Read More</span>
                                                <ArrowRight />
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
