import {
    createBrowserRouter,
  } from "react-router-dom";
import Addpage from "../Pages/Addpage";
import App from "../Pages/App";
import Cardpage from "../Pages/Cardpage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/add",
        element: <Addpage/>,
      },
      {
        path: "/Card/:id",
        element: <Cardpage/>,
      }
  ]);
  export default router