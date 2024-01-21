const About = () => {
  return (
    <>
      <section id="about" className="mt-28">
        <div className="grid justify-center">
          <h1 className="text-white font-poppins text-3xl sm:text-4xl font-bold uppercase ">
            About Me
          </h1>
          <p className="uppercase text-pink-400 text-center tracking-widest">
            Explore Now
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-4 items-center">
          <div id="aboutCover" className="sm:flex sm:justify-center hidden">
            <img
              src="/anime.jpg"
              alt=""
              className="rounded-t-xl rounded-b-xl w-72 h-56  object-cover "
            />
          </div>
          <p className="text-white font-poppins text-sm sm:text-base mt-4">
            I possess proficient coding skills in ReactJS, Next JS, and
            TailwindCSS, acquired through four years of dedicated work as a
            Freelance Frontend Developer. My expertise lies in crafting dynamic
            and user-friendly web applications, primarily utilizing ReactJS and
            staying abreast of the latest technologies
            <br />
            <br />I am actively seeking opportunities that not only align with
            my skill set but also contribute to my continuous personal and
            professional development. My commitment to delivering high-quality,
            innovative solutions makes me an ideal candidate for roles that
            require a skilled and motivated Frontend Developer.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
