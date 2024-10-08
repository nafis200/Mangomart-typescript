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
            <div className=''>
                <Banner></Banner>
            </div>
            <CardContainer></CardContainer>
        </div>
    );
};

export default Home;