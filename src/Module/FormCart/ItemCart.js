import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

class ItemCart extends Component {

    constructor(props){
        super(props);

        this.state = {
            is_edit: false
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleButtonRemoveItemCart = this.handleButtonRemoveItemCart.bind(this);
    }

    handleButtonClick(string_loai){
        if(string_loai === '-'){
            if(this.props.info_item.so_luong - 1 > 0){
                this.props.handle_process(this.props.info_item.ID, this.props.info_item.so_luong- 1);
            }
            else{
                this.props.handle_process(this.props.info_item.ID, 1);
                var key = window.confirm('Bạn có muốn xóa sản phẩm ' + this.props.info_item.Ten + ' khỏi giỏ hàng không?');
                //console.log(key);
                if(key === true){
                    this.props.handle_remove_item(this.props.info_item.ID);

                }

            }
        }
        else{
            this.props.handle_process(this.props.info_item.ID, this.props.info_item.so_luong+ 1);
        }
    }

    handleButtonRemoveItemCart(){
        var key = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm ' + this.props.info_item.Ten + ' khỏi giỏ hàng không?');
        //console.log(key);
        if(key === true){
            this.props.handle_remove_item(this.props.info_item.ID);
        }

    }

    render() {
        return (
            <>
                {
                (this.props.info_item)?
                <tr>
                    <td>{this.props.info_item.ID}</td>
                    <td>
                        <Link to={'/product-detail/' + this.props.info_item.ID}>
                            <div className="innerf-pages section py-5">
                                <div className="container">
                                    <div className="row my-sm-5">
                                        <div className="col-lg-4 single-right-left">
                                            <div className="grid images_3_of_2">
                                                <div className="flexslider1">
                                                    <ul className="slides">
                                                        <li data-thumb="images/mff1.jpg" >
                                                            <div className="thumb-image">
                                                                <img src={'images/sach/' + this.props.info_item.Hinh}  alt=" " className="img-fluid" />
                                                            </div>
                                                        </li>

                                                    </ul>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 mt-lg-0 mt-5 single-right-left simpleCart_shelfItem">
                                            <h3>{this.props.info_item.Ten}</h3>
                                            <h6 className="card-title text-capitalize sp_title">Tác giả: {this.props.info_item.Ten_tac_gia}</h6>
                                            <div className="caption">
                                                <div className="clearfix"> </div>
                                                <h6>{this.props.info_item.Don_gia} đ</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </td>
                    <td >
                        <div className="include_action_gio_hang">
                            <button type="button" className="btn btn-default" onClick={()=>{this.handleButtonClick('-')}}>-</button>
                                <input type="number" name="" readOnly={!this.state.is_edit} className="form-control number_input" value={this.props.info_item.so_luong} />
                            <button type="button" className="btn btn-default" onClick={()=>{this.handleButtonClick('+')}}>+</button>
                        </div>
                    </td>
                    <td>{this.props.info_item.Don_gia * this.props.info_item.so_luong}</td>
                    <td>
                        <Button variant="contained" size="small" color="secondary" onClick={this.handleButtonRemoveItemCart}>
                            <DeleteIcon/>
                        </Button>
                    </td>
                </tr>
                :
                <></>
                }
            </>
        );
    }
}
export default ItemCart;

