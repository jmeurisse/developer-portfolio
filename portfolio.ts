import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  SoftwareType,
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
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "Developing, testing, deploying, and leading predictive CAE simulation software products.",
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
    desc: "3 years of leading ML integration. Supervised development of deep learning segmentation tools for video and 3D imaging data. \
Trained physics-informed neural networks to create surrogate models for statistical analysis. \
Fine-tuned generative AI model GPT-NeoX (1.3B) to enhance knowledge management systems. \
Participated in ML trainings and industry conferences. Facilitated collaborative sessions with external experts, enhancing team proficiency in ML."
   },
  {
    img: "/img/icons/innovation.png",
    name: "Research & Innovation",
    desc: "Lead applied science projects in physics-based material modeling \
to support cutting-edge NASA missions and technologies. \
Published 19 journal papers and presented at 20 leading conferences using large-scale simulation data to drive scientific \
advancements. Developed novel multiscale models to address critical NASA challenges such as micro-tomography analysis, \
material response, particle tracking, turbulence, hypersonic CFD, radiation, and plasma physics."
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

export const software: SoftwareType[] = [
  {
    name: "PATO",
    desc: ["Description: R&D platform to analyze porous reactive materials",
           "Language: C/C++ and Python",
           "My Role: Main developer since 2017",
           "Community: 100+ developers and 200+ users",
           "Release: NASA Open Source",
           "Deployement: CI/CD testing framework, conda packages, \
supercomputer modules, user guides, cloud integration, and SQL web database."],
    github: "https://github.com/nasa/pato",
    link: "https://pato.ac/index.php/engineering-design/",
    gifSrc: "/img/nasa/pato.gif",
    demo: "https://colab.research.google.com/drive/1yFm3BRhPpf15Tu6C77qLd4l-xQn71GBB?usp=sharing",
  },
  {
    name: "ARCHeS",
    desc: ["Designed and implemented ARCHeS (arc heater digital twin) for NASA's entry systems. \
Created Python tools for enhanced visualization, optimization, and multi-physics integration. Optimized ARCHeS with GPU \
acceleration using CUDA and Kokkos during NVIDIA hackathon, enhancing 3D radiation model performance by 100x."],
    link: "https://doi.org/10.1016/j.ast.2022.107465",
    gifSrc: "/img/nasa/arches.gif",
  },
  {
    name: "PuMA",
    desc: ["Supervised PuMA (micro-structure analysis), overseeing code development, research, milestones, and long- \
term planning. PuMA won the 2022 NASA Software of the Year Award."],
    github: "https://github.com/nasa/puma",
    link: "https://doi.org/10.1016/j.softx.2018.03.001",
    gifSrc: "/img/nasa/puma.gif",
    demo: "https://mybinder.org/v2/gl/jcfergus%2Fpuma-dev/main",
  },
  {
    name: "TomoSAM",
    desc: ["Supervised development of deep learning segmentation tools for 3D imaging data (PuMA|TomoSAM)."],
    github: "https://github.com/fedesemeraro/SlicerTomoSAM",
    link: "https://doi.org/10.48550/arXiv.2306.08609",
    gifSrc: "/img/nasa/tomosam.gif"
  },
  {
    name: "arcjetCV",
    desc: ["Supervised development of deep learning segmentation tools for video (arcjetCV)."],
    github: "https://github.com/magnus-haw/arcjetCV",
    link: "https://doi.org/10.48550/arXiv.2404.11492",
    gifSrc: "/img/nasa/arcjet_video.gif"
  },
  {
    name: "SPARTA",
    desc: ["Supervised entry systems applications using SPARTA (DSMC code developed by Sandia), overseeing research, milestones, and long-term planning."],
    github: "https://github.com/sparta/sparta",
    link: "https://ntrs.nasa.gov/api/citations/20220008045/downloads/FAR_paper_PMM.pdf",
    gifSrc: "/img/nasa/sparta.gif",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Coated TPS Model",
    desc: "A novel equilibrium ablation and thermal response model was implemented in PATO. \
The model accounts for the effect of NuSil, a silicone overcoat applied as contamination control \
during assembly, test, and launch operations for both the Mars Science Laboratory and the Mars 2020 heatshields.",
    link: "https://doi.org/10.1016/j.ijheatmasstransfer.2022.123523",
    imageSrc: "/img/nasa/pica-n.png",
  },
  {
    name: "Venus Mission Concept",
    desc: "Aerosols are essential components in the dynamics of planetary systems, influencing energy and material circulation, \
    which in turn impacts climate, weather patterns, surface evolution, and habitability. Next-generation planetary missions aim \
    to explore aerosols across multiple celestial bodies, unlocking deeper insights into these critical components of planetary atmospheres. \
    A novel technology concept developed at NASA Ames Research Center combines aerosol-sampling inlets with thermal protection materials and rapid optical analysis, \
    providing a more compact and efficient alternative to conventional large descent probes that rely on parachutes or aeroshell separation. \
    Innovative internal flow paths were developed and validated within a hybrid entry system and atmospheric sonde, supporting advanced aerosol exploration on Venus. \
    This work highlights the development and application of an extensive suite of modeling tools custom-built for simulating aerosol chemistry in planetary missions using streamlined, single-body probes.",
    link: "https://ntrs.nasa.gov/api/citations/20240009219/downloads/GentryNaughtonMeurisse_AERACEPT_final.pdf",
    imageSrc: "/img/nasa/aeracept.png",
  },
  {
    name: "Validation using Martian Data",
    desc: "Optimized and analyzed experimental and Martian flight data to validate simulations. \
Performed uncertainty quantification, ensuring accurate predictions to support NASA missions with data-driven decisions.",
    link: "https://doi.org/10.2514/6.2023-2720",
    imageSrc: "/img/nasa/mars2020.png"
  },
  {
    name: "Embedded Flight Software",
    desc: "Implemented embedded flight software in C/C++ to manage CubeSat science data during flight. \
Developed Python ground control interface, used successfully in an Antarctica balloon test to calibrate high X-ray detector.",
    link: "https://www.researchgate.net/profile/Amir-Caspi-2/publication/303875839_First_flight_of_SMASH_the_SwRI_Miniature_Assembly_for_Solar_Hard_X-rays/links/5759c99d08ae9a9c954f261a/First-flight-of-SMASH-the-SwRI-Miniature-Assembly-for-Solar-Hard-X-rays.pdf",
    imageSrc: "/img/nasa/cubesat.png",
  },
];



export const feedbacks: FeedbackType[] = [
  // {
  //   name: "Nagi Mansour",
  //   role: "Mentor",
  //   feedback:
  //     "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  // },
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
