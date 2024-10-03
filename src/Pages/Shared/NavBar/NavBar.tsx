import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error: Error) => console.log(error));
  };

  const navOptions = (
    <>
      <li className="hover:text-yellow-300 hover:font-bold hover:text-[15px]">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-yellow-300 hover:font-bold hover:text-[15px]">
        <Link to="/ourmango">Our Mangoes</Link>
      </li>
      {user ? (
        <>
          <li className="hover:text-yellow-300 hover:font-bold hover:text-[15px]">
            <Link to="/OrderMango">Order Mango</Link>
          </li>
          <li>
            <Link
              className="hover:text-red-300 hover:font-bold hover:text-[15px]"
              to="/dashboard/userHome"
            >
              Dashboard
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="hover:text-yellow-300 hover:font-bold hover:text-[15px]">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-yellow-300 hover:font-bold hover:text-[15px]">
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-25 max-w-screen-xl bg-black text-white mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-opacity-45 bg-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">MangoMart</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {user ? (
          <>
            <div className="navbar-end">
              <span>{user?.displayName}</span>
              <button onClick={handleLogOut} className="btn btn-success hover:bg-yellow-300">
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end">
              <span>{user?.displayName}</span>
              <button className="btn btn-success hidden">
                Log Out
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
