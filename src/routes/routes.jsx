import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import {
  Projects,
  Experience,
  About,
  Skills,
  Achievement,
  Homepage,
  ProjectDetails,
  Contact,
} from "../pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Homepage />,
        index: true,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/achievements",
        element: <Achievement />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
