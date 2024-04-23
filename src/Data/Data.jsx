import cardOne from '../assets/ServiceCardImages/serviceOne.png'
import cardTwo from '../assets/ServiceCardImages/serviceTwo.png'
import cardThree from '../assets/ServiceCardImages/serviceThree.png'
import cardFour from '../assets/ServiceCardImages/serviceFour.png'
import cardFive from '../assets/ServiceCardImages/serviceFive.png'
import cardSix from '../assets/ServiceCardImages/serviceSix.png'
import cardSeven from '../assets/ServiceCardImages/serviceSeven.png'
import cardEight from '../assets/ServiceCardImages/serviceEight.png'
import projectOneImg from '../assets/PortfolioImg/portfolioOne.png'
import projectTwoImg from '../assets/PortfolioImg/portfolioTwo.png'
import projectThreeImg from '../assets/PortfolioImg/portfolioThree.png'
import projectFourImg from '../assets/PortfolioImg/portfolioFour.png'
import projectFiveImg from '../assets/PortfolioImg/portfolioFive.png'
import projectSixImg from '../assets/PortfolioImg/portfolioSix.png'
import projectSevenImg from '../assets/PortfolioImg/portfolioSeven.png'
import blogOneImg from '../assets/BlogImg/blogOne.png'
import blogTwoImg from '../assets/BlogImg/blogTwo.png'
import blogThreeImg from '../assets/BlogImg/blogThree.png'
import { ArrowRight } from 'react-bootstrap-icons'

const ServiceCardArr= [
    {
        columnClass:'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardOne,
        heading:'UI/UX Design',
        alt: 'UI/UX Design',
        description:'We specialize in designing responsive interfaces that adapt seamlessly to various screen sizes, ensuring a consistent and optimized user experience across platforms.'
    },
    {
        columnClass:'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardTwo,
        alt: 'Mobile App',
        heading:'Mobile App',
        description:'Bringing your vision to life with mobile apps that blend seamless functionality, captivating design, and unparalleled user engagement.'
    },
    {
        columnClass:'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardThree,
        alt: 'Unit Testing',
        heading:'Unit Testing',
        description:'Elevating your code from good to exceptional, one test at a time, ensuring software excellence that stands the test of time.'
    },
    {
        columnClass:'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardFour,
        alt: 'Web Developer',
        heading:'Web Developer',
        description:'From client-side elegance to server-side robustness, I orchestrate the symphony of mobile development.'
    },
    {
        columnClass:'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardFive,
        alt: 'SEO Optimisation',
        heading:'SEO Optimisation',
        description:'Empowering your digital presence to soar above the competition, one optimized keyword at a time, ensuring your brand shines brightly in the vast online landscape.'
    },
    {
        columnClass:'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardSix,
        alt: 'WordPress Developer',
        heading:'WordPress Developer',
        description:'Unlocking the power of WordPress to turn your ideas into digital masterpieces, where innovation meets functionality and dreams take flight.'
    },
    {
        columnClass:'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardSeven,
        alt: 'App Development',
        heading:'App Development',
        description:'Transforming ideas into innovative mobile experiences that drive success.'
    },
    {
        columnClass:'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardEight,
        alt: 'Business Strategy',
        heading:'Business Strategy',
        description:'Charting the course for success with strategic insights, innovative solutions, and unwavering determination'
    },
]

const portfolioArr= [
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectOneImg,
        name: 'Pentair Home App',
        desc: 'This mobile app is used for water solutions and home pool management systems.',
        pageLink: '/pentairApp'
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectTwoImg,
        name: 'Parkao',
        desc: 'This is parking site app for cars.',
        pageLink: '/parkao'
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectThreeImg,
        name: 'Undercurrent News',
        desc: 'Bringing quality business news and information for the seafood industry.',
        pageLink: '/undercurrentNews'
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectFourImg,
        name: 'AutoApp',
        desc: 'Auto App is a one-stop automotie platform designed to be your ultimate auto guide.',
        pageLink: '/autoApp'
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectFiveImg,
        name: 'EmpatKali',
        desc: 'E-Commerce business app for purchase gaments things like shoes, paint, shirt etc.',
        pageLink: '/autoApp'
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectSixImg,
        name: 'MAS-SDK',
        desc: 'MAS-SDK is anpm package to intigrate with React Native app for file management system.',
        pageLink: '/masSdk'
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectSevenImg,
        name: 'TAPP To Travel',
        desc: 'TAPP gives you the information you need when travelling with Culture Link.',
        pageLink: '/tappToTravel'
    },

]

const blogArr = [
    {
        className: 'col-12 col-md-4 mb-4 mb-md-0',
        image: blogOneImg,
        date: '20 January, 2023',
        blogTitle: 'Become a UX/UI Designer With Career Foundry.',
        blogBtn: <>
        <a href='#' className='text-decoration-none font-jost fw-semibold btnLink'> 
            <span className='me-2'>Read More</span>
            <ArrowRight />
        </a>
        </>
    },
    {
        className: 'col-12 col-md-4 mb-4 mb-md-0',
        image: blogTwoImg,
        date: '15 January, 2023',
        blogTitle: 'The Best App Development For Your Business.',
         blogBtn: <>
        <a href='#' className='text-decoration-none font-jost fw-semibold btnLink'> 
            <span className='me-2'>Read More</span>
            <ArrowRight />
        </a>
        </>
    },
    {
        className: 'col-12 col-md-4',
        image: blogThreeImg,
        date: '08 January, 2023',
        blogTitle: 'The Best Portfolio For Agency Design.',
         blogBtn: <>
        <a href='#' className='text-decoration-none font-jost fw-semibold btnLink'> 
            <span className='me-2'>Read More</span>
            <ArrowRight />
        </a>
        </>
    },
]

export {
    ServiceCardArr,
    portfolioArr,
    blogArr

}