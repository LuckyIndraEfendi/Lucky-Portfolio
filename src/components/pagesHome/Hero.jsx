import { useEffect, useRef } from "react";
import Typed from "typed.js";
const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Lucky Indra Efendi",
        "Frontend Web Developer",
        "Freelancer",
        "Backend Developer",
      ],
      typeSpeed: 75,
      backSpeed: 75,
      backDelay: 500,
      startDelay: 1000,
      showCursor: true,
      cursorChar: "|",
      loopCount: Infinity,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero mt-10 grid gap-10 sm:grid-cols-2 items-center justify-between">
      <div
        id="hero"
        className="order-2 sm:order-1 opacity-0"
        data-aos="fade-up"
      >
        <h1 className="text-white font-poppins font-bold text-2xl lg:text-4xl">
          Hi, I'm <span ref={el} className="text-pink-500"></span>
        </h1>
        <p className="font-poppins text-[15px] mt-3  text-gray-200">
        Hello, my name is Lucky Indra Efendi. I have 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am skilled in using modern technologies such as React JS and Next JS to develop advanced web applications. For backend development, I utilize Express JS and Nest JS to ensure smooth functionality.
        </p>
        <div className="btnGrub mt-5 flex gap-5">
          <button className="ring-1 font-semibold hover:cursor-pointer text-white font-karla hover:bg-[rgba(206,25,85,.1)] duration-300 px-5 py-2 rounded-full ring-[#ce1955]">
            Hire me!
          </button>
          <a
            href="/pdf/Lucky-Indra-Efendi-CV.pdf"
            className="ring-1 font-semibold hover:cursor-pointer text-white font-karla hover:bg-[rgba(206,25,85,.1)] duration-300 px-5 py-2 rounded-full ring-[#ce1955]"
          >
            Download CV
          </a>
        </div>
      </div>
      <div
        id="profileImage"
        className="flex sm:justify-end py-5 justify-center order-1 sm:order-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img
          src="/profile/profile2.jpeg"
          alt="profile"
          onContextMenu={(e) => {
            e.preventDefault();
            return false;
          }}
          className="rounded-t-xl h-64  rounded-b-xl w-full sm:w-1/2 sm:rotate-6  object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
