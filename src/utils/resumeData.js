import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import MobileScreenShareOutlinedIcon from '@material-ui/icons/MobileScreenShareOutlined';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import CastForEducationOutlinedIcon from '@material-ui/icons/CastForEducationOutlined';
import { Language, YouTube } from '@material-ui/icons';

// images import
import Ict from "../assets/images/ict.jpg";

export default {
    name: ' Adaji Mukhtar',
    title: ' Software developer / Photographer / Educationist',
    birthday: ' 23rd May 1992',
    email: ' alfadaji@gmail.com',
    address: ' No 95 Faki Road, New Extension, Rigasa, Kaduna',
    phone: ' +2347069261508',

    socials: {
        Facebook: {
            link: 'https://web.facebook.com/mukhtar.adaji.5',
            text: 'My Facebook',
            icon: <FacebookIcon />
        },
        Twitter: {
            link: 'https://twitter.com/adajimukhtar',
            text: 'My Twitter',
            icon: <TwitterIcon />
        },
        Linkedin: {
            link: 'https://www.linkedin.com/in/mukhtar-adaji-1a1704192/',
            text: 'My LinkedIn',
            icon: <LinkedInIcon />
        },
        Instagram: {
            link: 'https://www.instagram.com/see_serious',
            text: 'My Github',
            icon: <InstagramIcon />
        },
        Github: {
            link: 'https://github.com/adaji025',
            text: 'My Github',
            icon: <GitHubIcon />
        }
    }, 

    objective: `I am a highly dedicative,  innovative and passionate person, a great team player and a fast learner. \n 
    I seek challenging opportunities where I can apply my skills to solve problems and improve myself during the process`,

    about_me: `Hi, I am Adaji Mukhtar, a graduate of Applied Chemistry, a Web Developer with more than 2 years of experience, a Photographer and an Educationist.
                My journey in Web developement started on attending the Click-OnKaduna Digital skills program (Programming and Tech cohort), a six month programme sponsored by World Bank and facilitated by The Government of Kaduna state, Rockefella Foundation, IBM DNA and Natview Technology \n
                I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter. 
                Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them. \n
                Driven by My passion to succeed, My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.`, 
    experiences: [
        {
            company: 'Paritie Dynamic Enterprise, Niger, Nigeria',
            title: 'Web Development',
            date: '2021 - Date',
            description: 'Design and Development of Website and Web Application, Training and Mentoring Students of Paritie Learning Group, assisting in planning and designing Workflows for Softwawres'
        },
        {
            company: 'Ateko Digital Technology, Kaduna, Nigeria',
            title: 'lead, Training Department',
            date: '2020 - 2021',
            description: 'Head Training and Teaching of student in circular subject and ICT Courses '
        },
        {
            company: 'Hibsoft, Kaduna, Nigeria',
            title: 'Web Development (Interns)',
            date: '2020 - 2020',
            description: 'Build Wordpress site and Renders Figma Designs into HTML and CCSS code'
        },
        {
            company: 'Peace Formula International School, Kaduna, Nigeria',
            title: 'Chemistry and Computer Studies Teacher',
            date: '2017 - 2018',
            description: 'Teach and Conduct Practicals in Chemistry and Computer Studies as a subject '
        },
        {
            company: 'Yasmin Light Photography Kaduna, Nigeria',
            title: 'Photographer',
            date: '2014 - 2015',
            description: 'Shoot Photos and Work on them in Adobe Photohop and Light Room'
        }
    ],

    educations: [
        {
            course: 'Programming and Technology',
            school: 'Click-Onkaduna Digital Skills Program',
            year: '2019 - 2019',
            description: 'A six month program sponsored by World Bank, facilitated by the Kaduna state Government of Rokefella Foundation, and Natview Technology. Participants were introduce web Teachnologies during the Course of Studies'
        },
        {
            course: 'Higher Natinal Diploma, Science Laboratory Technology (Applied Chemistry Option)',
            school: 'Federal Polytechnic Kaura Namoda, Zamfara State, Nigeria',
            year: '2015 - 2017',
            description: 'A scientific field for understanding basic chemical properties of materials and for producing new materials with well-controlled functions.'
        }, {
            course: 'Natinal Diploma, Science Laboratory Technology',
            school: 'Federal Polytechnic Kaura Namoda, Zamfara State, Nigeria',
            year: '2012 - 2014',
            description: 'A scientific field that focuses on Physical and Biological sciences'
        },
        {
            course: 'Secondary School Certificate on Sciences',
            school: 'Piety High School, Kaduna Nigeria',
            year: '2004 - 2009',
            description: 'An intermidiary school between elementary Schools and college usually offering general, technical, vocational, or college-preparatory courses'
        },
        {
            course: 'First school Leaving Certificate',
            school: 'Olaitan Nursery and Primary School, Kaduna Nigeria',
            year: '1998 - 2004',
            description: 'First stage of formal education, coming after preschool/kindergarten and before secondary school.'
        }
    ],
    services: [
        {
            title: 'Web Developement',
            description: 'i have been a Web Developer for more than two years. I build fullly responsive website and web application',
            icon: <WebOutlinedIcon />
        },
        {
            title: 'Mobile Developement',
            description: 'With less than a year experience with react native, coupled with years of experienceon web developement. i build Mobile Application',
            icon: <MobileScreenShareOutlinedIcon />
        },
        {
            title: 'Photography',
            description: 'Looking to have that great personl and event shoot, i have got on this too',
            icon: <PhotoCameraOutlinedIcon />
        },
        {
            title: 'Tutor',
            description: 'I Teach and mentor people in my areas specialization',
            icon: <CastForEducationOutlinedIcon />
        }
    ],
    skills: [
        {
            title: 'HTML',
            description: [
                'HTML5',
                'HTML Form'
            ]
        },
        {
            title: 'CSS',
            description: [
                'CSS Flexbox & CSS Grid',
                'CSS Variable & CSS Animation',
                'SASS'
            ]
        },
        {
            title: 'Javascript',
            description: [
                'React',
                'Jquery'
            ]
        },
        {
            title: 'CSS Library',
            description: [
                'Bootstrap CSS',
                'Tailwind CSS'
            ]
        },
        {
            title: 'Photography',
            description: [
                'Adobe Photoshop',
                'Adobe Light Room'
            ]
        }
    ],
    portfolio: [
        // Web Design project
        {
            tag: 'Web Design',
            image: <img src={require("../assets/images/ict.jpg")} alt="" />,
            title: 'Web design Project 1',
            caption: 'A short description',
            description: 'This is my Project Description',
            links: [
                {link: 'https://github.com/adaji025', icon: <GitHubIcon /> },
                {link: 'https://github.com/adaji025', icon: <Language /> }
            ]
        },

        // Javascipt
        {
            tag: 'Javascript',
            image: <img src={Ict} alt="" />,
            title: 'JS Project 1',
            caption: 'A short description',
            description: 'This is my Project Description',
            links: [
                {link: 'https://github.com/adaji025', icon: <GitHubIcon /> },
                {link: 'https://github.com/adaji025', icon: <Language /> }
            ]
        },

        // React 
        {
            tag: 'Reactjs',
            image: '<img src={Ict} alt="" />',
            title: 'React Project 1',
            caption: 'A short description',
            description: 'This is my Project Description',
            links: [
                {link: 'https://github.com/adaji025', icon: <GitHubIcon /> },
                {link: 'https://github.com/adaji025', icon: <Language /> }
            ]
        },
        {
            tag: 'Reactjs',
            image: 'https://www.freepik.com/free-vector/wavy-background-with-copy-space_15186165.htm#&position=0',
            title: 'React Project 2',
            caption: 'A short description',
            description: 'This is my Project Description',
            links: [
                {link: 'https://github.com/adaji025', icon: <GitHubIcon /> },
                {link: 'https://github.com/adaji025', icon: <Language /> }
            ]
        },

        // Photograhy
        {
            tag: 'Photography',
            image: 'https://pexels.com/photo/birds-flying-on-mid-air-5829180/',
            title: 'Photo Project 1',
            caption: 'A short description',
            description: 'This is my Project Description',
            links: [
                {link: 'https://github.com/adaji025', icon: <GitHubIcon /> },
                {link: 'https://github.com/adaji025', icon: <Language /> }
            ]
        },
    ]
}