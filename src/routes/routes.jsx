import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Homepage from "../pages/Homepage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Homepage />,
        index: true,
      },
    ],
  },
]);

export default router;
