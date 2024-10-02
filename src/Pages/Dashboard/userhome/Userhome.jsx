
import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Userhome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl mt-20 mx-auto">
                <span>Hi Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default Userhome;