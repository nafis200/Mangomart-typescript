import React from 'react';
import Banner from '../Banner/Banner';
import CardContainer from '../../components/CardContainer/CardContainer';

const Home = () => {
    return (
        <div>
            <h2 className=''></h2>

            {/* ------Banner------ */}
            <div className='mt-10'>
                {/* <h3 className='mt-10'>Second Heading</h3> */}
                <Banner></Banner>
            </div>
            <CardContainer></CardContainer>
        </div>
    );
};

export default Home;