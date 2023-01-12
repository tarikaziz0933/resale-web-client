import React from 'react';
// import Advertise from '../../../../components/Advertise/Advertise';
import Categories from '../../../../components/Categories/Categories';
import Testimonials from '../../../../components/Testimonials/Testimonials';
// import Testimonials from '../../../../components/Testimonials/Testimonials';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Testimonials></Testimonials>
            {/* <Advertise></Advertise> */}
        </div>
    );
};

export default Home;