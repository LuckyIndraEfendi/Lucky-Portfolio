import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import StarsCanvas from "./components/particle/ParticleBackground";
const App = () => {
  return (
    <>
      <StarsCanvas />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
