import B2C from './assets/images/projectImages/showcaseB2C.png'
import B2B from './assets/images/projectImages/showcaseB2B.png'
import WD from './assets/images/projectImages/WD.png'
import dalle from './assets/images/projectImages/dalle.png'
import homeBanner from './assets/images/homeBanner.jpg'
import GuildFacet from './assets/images/projectImages/guildFacet.png'

// 7138a3

const logotext = "Omprakash Patel";
const meta = {
    title: "Omprakash Patel",
    description: "I’m Ompraksh Patel data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Omprakash Patel",
    animated: {
        first: "I am Reactjs Developer",
        second: "2+ year of Experience",
        third: "I develop Websites",
    },
    description: "Experienced Software Development Engineer with a proven track record in developing and implementing software solutions. Skilled in various programming languages and frameworks, adept at troubleshooting and problem-solving. Seeking a challenging role as a React Developer to utilize my expertise in building efficient and user-friendly web applications",
    your_img_url: homeBanner,
};

const dataabout = {
    title: "Introduction",
    aboutme: "I am a React developer with 2+ years of experience in React and Next.js, and I am available to join immediately. I am excited about the opportunity to contribute to your team and would love to discuss how my skills can benefit your projects.",
};
const worktimeline = [{
        jobtitle: "Reactjs Developer",
        where: "Task Source",
        date: "Currently working",
    },
    {
        jobtitle: "Nextjs Developer",
        where: "Task Source",
        date: "Currently working",
    },
    {
        jobtitle: "Reactjs Developer",
        where: "Exergy Infotech",
        date: "Feb 2022 - Dec 2022",
    },
];

const skills = [{
        name: "Reactjs",
        // value: 99,
    },
    {
        name: "Nextjs",
        // value: 99,
    },
    {
        name: "Nodejs",
        // value: 99,
    },
    {
        name: "MongoDB",
        // value: 99,
    },
    {
        name: "Javascript",
        // value: 99,
    },
    {
        name: "Redux Toolkit",
        // value: 99,
    },
    {
        name: "Bootstrap",
        // value: 99,
    },
    {
        name: "HTML",
        // value: 99,
    },
    {
        name: "CSS",
        // value: 99,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [
    {
        img: B2B,
        description: "B2B Ecommerce Product",
        link: "https://b2b.demobw.com/",
    },
    {
        img: WD,
        description: "We've made it easy to get up to speed on everything you need to know!",
        link: "https://weddingdaydiamonds.com/",
    },
    {
        img: B2C,
        description: "B2C Ecommerce Product",
        link: "https://showcase.demobw.com/",
        
    },
    {
        img: GuildFacet,
        description: "Our engagement and wedding rings are among the finest in the world",
        link: "https://guildandfacet.com/",
    },
    {
        img: dalle,
        description: "Bring your ideas to life with Dall-E Free",
        link: "https://www.dall-efree.com/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "connecttoom29@gmail.com",
    YOUR_FONE: "9926333085",
    YOUR_FONE_link: `tel:9926333085`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/omprakash-patel29/   ",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    // services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};