

import { FaHome, FaHouseUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Navigate, Outlet } from "react-router-dom";
import useAxiosPublic from '../hooks/useAxiosPublic'
import { AuthContext } from '../providers/AuthProvider';
import NavBar from '../Pages/Shared/NavBar/NavBar';
const Dashboard = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div><NavBar></NavBar></div>

            <div className="flex">
                {/* side bar */}


                <div className="w-64 min-h-screen bg-green-700 text-white">
                    <div className='mt-20'>
                        <ul className="menu p-4">
                            
                                    <>
                                        <li><NavLink to='/dashboard/userHome'><FaHome />User Home</NavLink> </li>
                                        <li> <NavLink to='/dashboard/mangoOrder'> <FaUser/> Mango Order </NavLink> </li>
                                        <li> <NavLink to='/dashboard/paymenthistory'><FaUser></FaUser> Payment History </NavLink> </li>
                                    </>
                            
                        </ul>
                    </div>

                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;