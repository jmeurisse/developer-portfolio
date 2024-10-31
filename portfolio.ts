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
    "I am a software engineer with 9 years of experience at NASA, I specialize in developing \
and leading complex multi-physics simulation platforms. My journey from Intern to Lead Software Engineer \
has equipped me with a robust technical background and strong leadership capabilities, including 7 years of management experience.",
  resumeLink: "/2024-10-30_Jeremie_Meurisse_Resume.pdf",
};

export const openSource = {
  githubUserName: "jmeurisse",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "jeremie.meurisse@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeremie-meurisse-70578787/",
  github: "https://github.com/jmeurisse",
  researchgate: "https://www.researchgate.net/profile/Jeremie-Meurisse", 
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
        emoji("🚀 Predictive Simulation Tools Design & Development"),
        emoji("🛠️ Software Testing, Maintenance & Launch"),
        emoji("📊 Data-driven Model Validation & Statistical Analysis"),
        emoji("🌐 Large-Scale Distributed Systems & HPC Expertise"),
        emoji("🤖 ML/AI Integration & SDK/API Deployment"),
        emoji("📣 Technical Advocacy & Community Engagement"),
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
    desc: "9 years of software development. Built 6 CAE simulation tools from scracth to launch. \
Developed CI/CD framework for automated tests. \
Led code optimization, and open-source transitions to enhance \
product quality and performance. Improved UX by adding Conda packages, HPC modules, cloud integration, and SQL web database."
  },
  {
    img: "/img/icons/management.png",
    name: "Leadership & Collaboration",
    desc: "7 years of management. Led 12 NASA projects with 8 engineers, overseeing code development, \
research, milestones, and long-term planning. Secured $3M in research funding. Coordinated with NASA leadership, \
managed team administration, hosted 30 annual partner visits, and established 2 international research agreements.",
  },
  {
    img: "/img/icons/deep-learning.png",
    name: "Machine Learning Integration",
    desc: "3 years leading ML integration. Supervised deep learning tools for video and 3D imaging segmentation. \
Trained PINN to develop surrogate models. Fine-tuned GPT-NeoX (1.3B) for knowledge management systems. \
Organized ML training sessions and facilitated collaborations with external experts to elevate team proficiency."
   },
  {
    img: "/img/icons/innovation.png",
    name: "Research & Innovation",
    desc: "Led applied science projects in material modeling to support NASA missions and technologies. \
Published 19 journal papers and presented at 20 conferences using large-scale simulation data. \
Developed multiscale models addressing NASA’s challenges in material response, hypersonic CFD, radiation, and plasma physics."
  },
];

export const software: SoftwareType[] = [
  {
    name: "PATO",
    desc: ["Description: R&D platform for analyzing porous reactive materials in high-temperature environments\
, advancing next-generation thermal protection systems",
           "My Role: Lead developer since 2017",
           "Deployment: CI/CD framework, Conda packages, HPC modules, docs, cloud integration, and SQL database",
           "Community: 100+ developers and 200+ users",
           "Language: C/C++ and Python",
           "Release: NASA Open Source",],
    github: "https://github.com/nasa/pato",
    link: "https://pato.ac/index.php/engineering-design/",
    gifSrc: "/img/nasa/pato.gif",
    demo: "https://colab.research.google.com/drive/1yFm3BRhPpf15Tu6C77qLd4l-xQn71GBB?usp=sharing",
  },
  {
    name: "ARCHeS",
    desc: ["Description: Digital twin of arc heaters, simulating unsteady plasma flows to support aerothermal, electromagnetic, and radiative analysis",
           "My Role: Lead developer since 2016",
           "Deployment: GPU-accelerated radiation optimization, Python tools for visualization, multi-physics integration",
           "Physics: Magnetohydrodynamics and 3D radiation",
           "Language: C/C++ and Python",
           "Release: Internal deployment for NASA analysis",
           ],
    link: "https://doi.org/10.1016/j.ast.2022.107465",
    gifSrc: "/img/nasa/arches.gif",
  },
  {
    name: "PuMA",
    desc: ["Description: R&D platforms for analyzing micro-structural properties of porous materials",
           "My Role: Supervisor since 2019, overseeing code development, research, and long-term planning",
           "Deployment: CI/CD framework, Conda packages, HPC modules, docs, video tutorials",
           "Award: 2022 NASA Software of the Year",
           "Language: C/C++ and Python",
           "Release: NASA Open Source",
           ],
    github: "https://github.com/nasa/puma",
    link: "https://doi.org/10.1016/j.softx.2018.03.001",
    gifSrc: "/img/nasa/puma.gif",
    demo: "https://mybinder.org/v2/gl/jcfergus%2Fpuma-dev/main",
  },
  {
    name: "SPARTA",
    desc: ["Description: DSMC code for simulating rarefied gas flows during hypersonic atmospheric entry",
           "My Role: Supervisor since 2019, overseeing code development, research, and long-term planning.",
           "Deployment: HPC modules, user guides, GPU-accelerated computations with Kokkos",
           "Validation: Compared with arc-jet and flight data",
           "Language: C/C++",
           "Release: Sandia Open Source",
           ],
    github: "https://github.com/sparta/sparta",
    link: "https://ntrs.nasa.gov/api/citations/20220008045/downloads/FAR_paper_PMM.pdf",
    gifSrc: "/img/nasa/sparta.gif",
  },
  {
    name: "TomoSAM",
    desc: ["Description: Deep learning segmentation tool for 3D imaging used in micro-structural analysis",
           "My Role: Supervisor since 2019, overseeing code development, research, and long-term planning",
           "Language: Python",
           "Release: NASA Open Source (PuMA plug-in)"],
    github: "https://github.com/fedesemeraro/SlicerTomoSAM",
    link: "https://doi.org/10.48550/arXiv.2306.08609",
    gifSrc: "/img/nasa/tomosam.gif"
  },
  {
    name: "arcjetCV",
    desc: ["Description: Deep learning tool for segmenting shocks and samples in arc-jet video analysis",
           "My Role: Supervisor since 2019, overseeing code development, research, and long-term planning",
           "Language: Python",      
           "Release: NASA Open Source"],
    github: "https://github.com/magnus-haw/arcjetCV",
    link: "https://doi.org/10.48550/arXiv.2404.11492",
    gifSrc: "/img/nasa/arcjet_video.gif"
  },
];

export const projects: ProjectType[] = [
  {
    name: "PICA-NuSil Material Model",
    desc: "Developed an equilibrium material response model in PATO. \
This model accounts for the impact of NuSil, a silicone overcoat used for \
contamination control during assembly, testing, and launch. \
The model was applied to heatshields of MSL and Mars 2020 missions, \
providing accurate predictions to support NASA missions with data-driven decisions.",
    link: "https://doi.org/10.1016/j.ijheatmasstransfer.2022.123523",
    imageSrc: "/img/nasa/pica-n.png",
  },
  {
    name: "Venus Mission Concept",
    desc: "Developed a suite of modeling tools that integrate aerosol-sampling inlets, \
thermal protection systems, and optical analysis into a compact probe. \
These tools predict the aerothermal environment, simulate flow dynamics, and assess \
particle capture efficiency to guide design improvements and safeguard sample integrity.",
    link: "https://ntrs.nasa.gov/api/citations/20240009219/downloads/GentryNaughtonMeurisse_AERACEPT_final.pdf",
    imageSrc: "/img/nasa/aeracept.png",
  },
  {
    name: "Validation using Martian Data",
    desc: "Validated the ablation models in PATO using comparisons with MSL/Mars 2020 data \
and experimental results. The models were benchmarked against both arc-jet tests and in-flight \
data to ensure accurate predictions of material temperature and recession during atmospheric entry, ensuring reliability for mission-critical design decisions​.",
    link: "https://doi.org/10.2514/6.2023-2720",
    imageSrc: "/img/nasa/mars2020.png"
  },
  {
    name: "CubeSat Embedded Software",
    desc: "Developed embedded flight software to manage CubeSat science data and built a \
Python-based ground control interface. The code was successfully tested during an Antarctica balloon flight, \
calibrating a high-energy X-ray detector for solar observations. \
It ensures real-time data management and enhances system reliability during flight.",
    link: "https://www.researchgate.net/profile/Amir-Caspi-2/publication/303875839_First_flight_of_SMASH_the_SwRI_Miniature_Assembly_for_Solar_Hard_X-rays/links/5759c99d08ae9a9c954f261a/First-flight-of-SMASH-the-SwRI-Miniature-Assembly-for-Solar-Hard-X-rays.pdf",
    imageSrc: "/img/nasa/cubesat.png",
  },
];


export const experience: ExperienceType[] = [
  {
    role: "Lead Software Engineer",
    company: "NASA Ames Research Center",
    contractor: "contracted by AMA, Inc.",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Jan 2024 - Present",
    titles: ["20% Management", "80% Software"],
    desc: [
      ["Manage 8-member engineering team, overseeing 5 concurrent projects", "Foster collaboration with external partners", "Shape and execute strategic roadmaps"],
      ["Develop ML-integrated CAE simulation platforms", "Architect and maintain scalable codebases", "Drive HPC performance optimizations"],
    ],   
  },
  {
    role: "Senior Software Engineer",
    company: "NASA Ames Research Center",
    contractor: "contracted by AMA, Inc.",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Nov 2020 - Jan 2024",
    titles: ["10% Management", "90% Software"],
    desc: [
      ["Managed 8-member engineering team", "Coordinated 12 projects and engaged with external developers", "Led strategic planning and resource allocation"],
      ["Developed ML-integrated CAE simulation tools", "Wrote, tested, maintained, and reviewed production code", "Optimized performance for HPC environments"],
    ],        
  },
  {
    role: "Software Engineer",
    company: "NASA Ames Research Center",
    contractor: "contracted by STC and UIUC",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Jan 2016 - Oct 2020",
    titles: ["5% Management", "95% Software"],
    desc: [
      ["Led 4-member team on targeted NASA projects", "Handled project planning and goal setting", "Collaborated with 10+ external partners"],
      ["Developed simulation tools and pipelines", "Implemented performance tuning strategies", "Contributed to core code development"],
    ],    
  },
  {
    role: "Software Engineer Intern",
    company: "NASA Ames Research Center",
    contractor: "contracted by UIUC",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Jun 2015 - Dec 2015",
    titles: ["20% Hardware", "80% Software"],
    desc: [
      ["Assisted in setting up CubeSat components", 
       "Calibrated sensors for Antarctica balloon test", 
       "Collaborated with partners on IMU system integration"],
      ["Developed embedded flight software", 
       "Built GUI for real-time telemetry", 
       "Tested code for onboard data processing"],
    ],
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "ISAE - Supaero",
    subHeader: "M.S. in Aerospace Engineering",
    duration: "2013 - 2015",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "HEC Paris",
    subHeader: "Certificate in Innovation Management",
    duration: "2015",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "UCLouvain - EPL",
    subHeader: "B.S. & M.S. in Electromechanical Engineering",
    duration: "2009 - 2013",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
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
