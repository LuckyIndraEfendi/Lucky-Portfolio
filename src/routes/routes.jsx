import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Homepage from "../pages/Homepage";
import {
  Projects,
  Experience,
  About,
  Skills,
  Achievement,
} from "../components/pagesHome";
import ProjectDetails from "../pages/ProjectDetails";
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
    ],
  },
]);

export default router;
