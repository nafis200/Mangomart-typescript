
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../components/login/Login.tsx";
import Register from "../components/register/Register.tsx";
import OurMango from "../components/ourmango/OurMango.tsx";
import SingleMango from '../components/ourmango/SingleMango.tsx';
import Dashboard from '../Layout/Dashboard.jsx';
import Userhome from '../Pages/Dashboard/userhome/Userhome.jsx';
import Userform from '../Pages/Dashboard/Userform/Userform.jsx';
import PaymentScreen from '../Pages/Dashboard/payment/PaymentScreen.jsx';
import Paymentsuccess from '../Pages/Dashboard/payment/Paymentsuccess.jsx';
import Paymentfailure from '../Pages/Dashboard/payment/Paymentfailure.jsx';
import Userhistory from '../Pages/Dashboard/Userhistory/Userhistory.jsx';
import OrderMango from '../components/ordermango/OrderMango.tsx';
import Contact from '../components/Contact/Contact.tsx';
import AdminHome from '../Pages/Dashboard/AdminHome/AdminHome.jsx';
import ManageUsers from '../Pages/Dashboard/AdminAccess/ManageUsers.jsx';
import PaymentHistory from '../Pages/Dashboard/AdminAccess/PaymentHistory.jsx';
import PrivateRoute from './PrivateRoute.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "ourmango",
        element: <OurMango></OurMango>,
      },
      {
        path: 'orderMango',
        element: <PrivateRoute><OrderMango></OrderMango></PrivateRoute>
      },
      {
        path: 'singlemango/:id',
        element: <SingleMango></SingleMango>
      },
      {
        path: 'success',
        element: <Paymentsuccess></Paymentsuccess>
      },
      {
        path: 'failure',
        element: <Paymentfailure></Paymentfailure>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
        element: <PaymentScreen></PaymentScreen>
      },
      {
        path: 'paymenthistory',
        element: <Userhistory></Userhistory>
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
      }
    ]
  }
]);
