import React, { Component } from 'react';
import Header from '../Module/Header/header';
import Footer from '../Module/Footer/footer';

import FormThanhToan from '../Module/FormThanhToan';

class TrangThanhToan extends Component {
    render() {
        return (
            <>
               <Header/>
                <div className="container include_table_gio_hang">
                    <FormThanhToan />
                </div>
                <Footer/>
            </>
        );
    }
}

export default TrangThanhToan;