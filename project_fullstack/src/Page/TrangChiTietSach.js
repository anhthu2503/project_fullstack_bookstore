import React, { Component } from 'react';
import BookDetail from '../Module/BookDetail/BookDetail';
import Footer from '../Module/Footer/footer';
import { withRouter } from "react-router";
import axios from 'axios';
class TrangChiTietSach extends Component {
    constructor(props){
        super(props);
        this.state = {
            list_item: [],
            item_current: {}
        };
    }
    componentDidMount(){
        let ID_sach = this.props.match.params.ID_sach;

        axios.get('http://localhost:4000/product/' + ID_sach)
            .then((response) => {
                console.log(response);
                this.setState({
                    item_current: response.data[0]
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <>
                <BookDetail item_current={this.state.item_current}/>
                <Footer />
            </>
        );
    }
}
export default withRouter(TrangChiTietSach);