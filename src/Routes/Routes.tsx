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
import Userform from './../Pages/Dashboard/Userform/Userform';
import AdminHome from '../Pages/Dashboard/AdminHome/AdminHome'
import ManageUsers from '../Pages/Dashboard/AdminAccess/ManageUsers'

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
        path: '/singlemango/:id',
        element: <SingleMango></SingleMango>
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
      },
      {
        path: 'mangoOrder',
        element: <Userform></Userform>
      },

      // admin only routes
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'allUsers',
        element: <ManageUsers></ManageUsers>
      },
      {
        // path: 'donationAppeal',
        // element: <DonationAppeal></DonationAppeal>
      },
      {
        // path: 'requestAppeal',
        // element: <RequestAppeal></RequestAppeal>
      },
      {
        // path: 'bloodGroups',
        // element: <UpdateBloodBank></UpdateBloodBank>
      }
    ]
  }
]);
