import { skill } from "../../utils/skill";
const Skill = () => {
  return (
    <>
      <section id="about" className="mt-28">
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

export default Skill;
