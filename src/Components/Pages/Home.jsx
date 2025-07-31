import React from 'react';
import Banner from '../SubCom/Banner';
import Services from './Services';
import Review from '../SubCom/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;