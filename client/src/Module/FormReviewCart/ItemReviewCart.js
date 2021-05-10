import React, { Component } from 'react';
// import { Button, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

class ItemReviewCart extends Component {

    constructor(props){
        super(props);

        this.state = {
            is_edit: false
        };

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
                            <div class="innerf-pages section py-5">
                                <div class="container">
                                    <div class="row my-sm-5">
                                        <div class="col-lg-4 single-right-left">
                                            <div class="grid images_3_of_2">
                                                <div class="flexslider1">
                                                    <ul class="slides">
                                                        <li data-thumb="images/mff1.jpg" >
                                                            <div class="thumb-image">
                                                                <img src={'images/sach/' + this.props.info_item.Hinh}  alt=" " class="img-fluid" />
                                                            </div>
                                                        </li>

                                                    </ul>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 mt-lg-0 mt-5 single-right-left simpleCart_shelfItem">
                                            <h3>{this.props.info_item.Ten}</h3>
                                            <h6 className="card-title text-capitalize sp_title">Tác giả: {this.props.info_item.Ten_tac_gia}</h6>
                                            <div class="caption">
                                                <div class="clearfix"> </div>
                                                <h6>{this.props.info_item.Don_gia} đ</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </td>
                    <td>
                        {this.props.info_item.so_luong}
                    </td>
                    <td>{this.props.info_item.Don_gia * this.props.info_item.so_luong}</td>
                </tr>
                :
                <></>
                }
            </>
        );
    }
}

export default ItemReviewCart;

