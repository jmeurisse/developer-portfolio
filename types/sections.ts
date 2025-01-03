export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

export type SocialLinksType = {
  [link: string]: string;
};

// * HERO SECTION

export type GreetingsType = {
  name: string;
  title: string;
  description?: string;
  resumeLink?: string;
};

// * SKILLS SECTION

type SoftwareSkillType = {
  skillName: string;
  iconifyTag: string;
};

type SkillType = {
  title: string;
  lottieAnimationFile: string;
  imagePath: string;
  skills: React.ReactNode[] | string[];
  softwareSkills: SoftwareSkillType[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: SkillType[];
};

// * PROFICIENCY SECTION

export type SkillBarsType = {
  Stack: string;
  progressPercentage: string;
};

export type CoreSkillsType = {
  img: string;
  name: string;
  desc: string;
};

// * EDUCATION SECTION

export type EducationType = {
  schoolName: string;
  subHeader: string;
  duration: string;
  desc: string;
  grade?: string;
  descBullets?: string[];
};

// * EXPERIENCE SECTION

export type ExperienceType = {
  role: string;
  company: string;
  contractor: string;
  companyLogo: string;
  date: string;
  titles: string[];
  desc: string[][];
};

// * SOFTWARE SECTION

export type SoftwareType = {
  name: string;
  desc: string[];
  github?: string;
  link?: string;
  videoSrc?: string;
  gifSrc?: string;
  imageSrc?: string;
  demo?: string;
};

// * PROJECT SECTION

export type ProjectType = {
  name: string;
  desc: string;
  github?: string;
  link?: string;
  videoSrc?: string;
  gifSrc?: string;
  imageSrc?: string;
};

// * FEEDBACK SECTION

export type FeedbackType = {
  name: string;
  role: string;
  feedback: string;
};
