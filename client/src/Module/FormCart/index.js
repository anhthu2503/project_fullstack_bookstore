import React, { Component } from 'react';
import ItemCart from './ItemCart';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class FormCart extends Component {

    constructor(props){
        super(props);
        this.state = {
            mang_gio_hang: []
        };

        this.handleChangeSoLuongGioHang = this.handleChangeSoLuongGioHang.bind(this);
        this.handleRemoveItemCart = this.handleRemoveItemCart.bind(this);
        this.ProcessRedirect = this.ProcessRedirect.bind(this);

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

    handleChangeSoLuongGioHang(id_san_pham, gia_tri){
        // console.log('run');
        var temp_array = this.state.mang_gio_hang;
        for(var i = 0; i < temp_array.length; i++){
            if(id_san_pham === temp_array[i].ID){
                temp_array[i].so_luong = gia_tri;
                this.setState({
                    mang_gio_hang: temp_array
                });
                localStorage.setItem('gio_hang', JSON.stringify(temp_array));
                break;
            }
        }
    }

    handleRemoveItemCart(id_san_pham){
        var temp_array = this.state.mang_gio_hang;
        for(var i = 0; i < temp_array.length; i++){
            if(id_san_pham === temp_array[i].ID){
                temp_array.splice(i, 1);
                this.setState({
                    mang_gio_hang: temp_array
                });
                localStorage.setItem('gio_hang', JSON.stringify(temp_array));
                break;
            }
        }
        //console.log(temp_array);
    }


    ProcessRedirect(){
        var string_mang_gio_hang = localStorage.getItem('gio_hang');
        if(typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null){
            if(JSON.parse(string_mang_gio_hang).length > 0){
                return <></>
            }
            else{
                return <Redirect to="/products" />;
            }
        }
        else{
            return <Redirect to="/products" />;
        }
    }
    calculateTotalQuantity = () => this.state.mang_gio_hang.length > 0 &&
        this.state.mang_gio_hang.reduce((previousValue, currentValue) => previousValue + currentValue.so_luong, 0)


    calculateTotalMoney = () => this.state.mang_gio_hang.length > 0 &&
        this.state.mang_gio_hang.reduce((previousValue, currentValue) => previousValue + (currentValue.so_luong * currentValue.Don_gia), 0)


    render() {
        return (
            <div>
                {
                   this.ProcessRedirect()
                }
                <div className="container">
                <h5 className="head_agileinfo text-center text-capitalize pb-5"><span>G</span>iỏ hàng</h5>

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
                                    <th>
                                        Xóa
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.mang_gio_hang.map(item_gio_hang =>
                                    <ItemCart info_item={item_gio_hang} handle_remove_item={this.handleRemoveItemCart} handle_process={this.handleChangeSoLuongGioHang} />
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
                        <div className="thanh-toan">
                            <Link to="/thanh-toan">
                                <Button variant="contained" color="primary">Thanh Toán</Button>
                            </Link>
                        </div>
                </div>
            </div>
        );
    }
}
export default FormCart;

