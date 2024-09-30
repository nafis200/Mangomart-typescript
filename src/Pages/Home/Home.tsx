import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <h2 className=''>Home</h2>

            {/* ------Banner------ */}
            <div className='mt-10'>
                {/* <h3 className='mt-10'>Second Heading</h3> */}
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;