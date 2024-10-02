import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
// import Register from "../components/register/Register"
// import Login from "../components/login/Login";
import OurMango from "../components/ourmango/OurMango";
import SingleMango from '../components/ourmango/SingleMango';
import Dashboard from './../Layout/Dashboard';
import Userhome from './../Pages/Dashboard/userhome/Userhome';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/ourmango",
        element: <OurMango></OurMango>,
      },
      {
        path:'/singlemango/:id',
        element:<SingleMango></SingleMango>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
       {
         path: 'userHome',
         element: <Userhome></Userhome>
       }
    ]
  }
]);
