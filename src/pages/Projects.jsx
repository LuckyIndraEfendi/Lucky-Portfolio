import { Project } from "../components/pagesHome";
import SEO from "../utils/SEO";

const Projects = () => {
  return (
    <>
      <SEO
        title="Project - Lucky Indra Efendi"
        description=" Hello, My name is Lucky Indra Efendi. I bring with me 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am proficient in utilizing modern technologies such as React JS and Next JS to build cutting-edge web applications. On the backend, I leverage Express JS to ensure seamless functionality."
        author="Lucky Indra Efendi"
        keywords="Lucky Indra Efendi, Portfolio Lucky Indra Efendi, Portfolio, Frontend Developer, Frontend Developer Portfolio, FullStack Web Developer, Project - Lucky Indra Efendi"
        robots="index, follow"
        googleBot="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        OGUrl={import.meta.env.VITE_PUBLIC_URL}
        OGimage="/png/project.png"
        TwTitle="Project - Lucky Indra Efendi"
        TwCard="/png/project.png"
        TwDesc=" Hello, My name is Lucky Indra Efendi. I bring with me 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am proficient in utilizing modern technologies such as React JS and Next JS to build cutting-edge web applications. On the backend, I leverage Express JS to ensure seamless functionality."
      />
      <Project />
    </>
  );
};

export default Projects;
