import React, { Component } from 'react';
import ItemReviewCart from './ItemReviewCart';
// import { Redirect } from 'react-router-dom';
// import { Button } from '@material-ui/core';


class FormReviewCart extends Component {

    constructor(props){
        super(props);
        this.state = {
            mang_gio_hang: []
        };
    }
    componentDidMount(){
        var string_mang_gio_hang = localStorage.getItem('gio_hang');
        // console.log(string_mang_gio_hang);

        if(typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null){
            // console.log(JSON.parse(string_mang_gio_hang));
            this.setState({
                mang_gio_hang: JSON.parse(string_mang_gio_hang)
            });
        }
    }

    calculateTotalQuantity = () => this.state.mang_gio_hang.length > 0 &&
    this.state.mang_gio_hang.reduce((previousValue, currentValue) => previousValue + currentValue.so_luong, 0)


    calculateTotalMoney = () => this.state.mang_gio_hang.length > 0 &&
    this.state.mang_gio_hang.reduce((previousValue, currentValue) => previousValue + (currentValue.so_luong * currentValue.Don_gia), 0)

    render() {
        return (
            <div>
                <div className="container">
                <h5 className="head_agileinfo text-center text-capitalize pb-5"><span>T</span>hanh toán</h5>

                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Thông tin sản phẩm
                                    </th>
                                    <th>
                                        Số lượng
                                    </th>
                                    <th>
                                        Thành tiền
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.mang_gio_hang.map(item_gio_hang =>
                                    <ItemReviewCart info_item={item_gio_hang}  />
                                )}
                            </tbody>
                        </table>
                        <table className=" table table-hover table-thanh-toan">
                            <thead>
                                <tr>
                                    <th>
                                        Tổng thanh toán( {this.calculateTotalQuantity()} sản phẩm ): {this.calculateTotalMoney()}đ
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default FormReviewCart;

