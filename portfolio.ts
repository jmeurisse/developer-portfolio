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
has equipped me with a robust technical background and strong leadership capabilities, \
including 7 years of team management experience.",
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
  subTitle: "Developing, testing, deploying, and leading predictive simulation software products.",
  data: [
    {
      title: "Lead Software Engineer",
      lottieAnimationFile: "/lottie/coding.json", // Path of Lottie Animation JSON File
      imagePath: "/img/nasa/nasa_tools.png",
      skills: [
        emoji("🚀 Predictive Simulation Platforms Design & Development"),
        emoji("🤖 AI/ML Engineering & SDK/API Deployment"),
        emoji("🛠️ Software Testing, Maintenance & Launch"),
        emoji("🌐 Scalabe Distributed Systems & HPC Solutions"),
        emoji("🤝 Technical Leadership & Team Management"),
        emoji("📊 Data-driven Model Validation & Statistical Analysis"),
        // emoji("📣 Technical Advocacy & Community Engagement"),
        emoji("🔬 Research on Innovative Physics-Based Modeling"),
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
        // { skillName: "AutoCAD", iconifyTag: "skill-icons:autocad-light" },
        // { skillName: "Pointwise", iconifyTag: "file-icons:pointwise" },
        // { skillName: "Matlab", iconifyTag: "vscode-icons:file-type-matlab" },
        // { skillName: "OpenFOAM", iconifyTag: "streamline:wind-flow-1" },
        // { skillName: "Ansys", iconifyTag: "simple-icons:ansys" },
        // { skillName: "ParaView", iconifyTag: "lets-icons:3d-box-duotone" },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
];

export const coreSkills: CoreSkillsType[] = [
  {
    img: "/img/icons/deep-learning.png",
    name: "Machine Learning & AI",
    desc: "3 years of AI/ML engineering projects. Directed development of DL tools for video and 3D imaging segmentation. \
Trained PINNs to develop surrogate models for statistical analysis and fine-tuned GPT-NeoX 1.3B generative AI model \
to create chatbot for tool documentation. Elevated team proficiency in ML through training sessions led by external experts."
   },
   {
    img: "/img/icons/programming.png",
    name: "Software Development & HPC",
    desc: "9 years of software development. Built 6 simulation platforms from scracth to launch. \
Led CI/CD integration, code optimization, and open-source transitions. \
Improved UX by adding Conda packages, HPC modules, cloud integration, and SQL web database. \
Executed large-scale HPC simulations that deliver critical insights for NASA."
  },
  {
    img: "/img/icons/management.png",
    name: "Leadership & Strategy",
    desc: "7 years of team management. Led 12 NASA projects with 8 engineers, overseeing code development, \
research, milestones, and long-term planning. Secured $3M in research funding. Coordinated with NASA leadership, \
managed team administration, hosted 30 annual partner visits, and established 2 international research agreements."
  },
  {
    img: "/img/icons/innovation.png",
    name: "Research & Innovation",
    desc: "Led applied science projects in material modeling to support NASA missions and technologies. \
Published 19 journal papers and presented at 21 conferences using large-scale simulation data. \
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
    desc: ["Description: R&D platform for analyzing micro-structural properties of porous materials",
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
    titles: ["80% Software", "20% Management"],
    desc: [
      ["Develop ML-integrated simulation platforms", "Architect and maintain scalable codebases", "Drive HPC performance optimizations for large-scale simulations"],
      ["Manage 8-member engineering team, directing 5 concurrent projects", "Foster collaboration with 100+ external partners", "Shape and execute strategic roadmaps"],
    ],   
  },
  {
    role: "Senior Software Engineer",
    company: "NASA Ames Research Center",
    contractor: "contracted by AMA, Inc.",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Nov 2020 - Jan 2024",
    titles: ["90% Software", "10% Management"],
    desc: [
      ["Developed ML-integrated simulation platforms", "Wrote, tested, and reviewed production code", "Drive HPC performance optimizations for large-scale simulations"],
      ["Managed 8-member engineering team, leading a total of 12 projects", "Collaborated with 10+ external developer teams", "Led strategic planning and resource allocation"],
    ],        
  },
  {
    role: "Software Engineer",
    company: "NASA Ames Research Center",
    contractor: "contracted by STC and UIUC",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Jan 2016 - Oct 2020",
    titles: ["95% Software", "5% Management"],
    desc: [
      ["Developed simulation platforms and testing pipelines", "Implemented performance tuning strategies", "Contributed to core code development"],
      ["Led 4-member team on digital twin development", "Handled project planning and goal setting", "Collaborated with 10+ external partners"],
    ],    
  },
  {
    role: "Software Engineer Intern",
    company: "NASA Ames Research Center",
    contractor: "contracted by UIUC",
    companyLogo: "/img/nasa/nasa-logo.png",
    date: "Jun 2015 - Dec 2015",
    titles: ["80% Software", "20% Hardware"],
    desc: [
      ["Developed embedded flight software", 
       "Built ground interface for real-time telemetry", 
       "Tested code for onboard data processing"],
       ["Assisted in setting up CubeSat components", 
        "Calibrated sensors for Antarctica balloon test", 
        "Collaborated with partners on IMU system integration"],
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
