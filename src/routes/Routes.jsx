import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";

import Update from "../pages/Update/Update";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SocialLogin from "../pages/Login/SocialLogin";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import CardDetails from "../pages/CardDetails/CardDetails";
import Error from "../pages/Error/Error";
import ContactUs from "../pages/ContactUs/ContactUs";




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
            element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
            loader: () => fetch('../cards.json') 

        },
        
       
        {
            path: "/update",
            element:<PrivateRoute><Update></Update></PrivateRoute>,
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

        {
            path:"/us",
            element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>

        },
        {
            path: '*', element: <Error />
          }
        
       
      ]
    },
  ]);


  export default routes;