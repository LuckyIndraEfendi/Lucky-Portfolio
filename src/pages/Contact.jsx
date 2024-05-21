import { Contact } from "../components/pagesHome";
import AOS from "aos";
import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebase";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contacts = () => {
  useEffect(() => {
    logEvent(analytics, "contact_event");
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
      <Contact animate={false} />
    </>
  );
};

export default Contacts;
