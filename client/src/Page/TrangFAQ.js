import React, { Component } from 'react';
import Header from '../Module/Header/header';
import FAQ from '../Module/FAQ/faq';
import Footer from '../Module/Footer/footer';

class TrangFAQ extends Component {
    render() {
        return (
            <>
                <Header/>
                <FAQ/>
                <Footer />
            </>
        );
    }
}

export default TrangFAQ;