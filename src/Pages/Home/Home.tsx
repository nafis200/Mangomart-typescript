import React from 'react';
import Banner from '../Banner/Banner';
import CardContainer from '../../components/CardContainer/CardContainer';
import Chatbots from './../../components/chatbot/Chatbots';
const Home = () => {
    return (
        <div>
            <h2 className=''></h2>

            {/* ------Banner------ */}
            <div className=''>
                {/* <h3 className='mt-10'>Second Heading</h3> */}
                <Banner></Banner>
            </div>
            <CardContainer></CardContainer>

            <Chatbots/>
        </div>
    );
};

export default Home;