import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <div className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
        <Navbar />
        <main className="w-[90%] m-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
