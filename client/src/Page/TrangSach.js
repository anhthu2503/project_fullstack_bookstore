import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import Shop from '../Module/Book/Shop';
import Footer from '../Module/Footer/footer';
class TrangSach extends Component {
    componentDidMount() {
        axios.get('http://localhost:4000/products/', {
            'Content-Type': 'application/json',
        })
        .then((response) => {
            console.log(response);
            this.setState({
                products: response.data[0]
            })
        })
        .catch((err) => {
            console.log(err);
        });

        axios.get('http://localhost:4000/product_hot/?limit=12', {
            'Content-Type': 'application/json',
        })
        .then((response) => {
            console.log(response);
            this.setState({
                product_hot: response.data[0]
            })
        })
        .catch((err) => {
            console.log(err);
        });

        axios.get('http://localhost:4000/book_category/', {
            'Content-Type': 'application/json',
        })
        .then((response) => {
            console.log(response);
            this.setState({
                book_category: response.data
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <>
                <Shop />
                <Footer />
            </>
        );
    }
}

export default withRouter(TrangSach);