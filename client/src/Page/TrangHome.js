import React from 'react';
import Header from '../Module/Header/header';
import Carousel from '../Module/Carousel/carousel';
// import Banner from '../Module/Banner/Banner';
import BookHot from '../Module/Hot/BookHot';
import StoryHot from '../Module/Hot/StoryHot';
import Footer from '../Module/Footer/footer';

const TrangHome = () => {
    return (
        <>
            <Header/>
            <Carousel/>
            {/* <Banner/> */}
            <BookHot/>
            <StoryHot/>
            <Footer/>
        </>
    );
};

export default TrangHome;