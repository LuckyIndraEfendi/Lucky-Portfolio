import { useEffect } from "react";
import {
  Hero,
  About,
  Experience,
  Project,
  Skill,
  Contact,
} from "../components/pagesHome";
import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebase";
import SEO from "../utils/SEO";
import AOS from "aos";
import "aos/dist/aos.css";
const Homepage = () => {
  useEffect(() => {
    logEvent(analytics, "homepage_event");
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
        title="Lucky Indra Efendi - Portfolio"
        description=" Hello, my name is Lucky Indra Efendi. I have 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am skilled in using modern technologies such as React JS and Next JS to develop advanced web applications. For backend development, I utilize Express JS and Nest JS to ensure smooth functionality."
        author="Lucky Indra Efendi"
        keywords="Lucky Indra Efendi, Portfolio Lucky Indra Efendi, Portfolio, Frontend Developer, Frontend Developer Portfolio,FullStack Web Developer"
        robots="index, follow"
        googleBot="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        OGUrl={import.meta.env.VITE_PUBLIC_URL}
        OGimage="/preview.png"
        TwTitle="Lucky Indra Efendi - Portfolio"
        TwCard="/preview.png"
        TwDesc=" Hello, my name is Lucky Indra Efendi. I have 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am skilled in using modern technologies such as React JS and Next JS to develop advanced web applications. For backend development, I utilize Express JS and Nest JS to ensure smooth functionality."
      />
      <div className=" mt-32">
        <Hero />
        <About />
        <Experience />
        <Project />
        <Skill />
        <Contact />
      </div>
    </>
  );
};

export default Homepage;
