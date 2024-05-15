import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import {Tab, Tabs, ProgressBar} from 'react-bootstrap';
import './Resume.css'
import CommonHeroSection from "../../Components/CommonHeroSection/CommonHeroSection";
import CustomHeading from "../../Components/CustomHeading/CustomHeading";
import { educationTabArr, resumeSkillArr, skillsArr, workExpArr, hobbiesArr } from "../../Data/Data";
import profileImg from '../../assets/AboutPageImg/aboutTwo.png'
import bgImg from '../../assets/AboutPageImg/profileBgImg.png'
import CustomButton from '../../Components/CustomButton/CustomButton';


export default function Resume() {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <>
            <CommonHeroSection activePage='Resume' heading='Resume' />
            <section className='aboutResumePage'>
                <div className="aboutWrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xl-6 aboutContent">
                                <CustomHeading subHeading='About Me' heading="I'm developing mobile applications" customClass='text-start' imageClass='text-start' />
                                <p className='font-jost' style={{ marginTop: '20px' }}>I am innovative mobile developer with the experience of 5+ years. Experienced with all stages of the development. Strong background in Frontend Technology. Collaborating closely with the team to support projects during all phases of delivery. Maintaining an organized workflow using a project management tool like <strong>
                                    GitHub, Bitbucket, or Jira.</strong></p>
                                    <div className='pt-3'>
                                    <Tabs
                                        defaultActiveKey="skills"
                                        id="fill-tab-example"
                                        className="mb-3 tabSwitcher"
                                        fill
                                    >
                                        <Tab eventKey="skills" title="Skills" style={{minWidth:'200px'}}>
                                            <div className="skillsPercent tabContent mt-50">
                                    {skillsArr.map((skill, idx) =>
                                        <div key={idx} className='skillWrapper'>
                                            <div className="d-flex justify-content-between">
                                                <p className='font-jost mb-2'>{skill.skillName}</p>
                                                <p className='font-jost mb-2'>{skill.percent}%</p>
                                            </div>
                                            <ProgressBar now={skill.percent} />

                                        </div>
                                    )}
                                </div>
                                        </Tab>
                                        <Tab eventKey="hobbies" title="Hobbies" style={{minWidth: '200px'}}>
                                        <div className=''>
                                                   <div className="hobbiesWrapper d-grid align-items-center">
                                        {hobbiesArr.map((hobby, index)=>
                                        <div key={index} className='mb-2 text-start'>
                                            <div className='text-center  mx-auto'>
                                            <img src={hobby.image} alt={hobby.alt} className='person_images'  />
                                            <h4 className='font-jost'>{hobby.name}</h4>
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                                
                            </div>
                            <div className="col-12 col-xl-6 position-relative text-center text-lg-end d-flex align-items-center justify-content-center justify-content-lg-end aboutImageWrapper">
                                <img src={profileImg} className='position-relative aboutProfileImg' />
                                <img src={bgImg} className='bgImgWrapper position-absolute' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resumeArchieveWrapper">
                <div className="container">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <CustomHeading subHeading='Resume' heading="Education & Experience" customClass='text-start' imageClass='text-start' />
                                <div className='skillsWithLogoWrapper mt-50'>
                                    {resumeSkillArr.map((skill, index) =>
                                        <div key={index} className="skillContent">
                                            <div className="skillLogoWrapper p-4 mx-auto">
                                                <img src={skill.image} alt={skill.alt} className='w-100' />
                                            </div>
                                            <div className="skillNameWrapper text-center w-100">
                                                <h5 className='font-jost fw-medium'>{skill.skillName} {' '}
                                                    <span className='font-jost'>
                                                        {counterOn && <CountUp start={0} end={skill.percent} duration={5} delay={0} />}
                                                        %
                                                    </span>
                                                </h5>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                            <div className="col-12 col-lg-6 contentWrapper pt-5">
                                <div className='pt-3'>
                                    <Tabs
                                        defaultActiveKey="experience"
                                        id="fill-tab-example"
                                        className="mb-3 tabSwitcher"
                                        fill
                                    >
                                        <Tab eventKey="experience" title="Professional Experience" style={{minWidth:'200px'}}>
                                            <div className='tabContent'>
                                                    {workExpArr.map((item, idx)=>
                                                    <div key={idx} className="row tabItem text-center text-md-start justify-content-center">
                                                    <div className="col-12 col-md-2 imageTabContent d-flex align-items-center justify-content-center">
                                                        <img src={item.image} alt={item.alt} className='tabImage' />
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-6">
                                                        <h3 className='contentTitle blackColor font-jost fw-semibold'>{item.coName}</h3>
                                                        <h5 className='fw-normal desTitle font-jost'>{item.designation}</h5>
                                                    </div>
                                                    <div className="col-12 col-md-4 col-lg-4 text-center text-md-end justify-content-center justify-content-md-end d-flex flex-wrap">
                                                        <h4 className='font-jost fw-semibold tenureContent w-100'>{item.tenure}</h4>
                                                        <h5 className='font-jost desTitle fw-normal'>{item.year}</h5>
                                                    </div>
                                                </div>
                                                    )}
                                                
                                            </div>
                                        </Tab>
                                        <Tab eventKey="education" title="Education" style={{minWidth: '200px'}}>
                                        <div className='tabContent'>
                                                    {educationTabArr.map((item, idx)=>
                                                    <div key={idx} className="row tabItem text-center text-md-start justify-content-center">
                                                    <div className="col-12 col-md-2 imageTabContent d-flex align-items-center justify-content-center">
                                                        <img src={item.image} alt={item.alt} className='tabImage' />
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-6">
                                                        <h3 className='contentTitle blackColor font-jost fw-semibold'>{item.coName}</h3>
                                                        <h5 className='fw-normal desTitle font-jost'>{item.collegeName}</h5>
                                                    </div>
                                                    <div className="col-12 col-md-4 col-lg-4 text-center text-md-end justify-content-center justify-content-md-end d-flex flex-wrap">
                                                        <h4 className='font-jost fw-semibold tenureContent w-100'>{item.tenure}</h4>
                                                        <h5 className='font-jost desTitle fw-normal'>{item.year}</h5>
                                                    </div>
                                                </div>
                                                    )}
                                                
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </ScrollTrigger>
                </div>
            </section>
            <section className='contactWrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='contactContentWrapper text-center'>
                                <p className='font-jost fw-normal text-center'>Get Started</p>
                                <h2 className='text-center fw-semibold'>Let’s do something new with me!</h2>
                                <div className="d-inline-block btnWrapper position-relative">
                                    <CustomButton title='Contact' href='/contact.html' />
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </section>
        </>
    )
}