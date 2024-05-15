import { ProgressBar } from 'react-bootstrap'
import './About.css'
import CustomHeading from '../../Components/CustomHeading/CustomHeading'
import { counterArr, educationArr, skillsArr, workExpArr } from '../../Data/Data'
import profileImg from '../../assets/AboutPageImg/aboutTwo.png'
import bgImg from '../../assets/AboutPageImg/profileBgImg.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'
import CommonHeroSection from '../../Components/CommonHeroSection/CommonHeroSection'

export default function AboutMe() {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <>
            <CommonHeroSection activePage='About' heading='About Me' />
            <section className='aboutResumePage'>
                <div className="aboutWrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 aboutContent">
                                <CustomHeading subHeading='About Me' heading="I'm developing mobile applications" customClass='text-start' imageClass='text-start' />
                                <p className='font-jost' style={{marginTop:'20px'}}>I am innovative mobile developer with the experience of 5+ years. Experienced with all stages of the development. Strong background in Frontend Technology. Collaborating closely with the team to support projects during all phases of delivery. Maintaining an organized workflow using a project management tool like <strong>
                                    GitHub, Bitbucket, or Jira.</strong></p>
                                    
                                    <div className="skillsPercent mt-50">
                                        {skillsArr.map((skill, idx)=>
                                        <div key={idx} className='skillWrapper'>
                                        <div className="d-flex justify-content-between">
                                            <p className='font-jost mb-2'>{skill.skillName}</p>
                                            <p className='font-jost mb-2'>{skill.percent}%</p>
                                        </div>
                                        <ProgressBar now={skill.percent} />

                                        </div>
                                        )}
                                    </div>
                            </div>
                            <div className="col-12 col-lg-6 position-relative text-center text-xl-end d-flex align-items-center justify-content-center justify-content-xl-end aboutImageWrapper">
                                <img src={profileImg} className='position-relative aboutProfileImg' />
                                <img src={bgImg} className='bgImgWrapper position-absolute' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="countContainer">
                    <div className="container">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="row counterWrapper">
                            {counterArr.map((item, index)=>
                            <div className={item.colClass} key={index}>
                            <h2 className='fw-bold counterContent font-jost'>
                                <span>
                                    {counterOn && <CountUp start={0} end={item.number} duration={5} delay={0} />}
                                </span>
                                +
                            </h2>
                            <h5 className='fw-normal counterHeading font-jost'>{item.heading}</h5>
                        </div>
                            )}
                            
                        </div>
                        </ScrollTrigger>
                    </div>
                </div>
            </section>
            <section className='resumeSection'>
                <div className="container">
                    <CustomHeading  subHeading='Resume' heading='education & experience' customClass='text-center' imageClass='text-center justify-content-center' headingClass='text-uppercase' />
                    <div className="row mt-50">
                        <div className="col-12 col-lg-6 resumecontent">
                            <h3 className='font-jost fs-4 fw-medium resumeHeading'>Education</h3>
                            <hr className='resumeDivider' />
                            {educationArr.map((detail, index)=>
                            <div key={index} className='resumeDetailContent'>
                            <h5 className='fw-semibold detailContentHeading mb-1 font-jost'>{detail.insName}</h5>
                            <p className='font-jost'>{detail.description}</p>
                        </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-6 resumecontent">
                            <h3 className='font-jost fs-4 fw-medium resumeHeading'>Professional Experience</h3>
                            <hr className='resumeDivider' />
                            <div className='experienceDetails'>
                                {workExpArr.map((arr, idx)=>
                                <div key={idx} style={{marginBottom:'30px'}}>
                                    <p className='font-jost mb-1'>{arr.year}</p>
                                <h5 className='font-jost fw-semibold mb-1'>{arr.coName}</h5>
                                <p className='font-jost mb-1'>{arr.designation}</p>
                                </div>
                                )}

                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className='contactWrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='contactContainer text-center'>
                                <p className='font-jost fw-normal text-white text-center'>Get Started</p>
                                <h2 className='text-white text-center fw-semibold'>Let’s do something new with me!</h2>
                                <div className="d-inline-block btnWrapper position-relative">
                                    <CustomButton title='Contact' href='/contactUs' />
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </section>
        </>
    )
}