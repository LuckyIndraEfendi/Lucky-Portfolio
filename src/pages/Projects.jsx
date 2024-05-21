import { useEffect } from "react";
import { Project } from "../components/pagesHome";
import SEO from "../utils/SEO";
import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebase";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    logEvent(analytics, "project_event");
    AOS.init({
      delay: 0,
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <SEO
        title="Project - Lucky Indra Efendi"
        description="Hello, my name is Lucky Indra Efendi. I have 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am skilled in using modern technologies such as React JS and Next JS to develop advanced web applications. For backend development, I utilize Express JS and Nest JS to ensure smooth functionality."
        author="Lucky Indra Efendi"
        keywords="Lucky Indra Efendi, Portfolio Lucky Indra Efendi, Portfolio, Frontend Developer, Frontend Developer Portfolio, FullStack Web Developer, Project - Lucky Indra Efendi"
        robots="index, follow"
        googleBot="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        OGUrl={import.meta.env.VITE_PUBLIC_URL}
        OGimage="/png/project.png"
        TwTitle="Project - Lucky Indra Efendi"
        TwCard="/png/project.png"
        TwDesc="Hello, my name is Lucky Indra Efendi. I have 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am skilled in using modern technologies such as React JS and Next JS to develop advanced web applications. For backend development, I utilize Express JS and Nest JS to ensure smooth functionality."
      />
      <Project animate={false} />
    </>
  );
};

export default Projects;
