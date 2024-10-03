

import React from 'react';
import { useNavigate } from 'react-router';

const Paymentsuccess = () => {
    const navigate= useNavigate()
    return (
        <div className=''>
            <p className='h-40'></p>
            <p className='text-center font-bold'>Successfully payment thank you</p>
            <p className='text-center font-bold'>Thank you</p>
            <div className='flex justify-center mt-10'>
            <button onClick={()=>{
                 navigate('/')
            }} className='btn'>Go back</button>
            </div>
        </div>
    );
};

export default Paymentsuccess;