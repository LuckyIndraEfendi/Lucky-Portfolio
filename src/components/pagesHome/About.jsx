const About = ({ animate }) => {
  return (
    <>
      <section id="about" className="mt-28">
        <div className="grid justify-center" data-aos="fade-up">
          <h1 className="text-white font-poppins text-3xl sm:text-4xl font-bold uppercase ">
            About Me
          </h1>
          <p className="uppercase text-pink-400 text-center tracking-widest">
            Explore Now
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-4 items-center">
          <div
            id="aboutCover"
            className="sm:flex sm:justify-center hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="/profile/profile2.jpeg"
              alt=""
              onContextMenu={(e) => {
                e.preventDefault();
                return false;
              }}
              className="rounded-t-xl rounded-b-xl w-72 h-56  object-cover "
            />
          </div>
          <p
            className="text-white font-poppins text-sm sm:text-base mt-4"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="700"
          >
            With 3 years of experience as a Freelance Frontend Developer, I have
            honed my skills in ReactJS, NextJS, and TailwindCSS, enabling me to
            create dynamic and user-friendly web applications. I remain
            dedicated to staying at the forefront of these technologies while
            crafting innovative and user-centric experiences.
            <br />
            <br />
            Currently, I seek opportunities that leverage my expertise while
            fostering my continual professional and personal growth. My
            commitment to delivering high-quality solutions through
            collaborative efforts makes me a valuable asset to teams in need of
            a skilled and motivated Frontend Developer.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
