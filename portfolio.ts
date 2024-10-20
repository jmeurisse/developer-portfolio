import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Jeremie Meurisse",
  title: "Hi, I'm Jeremie!",
  description:
    "I am a software engineer with over 9 years of experience at NASA, I specialize in developing and leading complex multi-physics simulation projects. My journey from Intern to Lead Software Engineer has equipped me with a robust technical background and strong leadership capabilities, including 7 years of management experience.",
  resumeLink: "/2024-08-08_Jeremie_Meurisse_Resume.pdf",
};

export const openSource = {
  githubUserName: "jmeurisse",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:jeremie.meurisse@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeremie-meurisse-70578787/",
  github: "https://github.com/jmeurisse",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "Developing, testing, deploying, and directing predictive simulation software products with ML/AI integration.",
  data: [
    {
      title: "Lead Software Engineer",
      lottieAnimationFile: "/lottie/coding.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("🚀 Predictive Simulation Tools Design & Development"),
        emoji("🤖 ML/AI Integration                               "),
        emoji("🛠️ Software Testing, Maintenance & Launch          "),
        emoji(
          `📊 Data-driven Model Validation                    
          Telemetry-based Statistical Analysis             `
            ),
        emoji(
          `🌐 Large-Scale Distributed Systems                 
              HPC Expertise                                    
              Cloud Proficiency                                 `
            ),
      ],
      softwareSkills: [
        { skillName: "C++", iconifyTag: "logos:c-plusplus" },
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "MPI", iconifyTag: "simple-icons:mpich" },
        { skillName: "OpenMP", iconifyTag: "logos:openmp" },
        { skillName: "Fortran", iconifyTag: "simple-icons:fortran" },
        { skillName: "Java", iconifyTag: "logos:java" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "PyTorch", iconifyTag: "logos:pytorch-icon" },
        { skillName: "MuJoCo", iconifyTag: "simple-icons:mujoco" },
        { skillName: "NVIDIA Modulus", iconifyTag: "simple-icons:nvidia" },
        { skillName: "NVIDIA Warp", iconifyTag: "simple-icons:nvidia" },
        { skillName: "Git", iconifyTag: "logos:git" },
        // { skillName: "CI/CD", iconifyTag: "vscode-icons:file-type-light-ci" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "Google Cloud", iconifyTag: "logos:google-cloud" },
        { skillName: "AWS", iconifyTag: "logos:aws" },
        // { skillName: "Django", iconifyTag: "vscode-icons:file-type-django" },
        // { skillName: "React.js", iconifyTag: "vscode-icons:file-type-reactjs" },
        // { skillName: "Next.js", iconifyTag: "vscode-icons:file-type-light-next" },
        { skillName: "GitHub", iconifyTag: "akar-icons:github-fill" },
                // {
        //   skillName: "Python",
        //   iconifyTag: "logos:python",
        // },

      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Central Punjab",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Django Developer",
    company: "Meganos Software",
    companyLogo: "/img/icons/common/meganos.png",
    date: "Aug 2022 - Present",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Full Stack Developer",
    company: "Duseca Software",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "Jan 2022 - Sept 2023",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Developer",
    company: "ZRTechnologies",
    companyLogo: "/img/icons/common/zrtech.jpeg",
    date: "Aug 2022 - Jun 2023",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Backend Developer",
    company: "Bleed-AI",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2021 - Oct 2021",
    desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hanzla Tauqeer",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
