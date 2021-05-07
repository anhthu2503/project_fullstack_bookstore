import React, { Component } from 'react';
import Header from '../Module/Header/header';
import About from '../Module/About/about';
import InnerBanner from '../Module/About/InnerBanner';
import Advice from '../Module/About/Advice';
import Advice2 from '../Module/About/Advice2';
import Instagram from '../Module/About/Instagram';
import Service from '../Module/About/Service';
import Footer from '../Module/Footer/footer';

class TrangGioiThieu extends Component {
    render() {
        return (
            <>
                <Header />

                <InnerBanner />


                <About />

                <Advice />

                <Advice2 />

                <Instagram />

                <Service />
                
                <Footer/>
            </>
        );
    }
}

export default TrangGioiThieu;