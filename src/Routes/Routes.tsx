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
import PaymentScreen from './../Pages/Dashboard/payment/PaymentScreen';
import Paymentsuccess from './../Pages/Dashboard/payment/Paymentsuccess';
import Paymentfailure from './../Pages/Dashboard/payment/Paymentfailure';
import Userhistory from './../Pages/Dashboard/Userhistory/Userhistory';
import OrderMango from '../components/ordermango/OrderMango';
import AdminHome from '../Pages/Dashboard/AdminHome/AdminHome'
import ManageUsers from '../Pages/Dashboard/AdminAccess/ManageUsers'
import Graph from './../components/graph/Graph';
import PaymentHistory from '../Pages/Dashboard/AdminAccess/PaymentHistory'
import Chatbots from './../components/chatbot/Chatbots';

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
        path: '/OrderMango',
        element:<OrderMango></OrderMango>
      },
      {
        path:'/singlemango/:id',
        element:<SingleMango></SingleMango>
      },
      {
         path:'/success',
         element:<Paymentsuccess></Paymentsuccess>
      },
      {
        path:'/failure',
        element:<Paymentfailure></Paymentfailure>
      },
      {
        path:'/graph',
        element: <Graph/>
      },
      {
        path:'/chatbot',
        element:<Chatbots/>
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
       {
         path: 'paymentScreen',
         element:<PaymentScreen></PaymentScreen>
       },
       {
        path: 'paymenthistory',
        element:<Userhistory></Userhistory>
       },
      {
        path: 'userHome',
        element: <Userhome></Userhome>
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
        path: 'paymentCollection',
        element: <PaymentHistory></PaymentHistory>
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
