import { useEffect } from "react";
import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
} from "../components/pagesHome";
import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebase";
import SEO from "../utils/SEO";
const Homepage = () => {
  useEffect(() => {
    logEvent(analytics, "homepage_event");
  }, []);
  return (
    <>
      <SEO
        title="Lucky Indra Efendi - Portfolio"
        description=" Hello, My name is Lucky Indra Efendi. I bring with me 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am proficient in utilizing modern technologies such as React JS and Next JS to build cutting-edge web applications. On the backend, I leverage Express JS to ensure seamless functionality."
        author="Lucky Indra Efendi"
        keywords="Lucky Indra Efendi, Portfolio Lucky Indra Efendi, Portfolio, Frontend Developer, Frontend Developer Portfolio,FullStack Web Developer"
        robots="index, follow"
        googleBot="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        OGUrl={import.meta.env.VITE_PUBLIC_URL}
        OGimage="/preview.png"
        TwTitle="Lucky Indra Efendi - Portfolio"
        TwCard="/preview.png"
        TwDesc=" Hello, My name is Lucky Indra Efendi. I bring with me 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am proficient in utilizing modern technologies such as React JS and Next JS to build cutting-edge web applications. On the backend, I leverage Express JS to ensure seamless functionality."
      />
      <div className=" mt-32">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </>
  );
};

export default Homepage;
