import B2C from './assets/images/projectImages/showcaseB2C.png'
import B2B from './assets/images/projectImages/showcaseB2B.png'
import WD from './assets/images/projectImages/WD.png'
import dalle from './assets/images/projectImages/dalle.png'
import homeBanner from './assets/images/homeBanner.jpg'
import GuildFacet from './assets/images/projectImages/guildFacet.png'

// 7138a3

const logotext = "Anshul Tamrakar";
const meta = {
    title: "",
    description: "I’m Anshul Tamrakar data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Anshul Tamrakar",
    animated: {
        first: "I am Front end Developer",
        second: "with 3 year of Experience",
        third: "I build web apps",
    },
    description: "Experienced Software Development Engineer with a proven track record in developing and implementing software solutions. Skilled in various programming languages and frameworks, adapt at troubleshooting and problem-solving. Seeking a challenging role as a Front end Developer to utilize my expertise in building efficient and user-friendly web applications",
    your_img_url: homeBanner,
};

const dataabout = {
    title: "Introduction",
    aboutme: "I am a Front end developer with 3 years of experience in React and Next.js, and I am available to join immediately. I am excited about the opportunity to contribute to your team and would love to discuss how my skills can benefit your projects.",
};
const worktimeline = [{
        jobtitle: "Reactjs Developer",
        where: "Belgium Webnet",
        date: "Currently working",
    },
    {
        jobtitle: "Nextjs Developer",
        where: "Belgium Webnet",
        date: "Currently working",
    },
    {
        jobtitle: "Reactjs Developer",
        where: "Witmates Technologies",
        date: "March 2022 - February 2023",
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
        name: "Typescript",
        // value: 99,
    },
    {
        name: "Unit Testing",
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
    {
        name: "Material UI",
        // value: 99,
    },
    {
        name: "Tailwind CSS",
        // value: 99,
    }
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
    YOUR_EMAIL: "anshultamrakar487@gmail.com",
    YOUR_FONE: "+91 7566534045",
    YOUR_FONE_link: `tel:+91 7566534045`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/anshultamrakar",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/anshul-tamrakar-51ba38166/",
    twitter: "https://x.com/anshul487",
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