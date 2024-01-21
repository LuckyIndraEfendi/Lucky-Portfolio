import { TbExternalLink } from "react-icons/tb";
import { getDoc, doc } from "firebase/firestore";
import { analytics, db } from "../config/firebase";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { logEvent } from "firebase/analytics";
const AchievementDetails = () => {
  const { id } = useParams();
  const [achievement, setAchievement] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const response = await getDoc(doc(db, "achievement", id));
        setAchievement(response.data());
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
    logEvent(analytics, "achievement_details_event");
  }, []);
  console.log(achievement);
  return (
    <>
      <section id="certification" className="mt-28">
        <h1 className="text-white font-poppins text-2xl sm:text-3xl font-bold uppercase">
          Achievement Details
        </h1>
        <div className="details">
          <div className="coverBanner mt-10">
            {isLoading ? (
              <div className="w-full h-44 bg-[#8f8e8e] rounded-lg sm:w-96 animate-pulse"></div>
            ) : (
              <img
                src={achievement?.banner}
                alt=""
                width="full"
                height="full"
                className="rounded-lg h-40 w-full sm:w-[40%]  object-cover md:h-56"
              />
            )}
          </div>
          <ul className="mt-5 flex flex-col gap-3">
            {isLoading ? (
              <div className="w-full h-6 bg-[#8f8e8e] rounded-lg sm:w-96 animate-pulse"></div>
            ) : (
              <li className="flex items-center gap-5  ">
                <span className="text-slate-300  font-poppins text-base font-semibold">
                  Company
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp; :
                </span>
                <span className="text-slate-300 font-poppins text-base font-semibold">
                  {achievement?.company}
                </span>
              </li>
            )}
            {isLoading ? (
              <div className="w-full h-6 bg-[#8f8e8e] rounded-lg sm:w-96 animate-pulse"></div>
            ) : (
              <li className="flex items-center gap-5  ">
                <span className="text-slate-300  font-poppins text-base font-semibold">
                  Issued
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;:
                </span>
                <span className="text-slate-300 font-poppins text-base font-semibold">
                  {achievement?.issued}
                </span>
              </li>
            )}
            {isLoading ? (
              <div className="w-full h-6 bg-[#8f8e8e] rounded-lg sm:w-96 animate-pulse"></div>
            ) : (
              <li className="flex items-center gap-5  ">
                <span className="text-slate-300  font-poppins text-base font-semibold">
                  Expires
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </span>
                <span className="text-slate-300 font-poppins text-base font-semibold">
                  {achievement?.expires}
                </span>
              </li>
            )}
            {isLoading ? (
              <div className="w-full h-6 bg-[#8f8e8e] rounded-lg sm:w-96 animate-pulse"></div>
            ) : (
              <li className="flex items-center gap-5  ">
                <span className="text-slate-300  font-poppins text-base font-semibold">
                  Credential ID
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </span>
                <span className="text-slate-300 font-poppins text-base font-semibold">
                  {achievement?.credential_id}
                </span>
              </li>
            )}
          </ul>

          <div className="credentials mt-8">
            <h1 className="text-white text-lg  font-bold md:text-xl">
              View More :
            </h1>
            {isLoading ? (
              <div className="w-36 mt-5 h-8 rounded-full bg-[#8f8e8e] animate-pulse"></div>
            ) : (
              <div className="">
                <Link to={achievement?.credential} target="_blank">
                  <button className="ring-[.5px] mt-5  flex gap-1 items-center bg-[#131313] ring-slate-600 px-4 font-medium font-sans py-2  text-sm rounded-full text-gray-200 duration-500 hover:text-pink-400 hover:ring-pink-400 hover:cursor-pointer">
                    <TbExternalLink className="text-xl" />
                    <span>Show Credential</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="skills mt-8">
            <h1 className="text-white text-lg font-bold md:text-xl">
              Skills :
            </h1>
            <ul className=" flex flex-wrap md:w-1/2 w-full mt-5 gap-3 ">
              {isLoading ? (
                [1, 2, 3, 4, 5].map((item) => (
                  <div
                    className="w-28 h-8 rounded-full bg-[#8f8e8e] animate-pulse"
                    key={item}
                  ></div>
                ))
              ) : (
                <li className="ring-[.5px] bg-[#131313]  px-4 font-medium font-sans py-2 ring-gray-600 text-sm rounded-full text-gray-200 duration-500 hover:text-pink-400 hover:ring-pink-400 hover:cursor-pointer">
                  React JS
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementDetails;
