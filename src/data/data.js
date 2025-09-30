export const about = {
    name: "Akio Hamamura Jr",
    role: "Software Developer",
    about: "Hello, I am a software developer based in Japan, this page is mostly used for my portfolio of projects, but It also serves as a resume.",
    email: "akiohmjr@gmail.com",
};

export const seo = {
    title: "About Me",
    description: "I am primarily a software developer based in Japan, but I also enjoy developing video games, this page is mostly used for my portfolio of projects, but It also serves as a resume.",
    keywords: "portfolio, web developer, Next.js, developer portfolio, minimal portfolio",
}

export const forms = {
    formspreeUrl: "https://formspree.io/f/<url>",
}

export const skills = [
    { name: "Html", alt: "html logo", icon: "/html.svg" },
    { name: "Css", alt: "css logo", icon: "/css.svg" },
    { name: "Js", alt: "js logo", icon: "/js.svg" },
    { name: "Tailwind", alt: "tailwind logo", icon: "/tailwind.svg" },
    { name: "React Js", alt: "react logo", icon: "/react.svg" },
    { name: "Next Js", alt: "nextjs logo", icon: "/nextjs.svg" },
];

export const socials = {
    github: "https://github.com/AkioHamamura",
    linkedin: "https://www.linkedin.com/in/akio-hamamura-168719192/",
};

export const projects = {
    pinProjects: [
        {
            title: "S3B - Quantitative Trading Strategy Backtesting on serverless infrastructure",
            description:
                "A Fork of the QuantDash backtesting framework that allows for backtesting of strategies and viewing values of different stocks on real time on a serverless infrastructure, without requiring the user to set up a local environment. Built using AWS Lambda, AWS DynamoDB, and AWS S3.",
            tags: ["AWS", "React Js", "Python", "Node.Js", "Serverless", "Docker", "Full stack"],
            link: "https://master.d1suu5zul1cid8.amplifyapp.com/",
        },
        {
            title: "Ant Colony AI Simulation",
            description:
                "A real-time simulation in C# / Unity that showcases the swarm intelligence of an Ant colony foraging food in a\n" +
                "dynamic environment via the ant colony algorithm for dynamic pathfinding and resource collection.",
            tags: ["C#", "Unity", "Artificial Intelligence", "Path Planning", "Decentralized Intelligence"],
            link: "https://www.youtube.com/watch?v=alXqoHlLl9o",
        },
        {
            title: "Mizzou Smart Greenhouse - Monitoring of soybean production",
            description:
                "Implemented an Embedded IoT temperature and moisture monitoring system for Soybeans, the project involved the development of an automated update system with Flask and SQL server to push C code updates to each IoT unit ",
            tags: ["Flask", "SQL", "Internet of Things", "Embedded"],
            link: "https://moaes.missouri.edu/t-e-jake-fisher-delta-research-extension-and-education-center/",
        },
        {
            title: "Satellite TV Uplink - Mitre Embedded CTF 2025",
            description:
                "Led an Agile sub-team of 3 through Jira to debug, design and develop a Satellite TV uplink system. Implemented a communication protocol with AES encryption and decryption with Python for the encoder and\n" +
                "C for decoder component.",
            tags: ["Python", "C", "Docker", "AES-256", "Internet of Things", "Embedded", "Hackaton"],
            link: "https://ectf.mitre.org/",
        },
    ],
    otherProjects: [
        {
            title: "Apartment Resident management dashboard ",
            description:
                "Relational database project with the objective of showcasing database skills by developing an application to enable digital property management. Used a Node.js middleware to link a React frontend to a MySQL backend hosted on AWS, enabling secure\n" +
                "RESTful API calls to be made.",
            tags: ["CRUD", "Full Stack", "JWT", "Node.js", "Javascript", "MySQL", "AWS", "Database" ],
            link: "",
        },
        {
            title: "Image Background remover",
            description:
                "Deployed Python Machine Learning model that processes images in an AWS Cloud environment. Containerized application using Docker and used ECR, to manage docker images and EC2 updates. Set up Load balancing and Auto scaling for EC2, enabling fast response during traffic spikes.",
            tags: ["CSS", "React Js", "Full Stack", "AWS", "Docker", "Microservice architecture", "Machine Learning", "SaaS"],
            link: "",
        },
    ],
};

export const experience = [
    {
        title: "Frontend Developer at Computer Futures - Japan, Hybrid",
        description:
            "Working on building web applications using React and Typescript, work includes building frontend components, fetching data from REST APIs, etc.",
        date: "May 2025 - Present",
    },
    {
        title: "Web Developer at Newman Educational - United States, Missouri, Remote",
        description:
            "Designing and developing frontend websites for multiple clients as well as maintaining websites for existing projects.",
        date: "April 2024 - Present",
    },
    {
        title: "Teaching assistant at Harrison College of Business and Computing - United States, Missouri",
        description:
            "Assisted faculty members of the Computer Science department in teaching courses such Introduction to Programming, Data Structures, Cyber security, etc",
        date: "August 2024 - May 2025",
    },
    {
        title: "Unity UI/UX Programmer at OctoGame Heavy - Brazil, Remote",
        description:
            "Implemented UI/UX design specifications for games made in Unity. Worked with a team of 5 developers to create a 2.5D Fighting game in Unity with C#. Also worked on an implementation of a Peer To Peer netcode system through the GGPO library.",
        date: "May 2020 - January 2021",
    },
];

export const education = [
    {
        title: "Masters in Applied Computer Science",
        description: "Southeast Missouri State University",
        date: "August 2024 - May 2025",
    },
    {
        title: "Bachelor of Science in Computer Science",
        description: "Southeast Missouri State University",
        date: "January 2020 - May 2024",
    },
]

export const blogs = [
    {
        title: "Understanding React Hooks",
        date: "12/03/2025",
        link: "#",
    },
    {
        title: "CSS Grid vs Flexbox: When to Use Which",
        date: "25/12/2024",
        link: "#",
    },
    {
        title: "Next.js SEO Best Practices",
        date: "10/07/2024",
        link: "#",
    },
];
