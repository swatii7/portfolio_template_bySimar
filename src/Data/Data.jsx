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
import blogOneImg from '../assets/BlogImg/blogOne.jpeg'
import blogTwoImg from '../assets/BlogImg/blogTwo.png'
import htmlImg from '../assets/SkillsImg/HTML.png'
import reactNativeImg from '../assets/SkillsImg/react-native.png'
import firebaseImg from '../assets/SkillsImg/firebase_img.png'
import githubImg from '../assets/SkillsImg/github-logo.webp'
import graphqlImg from '../assets/SkillsImg/graphql.png'
import jiraImg from '../assets/SkillsImg/jira-software-logo.png'
import jsLogo from '../assets/SkillsImg/js-logo.webp'
import reduxImg from '../assets/SkillsImg/redux.svg'
import sourceFuseImg from '../assets/SkillsImg/sourceFuseLogo.webp'
import indianicInfotechImg from '../assets/SkillsImg/indianic_infotech.jpeg'
import mobileprogrammingllcLogo from '../assets/SkillsImg/mobileprogrammingllc_logo.jpeg'
import zamora_innovation_logo from '../assets/SkillsImg/zamora_innovation_logo.jpeg'
import b_tech_course_img from '../assets/ResumeImg/bTechImage.jpeg'
import diploma_cse_img from '../assets/ResumeImg/diplomaCSE_image.png'
import tenth_img from '../assets/ResumeImg/matricsImg.jpeg'
import runningImg from '../assets/HobbiesImg/running_img.jpeg'
import singingImg from '../assets/HobbiesImg/singing_img.jpg'
import listeningMusicImg from '../assets/HobbiesImg/listenMusic_img.png'
import readingImg from '../assets/HobbiesImg/reading_book_img.jpeg'
import watchYoutubeImg from '../assets/HobbiesImg/watchYoutube_img.jpeg'

export const PENTAIR_DETAILS = 'pentair_details';
export const PARKAO_DETAILS = 'parkao_details';
export const UNDERCURRENTNEWS_DETAILS = 'undercurrentNews_details';
export const AUTOAPP_DETAILS = 'autoApp_details';
export const EMPATKALI_DETAILS = 'empatkali_details';
export const MAS_SDK_DETAILS = 'masSdk_details'
export const TAPP_TO_TRAVEL_DETAILS = 'tappToTravel_details';


const ServiceCardArr = [
    {
        columnClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardOne,
        heading: 'UI/UX Design',
        alt: 'UI/UX Design',
        description: 'We specialize in designing responsive interfaces that adapt seamlessly to various screen sizes, ensuring a consistent and optimized user experience across platforms.'
    },
    {
        columnClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardTwo,
        alt: 'Mobile App',
        heading: 'Mobile App',
        description: 'Bringing your vision to life with mobile apps that blend seamless functionality, captivating design, and unparalleled user engagement.'
    },
    {
        columnClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardThree,
        alt: 'Unit Testing',
        heading: 'Unit Testing',
        description: 'Elevating your code from good to exceptional, one test at a time, ensuring software excellence that stands the test of time.'
    },
    {
        columnClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-md-5',
        imageSrc: cardFour,
        alt: 'Web Developer',
        heading: 'Web Developer',
        description: 'From client-side elegance to server-side robustness, I orchestrate the symphony of mobile development.'
    },
    {
        columnClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-md-5 mb-lg-0',
        imageSrc: cardFive,
        alt: 'SEO Optimisation',
        heading: 'SEO Optimisation',
        description: 'Empowering your digital presence to soar above the competition, one optimized keyword at a time, ensuring your brand shines brightly in the vast online landscape.'
    },
    {
        columnClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-md-5 mb-lg-0',
        imageSrc: cardSix,
        alt: 'WordPress Developer',
        heading: 'WordPress Developer',
        description: 'Unlocking the power of WordPress to turn your ideas into digital masterpieces, where innovation meets functionality and dreams take flight.'
    },
    {
        columnClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-lg-0',
        imageSrc: cardSeven,
        alt: 'App Development',
        heading: 'App Development',
        description: 'Transforming ideas into innovative mobile experiences that drive success.'
    },
    {
        columnClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-lg-0',
        imageSrc: cardEight,
        alt: 'Business Strategy',
        heading: 'Business Strategy',
        description: 'Charting the course for success with strategic insights, innovative solutions, and unwavering determination'
    },
]

const portfolioArr = [
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectOneImg,
        name: 'Pentair Home App',
        desc: 'This mobile app is used for water solutions and home pool management systems.',
        pageLink: `/project_details/${PENTAIR_DETAILS}`
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectTwoImg,
        name: 'Parkao',
        desc: 'This is parking site app for cars.',
        pageLink: `/project_details/${PARKAO_DETAILS}`
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectThreeImg,
        name: 'Undercurrent News',
        desc: 'Bringing quality business news and information for the seafood industry.',
        pageLink: `/project_details/${UNDERCURRENTNEWS_DETAILS}`
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectFourImg,
        name: 'AutoApp',
        desc: 'Auto App is a one-stop automotie platform designed to be your ultimate auto guide.',
        pageLink: `/project_details/${AUTOAPP_DETAILS}`
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectFiveImg,
        name: 'EmpatKali',
        desc: 'E-Commerce business app for purchase gaments things like shoes, paint, shirt etc.',
        pageLink: `/project_details/${EMPATKALI_DETAILS}`
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectSixImg,
        name: 'MAS-SDK',
        desc: 'MAS-SDK is anpm package to intigrate with React Native app for file management system.',
        pageLink: `/project_details/${MAS_SDK_DETAILS}`
    },
    {
        className: 'col-12 col-md-6 col-lg-4 position-relative overflow-hidden d-flex justify-content-center projectContainer mb-4',
        image: projectSevenImg,
        name: 'TAPP To Travel',
        desc: 'TAPP gives you the information you need when travelling with Culture Link.',
        pageLink: `/project_details/${TAPP_TO_TRAVEL_DETAILS}`
    },

]

const blogArr = [
    {
        className: 'col-12 col-md-4 mb-4 mb-md-0',
        image: blogOneImg,
        date: '10 November, 2023',
        blogTitle: 'State Management Libraries for React Native in 2023–2024',
        linkHref: 'https://medium.com/@simarrajput12/state-management-libraries-in-2023-2024-for-react-native-ffecf895c5dd'
    },
    {
        className: 'col-12 col-md-4 mb-4 mb-md-0',
        image: blogTwoImg,
        date: '19 August, 2023',
        blogTitle: '15 Tips to Become Better Software Engineer',
        linkHref: 'https://com18699.wordpress.com/2023/08/19/tips-to-become-better-software-engineer/'
    },
   
]

const skillsArr = [
    {
        skillName: 'React Native',
        percent: '98'
    },
    {
        skillName: 'React',
        percent: '95'
    },
    {
        skillName: 'HTML',
        percent: '90'
    },
    {
        skillName: 'Firebase',
        percent: '89'
    },
    {
        skillName: 'Javascript',
        percent: '85'
    },
    {
        skillName: 'Typescript',
        percent: '80'
    },
    {
        skillName: 'Redux',
        percent: '77'
    },
    {
        skillName: 'CSS',
        percent: '65'
    }
]

const counterArr = [
    {
        colClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-lg-0 counterItem',
        number: '5',
        heading: 'Years Experience'
    },
    {
        colClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-lg-0 counterItem',
        number: '7',
        heading: 'Project Done'
    },
    {
        colClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-lg-0 counterItem',
        number: '2',
        heading: 'Blogs'
    },
    {
        colClass: 'col-12 col-md-6 col-lg-3 mb-3 mb-lg-0 counterItem',
        number: '6',
        heading: 'Happy Client'
    },
]

const educationArr = [
    {
        insName: 'Guru Teg Bahadur Khalsa College, Malout Punjab',
        description: <>
            Bachelor
            <span> Degree of Technology </span>
            (B.Tech); GPA: <span>3.45</span>, anticipated in May, 2016</>
    },
    {
        insName: 'SKP College, Fazilka Punjab',
        description: <>
            Diploma in 
            <span> Degree of Technology </span>
            (B.Tech); GPA: <span>3.55</span>, anticipated in May, 2016</>
    },
    {
        insName: 'Ever Green Public School, Mandi Roran Wala Punjab',
        description: <>
            <span> Matrics School Education </span>
            (CSE); GPA: <span>3.35</span>, anticipated in March, 2010</>
    },

]

const workExpArr = [ 
        {
            image: sourceFuseImg,
            alt: 'company Image',
            year: ' Mar 2023 - Present',
            coName: 'Sourefuse Technologies India Pvt Ltd',
            designation: 'Senior Software Engineer',
            tenure: '1 Year'
        },
        {
            image: indianicInfotechImg,
            alt: 'company Image',
            year: 'July 2022 - Feb 2023',
            coName: 'Indianic Infotech Private Limited',
            designation: 'Senior Software Engineer',
            tenure: '1 Year'
        },
        {
            image: mobileprogrammingllcLogo,
            alt: 'company Image',
            year: 'Nov 2021 - June 2022',
            coName: 'Mobile  Programming Private Limited',
            designation: 'React Native Developer',
            tenure:'1 Year'
        },
        {
            image: zamora_innovation_logo,
            alt: 'company Image',
            year: 'May 2019 - Oct 2021',
            coName: 'Zamora Innovation Pvt Ltd',
            designation: 'React Native Developer',
            tenure:'7 Years'
        },
        {
            image: sourceFuseImg,
            alt: 'company Image',
            year: 'July 2018 - May 2019',
            coName: 'Inext Solution Private Limited',
            designation: 'React Native Developer',
            tenure:'1 Year'
        },
]

const resumeSkillArr= [ 
    {
        skillName: 'HTML5',
        image: htmlImg,
        alt: 'html logo',
        percent:'90'
    },
    {
        skillName: 'React Native',
        image: reactNativeImg,
        alt: 'React Native logo',
        percent:'85'
    },
    {
        skillName: 'Firebase',
        image: firebaseImg,
        alt: 'Firebase logo',
        percent:'55'
    },
    {
        skillName: 'Github',
        image: githubImg,
        alt: 'Github logo',
        percent:'70'
    },
    {
        skillName: 'GraphQL',
        image: graphqlImg,
        alt: 'GraphQL logo',
        percent:'45'
    },
    {
        skillName: 'Jira',
        image: jiraImg,
        alt: 'Jira logo',
        percent:'78'
    },
    {
        skillName: 'Javascript',
        image: jsLogo,
        alt: 'Javascript logo',
        percent:'95'
    },
    {
        skillName: 'Redux',
        image: reduxImg,
        alt: 'Redux logo',
        percent:'88'
    },

]

const educationTabArr = [
        {
            image: b_tech_course_img,
            alt: 'course image',
            year: '2018 - 2022',
            coName: 'B.Sc in Computer Science',
            collegeName: 'University of ULAV',
            tenure: '4 Years'
        },
        {
            image: diploma_cse_img,
            alt: 'course Image',
            year: '2016 - 2018',
            coName: 'AS - Science & Information',
            collegeName: 'University of ULAV',
            tenure: '2 Years'
        },
        {
            image: tenth_img,
            alt: 'course Image',
            year: '2006 - 2016',
            coName: 'Secondary School Education',
            collegeName: 'Kindergarten',
            tenure:'10 Years'
        },
]

const projectDetailsArr = [
    {
        type: PENTAIR_DETAILS,
        heading: 'Modern Architecture Design Project Details',
        firstPara: `Aechitecture are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator`,
        secondPara: `Interior on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        image: projectOneImg,
        projectImgOne: projectOneImg,
        projectImgSecond: projectSixImg,
    },
    {
        type: PARKAO_DETAILS,
        heading: 'Modern Architecture Design Project Details',
        firstPara: `Aechitecture are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator`,
        secondPara: `Interior on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        image: projectOneImg,
        projectImgOne: projectOneImg,
        projectImgSecond: projectSixImg,
    },
    {
        type: UNDERCURRENTNEWS_DETAILS,
        heading: 'Modern Architecture Design Project Details',
        firstPara: `Aechitecture are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator`,
        secondPara: `Interior on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        image: projectOneImg,
        projectImgOne: projectOneImg,
        projectImgSecond: projectSixImg,
    },
    {
        type: AUTOAPP_DETAILS,
        heading: 'Modern Architecture Design Project Details',
        firstPara: `Aechitecture are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator`,
        secondPara: `Interior on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        image: projectOneImg,
        projectImgOne: projectOneImg,
        projectImgSecond: projectSixImg,
    },
    {
        type: EMPATKALI_DETAILS,
        heading: 'Modern Architecture Design Project Details',
        firstPara: `Aechitecture are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator`,
        secondPara: `Interior on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        image: projectOneImg,
        projectImgOne: projectOneImg,
        projectImgSecond: projectSixImg,
    },
    {
        type: MAS_SDK_DETAILS,
        heading: 'Modern Architecture Design Project Details',
        firstPara: `Aechitecture are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator`,
        secondPara: `Interior on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        image: projectOneImg,
        projectImgOne: projectOneImg,
        projectImgSecond: projectSixImg,
    },
    {
        type: TAPP_TO_TRAVEL_DETAILS,
        heading: 'Modern Architecture Design Project Details',
        firstPara: `Aechitecture are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator`,
        secondPara: `Interior on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        image: projectOneImg,
        projectImgOne: projectOneImg,
        projectImgSecond: projectSixImg,
    },

]

const hobbiesArr= [
    {
        image: runningImg,
        alt:'Person running image',
        name: 'Running'
    },
    {
        image: singingImg,
        alt: 'person signing image',
        name: 'Singing'
    },
    {
        image: listeningMusicImg,
        alt: 'person listen image',
        name: 'Listen Music'
    },
    {
        image: readingImg,
        alt: 'person reading book image',
        name: 'Learn New Things'
    },
    {
        image: watchYoutubeImg,
        alt: 'person watch youtube',
        name: 'Watch YouTube'
    },

]

export {
    ServiceCardArr,
    portfolioArr,
    blogArr,
    skillsArr,
    counterArr,
    educationArr,
    workExpArr,
    resumeSkillArr,
    educationTabArr,
    projectDetailsArr,
    hobbiesArr
}