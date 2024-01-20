import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
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
  return (
    <>
      <nav
        className={`${
          scroll ? "bg-[#161414]" : "bg-transparent"
        } px-5 sm:px-16 py-5 right-0 fixed top-0 w-full z-10 duration-150 `}
      >
        <div className="logo">
          <img
            src="https://developer-portfolio-ibrahim-memons-projects.vercel.app/Logo.svg"
            alt=""
            width={100}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
