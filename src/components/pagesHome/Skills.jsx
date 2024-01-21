import SEO from "../../utils/SEO";
import { skill } from "../../utils/skill";
const Skills = () => {
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
      <section id="about" className="mt-20">
        <div className="grid justify-center">
          <h1 className="text-white font-poppins text-3xl sm:text-4xl font-bold uppercase ">
            Skill & Ability
          </h1>
          <p className="uppercase text-pink-400 text-center tracking-widest">
            Explore Now
          </p>
        </div>
        <ul className="flex flex-wrap gap-5 w-full sm:w-[70%] m-auto mt-10 justify-center">
          {skill.map((item) => (
            <li className="" key={item.id}>
              <div className="bg-[#1d1c1c] px-3 py-3 rounded-full">
                {item.icon}
              </div>
              <p className="text-white font-poppins text-xs mt-1 sm:text-sm text-center">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Skills;
