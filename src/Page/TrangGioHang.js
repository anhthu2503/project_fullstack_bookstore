import React, { Component } from 'react';
import Header from "../Module/Header/header";
import FormCart from "../Module/FormCart";
import Footer from '../Module/Footer/footer';
class TrangGioHang extends Component {
    render() {
        return (
            <>
                <Header/>
                <FormCart/>
                <Footer/>
            </>
        );
    }
}

export default TrangGioHang;