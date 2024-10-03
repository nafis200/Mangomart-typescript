import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
// import { AuthContext, AuthContextType } from '../../../providers/AuthProvider';

const AdminHome = () => {
    const authContext = useContext(AuthContext);

    if (!authContext || authContext.loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    const { user } = authContext;

    if (!user) {
        return (
            <div>
                <h3 className="text-center font-bold text-3xl text-green-600 mt-20">Admin Dashboard</h3>
                <h3 className="text-center font-bold text-3xl">Welcome Admin</h3>
            </div>
        );
    }

    return (
        <div>
            <h3 className="text-center font-bold text-3xl text-green-600 mt-20">Admin Dashboard</h3>
            <h3 className="text-center font-bold text-3xl">Welcome Admin: {user.displayName}</h3>
        </div>
    );
};

export default AdminHome;
