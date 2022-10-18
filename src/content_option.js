import Image from "./assets/images/homepage2.png"
import Image1 from "./assets/images/2DPlans/2Dplan1.png"
import Image2 from "./assets/images/12345.jpg"
import Image3 from "./assets/images/AA.jpg"
import Image4 from "./assets/images/Comparc.jpg"
import Image5 from "./assets/images/Highrise.jpg"
import Image6 from "./assets/images/Modernext.jpg"

const logotext = "Tone Studios Design";
const meta = {
    title: "Tone Studios",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "./assets/images/white.png",
    animated: {
        first: "Design Experts",
        second: "Fast Execution",
        third: "Instant Payment",
    },
    description: "Up & Coming design studios backed by talented experts",
    your_img_url: Image,
};

const dataabout = {
    title: "Team background",
    aboutme: "Tone Design Studio, is a full-service company located in United Arab Emirates & Saudi Arabia. Specializing in both residential and commercial, and have made many projects as architecture , interior, landscape and execution, since 2019",
};
const worktimeline = [{
        jobtitle: "Professional Architect, Specialized in Interior Design",
        where: "Nadra Al Dabaan",
    },
    {
        jobtitle: "Professional Architect, Specialized in Interior Design, Project Management",
        where: "Hana Hamwi",
    },
    {
        jobtitle: "Professional Architect, Specialized in Interior Design, Project Management",
        where: "Luda Johnson",
    },
    {
        jobtitle: "Business Manager and Co Founder",
        where: "Yasin Larbi",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "Interior Design",
        description: `Client Consultation. \n
        Floor and Space Planning. \n
        2D/3D Rendering. \n
        Design Management. \n
        Painting and Polishing. \n
        Color Schemes and Lighting Plans. \n
        Decoration, Restoration, and Installation.`,
    },
    {
        title: "Exterior Design",
        description: "We provide expert on your home's exterior! We know everything from paint, lighting, doors, awnings, shutters, planters, roof styles, to porticos, home additions, and cladding.",
    },
    {
        title: "Construction",
        description: "We ensure that every decision being made will maximize your investment. With our creative partners you can trust, this pre-construction phase will help set your project up for success.",
    },
];

const dataportfolio = [{
        img: Image1,
        desctiption: "Living Room",
        link: "#",
    },
    {
        img: Image2,
        desctiption: "High rise Building",
        link: "#",
    },
    {
        img: Image3,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: Image4,
        desctiption: "Modern Designs",
        link: "#",
    },
    {
        img: Image5,
        desctiption: "Mosque",
        link: "#",
    },
    {
        img: Image6,
        desctiption: "Long Hall",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_i0xeo7f",
    YOUR_TEMPLATE_ID: "template_lilfhks",
    YOUR_USER_ID: "4aJW5PJP3CRcAksNb",
};

const socialprofils = {
    github: "https://instagram.com/tonedesignstudio",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    twitch: "https://twitch.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
