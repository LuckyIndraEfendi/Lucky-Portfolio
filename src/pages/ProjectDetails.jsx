import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { getDoc, doc } from "firebase/firestore";
import { analytics, db } from "../config/firebase";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import SEO from "../utils/SEO";
const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const response = await getDoc(doc(db, "projects", id));
        setProjectData(response.data());
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProject();
    return () => {
      setIsLoading(false);
    };
  }, [id]);
  useEffect(() => {
    logEvent(analytics, "project_details_event");
  }, []);
  return (
    <>
      <SEO
        title="Project Details - Lucky Indra Efendi"
        description={project?.description}
        author="Lucky Indra Efendi"
        keywords={`${project?.title}, Lucky Indra Efendi, Project Lucky Indra Efendi, Portfolio, Frontend Developer, Frontend Developer Portfolio, FullStack Web Developer, Project - Lucky Indra Efendi`}
        robots="index, follow"
        googleBot="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        OGUrl={import.meta.env.VITE_PUBLIC_URL}
        OGimage={project?.banner}
        TwTitle={`Project ${project?.title} - Lucky Indra Efendi`}
        TwCard={project?.banner}
        TwDesc={project?.description}
      />
      <div className="mt-24">
        <h1 className="text-white font-poppins text-2xl sm:text-3xl font-bold uppercase">
          Project Details
        </h1>
        <div className="mt-10">
          <div className="coverBanner">
            {isLoading ? (
              <div className="w-full h-40 bg-[#8f8e8e] rounded-lg sm:w-96 animate-pulse"></div>
            ) : (
              <img
                src={project?.banner}
                alt=""
                width="full"
                height="full"
                className="rounded-lg h-40 w-full sm:w-fit  object-cover md:h-56"
              />
            )}
          </div>
          {isLoading ? (
            <div className="w-60 h-8 mt-5 rounded-lg bg-[#8f8e8e] animate-pulse"></div>
          ) : (
            <h1 className="text-white text-2xl font-karla font-bold mt-5">
              {project?.title}
            </h1>
          )}
          {isLoading ? (
            <div className=" h-24 md:h-40 w-full mt-4 rounded-lg bg-[#8f8e8e] animate-pulse"></div>
          ) : (
            <p className="text-gray-300 font-poppins text-sm mt-4 sm:text-base">
              {project?.description}
            </p>
          )}

          <div className="liveDemo mt-8">
            <h1 className="text-white text-lg">Live Demo :</h1>
            <div className="mt-5 flex gap-5">
              {isLoading ? (
                <div className="w-32 h-10 rounded-full bg-[#8f8e8e] animate-pulse"></div>
              ) : (
                <Link to={project?.live_demo} target="_blank">
                  <button className="ring-[.5px]  flex gap-1 items-center bg-[#131313] ring-slate-600 px-4 font-medium font-sans py-2  text-sm rounded-full text-gray-200 duration-500 hover:text-pink-400 hover:ring-pink-400 hover:cursor-pointer">
                    <TbExternalLink className="text-xl" />
                    <span>Live Demo</span>
                  </button>
                </Link>
              )}
              {isLoading ? (
                <div className="w-32 h-10 rounded-full bg-[#8f8e8e] animate-pulse"></div>
              ) : (
                <Link to={project?.github_project} target="_blank">
                  <button className="ring-[.5px]  flex gap-1 items-center bg-[#131313]  px-4 font-medium font-sans py-2 ring-gray-600 text-sm rounded-full text-gray-200 duration-500 hover:text-pink-400 hover:ring-pink-400 hover:cursor-pointer">
                    <FaGithub className="text-xl" />
                    <span>Github Project</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="technology mt-8">
            <h1 className="text-white text-lg">Technology :</h1>
            <ul className=" flex flex-wrap md:w-1/2 w-full mt-5 gap-3 ">
              {isLoading
                ? [1, 2, 3, 4, 5].map((item) => (
                    <div
                      className="w-32 h-10 rounded-full bg-[#8f8e8e] animate-pulse"
                      key={item}
                    ></div>
                  ))
                : project?.skills?.map((item, i) => (
                    <li
                      className="ring-[.5px] bg-[#131313]  px-4 font-medium font-sans py-2 ring-gray-600 text-sm rounded-full text-gray-200 duration-500 hover:text-pink-400 hover:ring-pink-400 hover:cursor-pointer"
                      key={i}
                    >
                      {item}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
