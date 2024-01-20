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
import { Helmet } from "react-helmet-async";
const Homepage = () => {
  useEffect(() => {
    logEvent(analytics, "homepage_event");
  }, []);
  return (
    <>
      <Helmet>
        <title>Lucky Indra Efendi Portfolio</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="w-[90%] m-auto mt-32">
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
