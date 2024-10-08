import React from 'react';
import Banner from '../Banner/Banner';
import CardContainer from '../../components/CardContainer/CardContainer';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h2 className=''></h2>

            {/* ------Banner------ */}
            {/* <div className='mt-10'> */}
            <div className=''>
                {/* <h3 className='mt-10'>Second Heading</h3> */}
                <Banner></Banner>
            </div>
            <CardContainer></CardContainer>
        </div>
    );
};

export default Home;