import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const CoreSkills = dynamic(() => import("../containers/CoreSkills"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Software = dynamic(() => import("../containers/Software"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <CoreSkills />
      <Software />
      <Projects />
      <Experience />
      <Education />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then(res => res.json());

  return {
    props: { githubProfileData },
  };
}
