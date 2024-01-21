import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
const menu = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Experience",
    path: "/experience",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Skills",
    path: "/skills",
  },
  {
    title: "Achievements",
    path: "/achievements",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      <nav
        className={`${
          scroll ? "bg-[#161414] shadow-sm shadow-[#313131]" : "bg-transparent"
        } px-5 sm:px-16 py-5 right-0  fixed top-0 w-full z-10 duration-150 flex items-center justify-between `}
      >
        <div className="logo">
          <img src="/logo/favicon.png" alt="" width={160} />
        </div>
        <div className="relative lg:hidden duration-300">
          <div className="toogle hover:cursor-pointer">
            <IoMenu className="text-white text-4xl" onClick={handleOpen} />
          </div>
          <div
            className={` ${
              open ? "block " : "hidden "
            }  absolute right-0 top-12 translate-y-5 ring-[.5px] ring-gray-600 rounded-md `}
          >
            <div className="bg-[#111010] px-4 py-4 rounded-md  flex justify-center">
              <ul className="flex gap-2 flex-col  justify-center">
                {menu.map((item, i) => (
                  <li
                    className={`${
                      item.path === location.pathname
                        ? "bg-[rgba(255,255,255,0.1)]"
                        : ""
                    } px-5 py-2 rounded-md`}
                    key={i}
                  >
                    <NavLink to={item.path} className="text-white ">
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ul className={`menu lg:flex gap-10 hidden duration-200 `}>
          {menu.map((item, i) => (
            <li
              className={`${
                item.path === location.pathname ? "text-pink-400" : "text-white"
              } font-medium`}
              key={i}
            >
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
