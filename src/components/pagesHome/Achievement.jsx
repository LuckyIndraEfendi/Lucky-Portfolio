import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Link } from "react-router-dom";
import { TbExternalLink } from "react-icons/tb";
import SEO from "../../utils/SEO";
const Achievement = () => {
  const [achievement, setAchievement] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProject = async () => {
      let list = [];
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "achievement"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setAchievement(list);
        setLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, []);
  return (
    <>
      <SEO
        title=" Licenses & Certifications - Lucky Indra Efendi"
        description=" Hello, My name is Lucky Indra Efendi. I bring with me 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am proficient in utilizing modern technologies such as React JS and Next JS to build cutting-edge web applications. On the backend, I leverage Express JS to ensure seamless functionality."
        author="Lucky Indra Efendi"
        keywords="Lucky Indra Efendi, Portfolio Lucky Indra Efendi, Portfolio, Frontend Developer, Frontend Developer Portfolio, FullStack Web Developer,  Licenses & Certifications - Lucky Indra Efendi"
        robots="index, follow"
        googleBot="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        OGUrl={import.meta.env.VITE_PUBLIC_URL}
        OGimage="/png/experience.png"
        TwTitle=" Licenses & Certifications - Lucky Indra Efendi"
        TwCard="/png/experience.png"
        TwDesc=" Hello, My name is Lucky Indra Efendi. I bring with me 3 years of experience as a Frontend Developer and 1 year as a Backend Developer. I am proficient in utilizing modern technologies such as React JS and Next JS to build cutting-edge web applications. On the backend, I leverage Express JS to ensure seamless functionality."
      />
      <section id="projects" className="mt-20">
        <div className="grid justify-center">
          <h1 className="text-white font-poppins text-3xl sm:text-4xl font-bold uppercase ">
            Licenses & Certifications
          </h1>
          <p className="uppercase text-pink-400 text-center tracking-widest">
            Explore Now
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-5">
          {loading
            ? [1, 2, 3, 4].map((item) => (
                <li
                  className="bg-[#1f1d1d] h-72 rounded-md animate-pulse"
                  key={item}
                ></li>
              ))
            : achievement.map((item, i) => (
                <li className="bg-[#1f1d1d] rounded-md" key={item?.id}>
                  <div className="images ">
                    <img
                      src={item?.banner}
                      alt=""
                      className="w-full rounded-md h-36 object-cover"
                    />
                  </div>
                  <div className=" px-3 py-2">
                    <h1 className="text-white font-poppins text-xl font-bold py-1">
                      {item?.title.length > 20
                        ? `${item.title.substring(0, 20)}...`
                        : item.title}
                    </h1>
                    <div className="tech">
                      <h1 className="text-gray-300 font-poppins text-base font-medium ">
                        {item?.company.length > 30
                          ? `${item.company.substring(0, 30)}...`
                          : item.company}
                      </h1>
                      <div className=" mt-1">
                        <ul className="flex flex-col gap-1 ">
                          <li className="text-gray-300 font-poppins text-sm flex justify-between items-center">
                            <span>Issued :</span>
                            <span>{item?.issued}</span>
                          </li>
                          <li className="text-gray-300 font-poppins text-sm flex justify-between items-center">
                            <span>Expires :</span>
                            <span>{item?.expires}</span>
                          </li>
                          <li className="text-gray-300 font-poppins text-sm flex justify-between items-center">
                            <span>Credential ID :</span>
                            <span>{item?.credential_id}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-between pb-2 mt-5">
                      <Link to={`/certification/${item?.id}`}>
                        <button className="ring-[.5px]  flex gap-1 items-center bg-[#131313] ring-slate-600 px-4 font-medium font-sans py-2  text-sm rounded-full text-gray-200 duration-500 hover:text-pink-400 hover:ring-pink-400 hover:cursor-pointer">
                          <span>Details</span>
                        </button>
                      </Link>
                      <Link to={`${item?.credential}`}>
                        <button className="ring-[.5px]  flex gap-1 items-center bg-[#131313] ring-slate-600 px-4 font-medium font-sans py-2  text-sm rounded-full text-gray-200 duration-500 hover:text-pink-400 hover:ring-pink-400 hover:cursor-pointer">
                          <TbExternalLink className="text-xl" />
                          <span>Show Credential</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
        </ul>
      </section>
    </>
  );
};

export default Achievement;
