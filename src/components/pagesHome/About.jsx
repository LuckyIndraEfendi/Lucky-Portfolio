import SEO from "../../utils/SEO";
const About = () => {
  return (
    <>
      <SEO
        title="About - Lucky Indra Efendi"
        description=" Hello, My name is Lucky Indra Efendi. I bring with me 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am proficient in utilizing modern technologies such as React JS and Next JS to build cutting-edge web applications. On the backend, I leverage Express JS to ensure seamless functionality."
        author="Lucky Indra Efendi"
        keywords="Lucky Indra Efendi, Portfolio Lucky Indra Efendi, Portfolio, Frontend Developer, Frontend Developer Portfolio, FullStack Web Developer, Experience - Lucky Indra Efendi"
        robots="index, follow"
        googleBot="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        OGUrl={import.meta.env.VITE_PUBLIC_URL}
        OGimage="/png/about.png"
        TwTitle="Experience - Lucky Indra Efendi"
        TwCard="/png/about.png"
        TwDesc=" Hello, My name is Lucky Indra Efendi. I bring with me 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am proficient in utilizing modern technologies such as React JS and Next JS to build cutting-edge web applications. On the backend, I leverage Express JS to ensure seamless functionality."
      />
      <section id="about" className="mt-20">
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
