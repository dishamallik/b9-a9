import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Update from "../pages/Update/Update";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SocialLogin from "../pages/Login/SocialLogin";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import CardDetails from "../pages/CardDetails/CardDetails";




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
            path: '/card/:id',
            element: <CardDetails></CardDetails>,
            loader: () => fetch('../cards.json') 

        },
        
        {
            path: "/contact",
            element:<PrivateRoute><Contact></Contact></PrivateRoute>,
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
           
        },
        {
            path: "/social",
            element: <SocialLogin></SocialLogin>
        },
        
       
      ]
    },
  ]);


  export default routes;