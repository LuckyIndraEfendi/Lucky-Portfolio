import { useEffect } from "react";
import { Skill } from "../components/pagesHome";
import SEO from "../utils/SEO";
import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebase";
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    logEvent(analytics, "skill_event");
    AOS.init({
      delay: 0,
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <>
      <SEO
        title="Skill - Lucky Indra Efendi"
        description=" Hello, My name is Lucky Indra Efendi. I bring with me 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am proficient in utilizing modern technologies such as React JS and Next JS to build cutting-edge web applications. On the backend, I leverage Express JS to ensure seamless functionality."
        author="Lucky Indra Efendi"
        keywords="Lucky Indra Efendi, Portfolio Lucky Indra Efendi, Portfolio, Frontend Developer, Frontend Developer Portfolio, FullStack Web Developer, Skill - Lucky Indra Efendi"
        robots="index, follow"
        googleBot="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        OGUrl={import.meta.env.VITE_PUBLIC_URL}
        OGimage="/png/skill.png"
        TwTitle="Skill - Lucky Indra Efendi"
        TwCard="/png/skill.png"
        TwDesc=" Hello, My name is Lucky Indra Efendi. I bring with me 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am proficient in utilizing modern technologies such as React JS and Next JS to build cutting-edge web applications. On the backend, I leverage Express JS to ensure seamless functionality."
      />
      <Skill />
    </>
  );
};

export default Skills;
