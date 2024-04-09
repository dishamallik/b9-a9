import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Update from "../pages/Update/Update";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element:<Home></Home>,
            
        },
        {
            path: "/contact",
            element:<Contact></Contact>,
        },
        {
            path: "/update",
            element:<Update></Update>,
        },
        {
            path:"/login",
            element:<Login></Login>,
        },
        {
            path:"/register",
            element: <Register></Register>
           
        }
      ]
    },
  ]);


  export default routes;