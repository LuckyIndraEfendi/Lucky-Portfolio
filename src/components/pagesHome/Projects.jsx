import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Link } from "react-router-dom";
const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProject = async () => {
      let list = [];
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setProjects(list);
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
      <section id="projects" className="mt-28">
        <div className="grid justify-center" data-aos="fade-up">
          <h1 className="text-white font-poppins text-3xl sm:text-4xl font-bold uppercase ">
            Projects
          </h1>
          <p className="uppercase text-pink-400 text-center tracking-widest">
            Explore Now
          </p>
        </div>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-5"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {loading
            ? [1, 2, 3, 4].map((item) => (
                <li
                  className="bg-[#1f1d1d] h-72 rounded-md animate-pulse"
                  key={item}
                ></li>
              ))
            : projects.map((item) => (
                <li className="bg-[#1f1d1d] rounded-md" key={item?.id}>
                  <div className="images ">
                    <img
                      src={item?.banner}
                      alt=""
                      className="w-full rounded-md h-36 object-cover"
                    />
                  </div>
                  <div className=" px-3 py-3">
                    <p className="text-gray-300 font-poppins text-sm ">
                      {item?.description.length > 150
                        ? `${item.description.substring(0, 150)}...`
                        : item.description}
                    </p>
                    <div className="flex gap-3 justify-between pb-2">
                      <Link to={`/project/${item?.id}`}>
                        <button className="text-white hover:bg-[rgba(255,255,255,0.1)] mt-4 ring-1 ring-gray-300 px-4 py-2 text-sm rounded-full">
                          Details Project
                        </button>
                      </Link>
                      <Link to={item?.live_demo}>
                        <button className="text-pink-500 hover:bg-[rgba(218,56,182,.1)] font-poppins mt-4 ring-1 ring-pink-500 px-4 py-2 text-sm rounded-full">
                          Live Demo
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

export default Project;
