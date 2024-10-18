import Banner from '../Banner/Banner';
import CardContainer from '../../components/CardContainer/CardContainer';
import { Helmet } from 'react-helmet-async';
import MessengerCustomerChat from 'react-messenger-customer-chat';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h2 className=''></h2>
            <div className=''>
                <Banner></Banner>
            </div>
            <CardContainer></CardContainer>
            <MessengerCustomerChat
                pageId='378333342041163'
                appId="1600084450548938"
            />
        </div>
    );
};

export default Home;