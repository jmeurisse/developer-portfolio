import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  CoreSkillsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Jeremie Meurisse",
  title: "Hi, I'm Jeremie!",
  description:
    "I am a software engineer with 9 years of experience at NASA, I specialize in developing and leading complex multi-physics simulation projects. My journey from Intern to Lead Software Engineer has equipped me with a robust technical background and strong leadership capabilities, including 7 years of management experience.",
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
  subTitle: "Developing, testing, deploying, and leading predictive CAE simulation software products",
  data: [
    {
      title: "Lead Software Engineer",
      lottieAnimationFile: "/lottie/coding.json", // Path of Lottie Animation JSON File
      imagePath: "/img/nasa/nasa_tools.png",
      skills: [
        emoji("🚀 Predictive CAE Simulation Tools Design & Development"),
        emoji("🛠️ Software Testing, Maintenance & Launch"),
        emoji("📊 Data-driven Model Validation & Statistical Analysis"),
        emoji("🌐 Large-Scale Distributed Systems & HPC Expertise"),
        emoji("🤖 ML/AI Integration & SDK/API Deployment"),
        emoji("📣 Technical Community Advocacy & ISV Strategy"),
      ],
      softwareSkills: [
        { skillName: "C/C++", iconifyTag: "bxl:c-plus-plus" },
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "Java", iconifyTag: "logos:java" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "SQL", iconifyTag: "hugeicons:sql" },
        { skillName: "Fortran", iconifyTag: "simple-icons:fortran" },
        { skillName: "PyTorch", iconifyTag: "logos:pytorch-icon" },
        { skillName: "NVIDIA GPU Frameworks", iconifyTag: "simple-icons:nvidia" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "Kubernetes", iconifyTag: "logos:kubernetes" },
        { skillName: "Google Cloud", iconifyTag: "logos:google-cloud" },
        { skillName: "GitHub", iconifyTag: "fontisto:github" },
        { skillName: "AutoCAD", iconifyTag: "skill-icons:autocad-light" },
        { skillName: "Pointwise", iconifyTag: "file-icons:pointwise" },
        { skillName: "Matlab", iconifyTag: "vscode-icons:file-type-matlab" },
        { skillName: "OpenFOAM", iconifyTag: "streamline:wind-flow-1" },
        { skillName: "Ansys", iconifyTag: "simple-icons:ansys" },
        { skillName: "ParaView", iconifyTag: "lets-icons:3d-box-duotone" },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  // {
  //   Stack: "Frontend/Design", //Insert stack or technology you have experience in
  //   progressPercentage: "85", //Insert relative proficiency in percentage
  // },
  // {
  //   Stack: "Backend",
  //   progressPercentage: "90",
  // },
  // {
  //   Stack: "Programming",
  //   progressPercentage: "95",
  // },
];

export const coreSkills: CoreSkillsType[] = [
  {
    img: "/img/icons/programming.png",
    name: "Software Development",
    desc: "9 years of software development. Built 6 CAE simulation software from scracth to launch. \
Developed CI/CD testing framework, ensuring high-quality, automated tests. \
Manage feature integration, code optimization, and transitioning to open-source platforms to enhance \
product quality and performance. Improved UX by adding conda packages, HPC modules, cloud integration, and SQL web database."
  },
  {
    img: "/img/icons/management.png",
    name: "Leadership & Collaboration",
    desc: "7 years of management. Led 12 NASA projects with 8 engineers, overseeing code development, \
research, milestones, and long-term planning. Secured $3M in research funding. Coordinated with NASA leadership, \
managed team administration, organized 30 annual visits for professors and students, and established 2 international \
agreements with research institutes.",
  },
  {
    img: "/img/icons/deep-learning.png",
    name: "Machine Learning",
    desc: "3 years of ML experience. Supervised development of deep learning segmentation tools for video and 3D imaging \
data. Trained physics-informed neural networks to create surrogate models for statistical analysis. Fine-\
tuned generative AI model GPT-NeoX (1.3B) to enhance knowledge management systems. Participated in ML trainings and \
industry conferences. Facilitated collaborative sessions with external experts, enhancing team proficiency in ML."
   },
  {
    img: "/img/icons/innovation.png",
    name: "Research & Innovation",
    desc: "Published 19 journal papers and presented at 20 leading conferences using large-scale CAE simulation data to drive scientific \
advancements. Developed novel multiscale models to address critical NASA challenges such as micro-tomography analysis, \
material response, particle tracking, turbulence, hypersonic CFD, radiation, and plasma physics.",
  },
];


export const educationInfo: EducationType[] = [
  {
    schoolName: "ISAE - Supaero (France)",
    subHeader: "Master of Engineering in Aerospace",
    duration: "2013 - 2015",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "HEC Paris",
    subHeader: "Certificate, Innovation Management in Aviation & Aerospace",
    duration: "2015",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "UCLouvain - EPL (Belgium)",
    subHeader: "Bachelor & Master of Engineering in Electro-Mechanics",
    duration: "2009 - 2013",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Lead Software Engineer",
    company: "NASA Ames Research Center (AMA, Inc.)",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Jan 2024 - Present",
    desc: "Drive strategic initiatives and lead the development of predictive simulation products while maintaining a strong technical focus.",
  },
  {
    role: "Senior Software Engineer",
    company: "NASA Ames Research Center (AMA, Inc.)",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Nov 2020 - Jan 2024",
    desc: "Led engineering team developing physics-based simulation tools for critical NASA missions, creating advanced \
software, improving user experience, and building open-source infrastructure to support large-scale simulations and foster collaboration.",
  },
  {
    role: "Software Engineer",
    company: "NASA Ames Research Center (STC & UIUC)",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Jan 2016 - Oct 2020",
    desc: "Led development of 2 complex simulation software in C/C++ from scratch, including feature integration, testing \
frameworks, and model validation through rigorous experiments. Managed an engineering team, delivering high-quality, \
scalable solutions.",
  },
  {
    role: "Software Engineer Intern",
    company: "NASA Ames Research Center (UIUC)",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Jun 2015 - Dec 2015",
    desc: "Executed projects on CubeSat constellation for solar observation and developed critical software for space weather missions.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "PATO",
    desc: "Led development of PATO (ablation analysis R&D platform in C/C++), coordinating with \
100+ developers and 200+ users. Released PATO as open-source by collaborating with cross-functional teams and navigating \
government paperwork. Expanded testing to ensure ongoing software integrity. Improved UX by adding conda packages, \
supercomputer modules, user guides, Google Cloud integration, and SQL web database using Django and JavaScript.",
    github: "https://github.com/nasa/pato",
    link: "https://pato.ac/index.php/about/",
    videoSrc: "/img/nasa/pato.mp4",
  },
  {
    name: "ARCHeS",
    desc: "Designed and implemented ARCHeS (arc heater digital twin) for NASA's entry systems. \
Created Python tools for enhanced visualization, optimization, and multi-physics integration. Optimized ARCHeS with GPU \
acceleration using CUDA and Kokkos during NVIDIA hackathon, enhancing 3D radiation model performance by 100x.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1270963822001390",
    videoSrc: "/img/nasa/arches.mp4",
  },
  {
    name: "PuMA",
    desc: "Supervised PuMA (micro-structure analysis), overseeing code development, research, milestones, and long- \
term planning. PuMA won the 2022 NASA Software of the Year Award.",
    github: "https://github.com/nasa/puma",
    videoSrc: "/img/nasa/puma.mp4",
  },
  {
    name: "TomoSAM",
    desc: "Supervised development of deep learning segmentation tools for 3D imaging data (PuMA|TomoSAM).",
    github: "https://github.com/fedesemeraro/SlicerTomoSAM",
    link: "https://github.com/fedesemeraro/SlicerTomoSAM",
    videoSrc: "/img/nasa/tomosam.mp4"
  },
  {
    name: "arcjetCV",
    desc: "Supervised development of deep learning segmentation tools for video (arcjetCV).",
    github: "https://github.com/magnus-haw/arcjetCV",
    link: "https://github.com/magnus-haw/arcjetCV",
    gifSrc: "/img/nasa/arcjet_video.gif"
  },
  {
    name: "SPARTA",
    desc: "Supervised entry systems applications using SPARTA (DSMC code developed by Sandia), overseeing research, milestones, and long-term planning.",
    github: "https://github.com/nasa/puma",
    videoSrc: "/img/nasa/sparta.mp4",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Nagi Mansour",
    role: "Mentor",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Arnaud Borner",
    role: "Supervisor",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Federico Semeraro",
    role: "Past Employee",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Jeremie Meurisse",
  description: greetings.description,
  author: "Jeremie Meurisse",
  image: "https://www.linkedin.com/in/jeremie-meurisse-70578787/",
  url: "https://www.jeremie-meurisse.com",
  keywords: [
    "Jeremie",
    "Jeremie Meurisse",
    "@jmeurisse",
    "jmeurisse",
    "Portfolio",
    "Jeremie Portfolio ",
    "Jeremie Meurisse Portfolio",
  ],
};
