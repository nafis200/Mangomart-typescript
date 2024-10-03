

import React from 'react';
import { useNavigate } from 'react-router';
const Paymentfailure = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <p className='h-40'></p>
            <p className='text-center font-bold'>Sorry some technical issue occurs</p>
            <p className='text-center font-bold'>Sorry for this problem</p>
            <div className='flex justify-center mt-10'>
            <button onClick={()=>{
                 navigate('/')
            }} className='btn'>Go back</button>
            </div>
        </div>
    );

};

export default Paymentfailure;