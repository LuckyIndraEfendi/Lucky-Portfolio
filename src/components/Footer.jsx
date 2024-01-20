import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="mt-40 ">
        <div className="icons flex gap-10 justify-center">
          <FaGithub className="text-4xl text-white" />
          <FaInstagram className="text-4xl text-white" />
          <FaLinkedin className="text-4xl text-white" />
          <FaXTwitter className="text-4xl text-white" />
        </div>
        <div className="footer-copyright py-10">
          <h1 className=" font-poppins text-center font-medium  text-slate-300 text-sm">
            Created with ❤️ using React.js
          </h1>
          <h1 className=" font-poppins mt-2 text-center font-medium  text-slate-300 text-sm">
            Copyright 2023 - Lucky Indra Efendi
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
