import { FaCircle } from "react-icons/fa6";
import { experience } from "../../utils/experience";
const Experience = () => {
  return (
    <section id="experience" className="mt-20 ">
      <div className="grid justify-center">
        <h1 className="text-white font-poppins text-3xl sm:text-4xl font-bold uppercase ">
          Experience
        </h1>
        <p className="uppercase text-pink-400 text-center tracking-widest">
          Explore Now
        </p>
      </div>
      <ul className="mt-10 m-auto w-full sm:w-full grid sm:grid-cols-2">
        {experience.map((item) => (
          <li className="relative flex gap-5 pb-6" key={item.id}>
            <div className="before:absolute before:left-[6px] before:h-full before:w-[3px] before:bg-[rgba(173,173,173,.5)]">
              <FaCircle className="text-[rgba(173,173,173,1)] " />
            </div>
            <div className="">
              <h1 className="text-white font-sans text-xl font-bold">
                {item.position}
              </h1>
              <p className="text-gray-400 font-sans font-medium">
                {item.startOn} - {item.endOn}
              </p>
              <p className="text-gray-200 font-poppins text-sm sm:text-base mt-2 ">
                {item.description}
              </p>
              <div className="skill mt-3 flex gap-2 flex-wrap w-full">
                {item.skills.map((item, i) => (
                  <button
                    className="ring-[.5px] ring-slate-600 px-4 font-medium font-sans py-2 text-sm rounded-full text-gray-200"
                    key={i}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
