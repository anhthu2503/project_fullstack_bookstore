import React, { useEffect, useState } from 'react';
import Header from '../Header/header';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
const BookDetail = (props) => {
    const [acount_cart, setAcount] = React.useState(1);
    const [mang_gio_hang, setMangGioHang] = useState([]);

    useEffect(() => {
        //console.log(props.item_current);
        var string_mang_gio_hang = localStorage.getItem('gio_hang');

        if(typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null){
            //console.log(string_mang_gio_hang);
            var temp = JSON.parse(string_mang_gio_hang);
            // console.log(temp);
            setMangGioHang(temp);
        }
    }, [])

    const handleClick = (e) => {
        // console.log('đã click vào ReadMore Xbox Component');
        // console.log(e);
        // setAnHienHinh(false);

        var mang_gio_hang_temp = mang_gio_hang;

        if(mang_gio_hang_temp.length > 0){
            var flag_co_trong_gio_hang_hay_khong = false;

            for(var i = 0; i < mang_gio_hang_temp.length; i++){
                if(mang_gio_hang_temp[i].ID === props.item_current.ID){
                    mang_gio_hang_temp[i].so_luong+= acount_cart;
                    flag_co_trong_gio_hang_hay_khong = true;
                    break;
                }
            }

            if(flag_co_trong_gio_hang_hay_khong === false){
                var item_temp = props.item_current;
                item_temp.so_luong= acount_cart;
                mang_gio_hang_temp.push(item_temp);
            }

        }
        else{
            var item_temp = props.item_current;
            item_temp.so_luong= acount_cart;
            mang_gio_hang_temp.push(item_temp);
        }


        localStorage.setItem('gio_hang', JSON.stringify(mang_gio_hang_temp));
        window.dispatchEvent( new Event('storage') )

    }

    return (
        <>
            <Header />
            <div className="innerf-pages section py-5">
                <div className="container">
                    <div className="row my-sm-5">
                        <div className="col-lg-4 single-right-left">
                            <div className="grid images_3_of_2">
                                <div className="flexslider1">
                                    <ul className="slides">
                                        <li data-thumb="images/mff1.jpg" >
                                            <div className="thumb-image">
                                                <img src={'images/sach/' + props.item_current.Hinh}  data-imagezoom="true" alt=" " className="img-fluid" />
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-5 single-right-left simpleCart_shelfItem">
                            <h3>{props.item_current.Ten}</h3>
                            <h6 classNameName="card-title text-capitalize sp_title">Tác giả: {props.item_current.Ten_tac_gia}</h6>
                            <div className="caption">
                                <div className="clearfix"> </div>
                                <h6>{props.item_current.Don_gia} đ</h6>
                            </div>
                            <div className="d-sm-flex justify-content-between">
                                <div className="occasional">
                                    <h5 className="sp_title mb-3">Số lượng</h5>
                                    <ButtonGroup>
                                        <Button
                                            aria-label="reduce"
                                            onClick={() => {
                                                setAcount(Math.max(acount_cart - 1, 1));
                                            }}
                                        >
                                            <RemoveIcon fontSize="small" />
                                        </Button>
                                        <input className="form-control number_input" value={acount_cart}></input>
                                        <Button
                                            aria-label="increase"
                                            onClick={() => {
                                                setAcount(acount_cart + 1);
                                            }}
                                        >
                                            <AddIcon fontSize="small" />
                                        </Button>
                                    </ButtonGroup>
                                    <p className="single_specific">
                                        Bạn hãy NHẬP ĐỊA CHỈ nhận hàng để được dự báo thời gian & chi phí giao hàng một cách chính xác nhất.
                                    </p>
                                    <Button variant="contained" color="primary" disableElevation onClick={handleClick}>
                                        Thêm vào giỏ hàng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="bbook-detail">
                    <div className="bbook-detail-1">
                        <div className="container-fluid">
                            <div className="bbook-detail-left">
                                <p className="bbook-info">THÔNG TIN CHI TIẾT</p>
                                <div className="bbook-detail-left-1">
                                    <div className="bbook-detail-left-1-1">
                                        <ul>
                                            <li className="item-p">
                                                Nhà xuất bản: &nbsp;
                                                <a href="/nha-xuat-ban/	nxb-hoi-nha-van-pub1571/p1">{props.item_current.Ten_nxb}</a>
                                            </li>
                                            <li className="item-p">
                                                Ngày xuất bản: &nbsp;
                                                {props.item_current.Ngay_xuat_ban}
                                            </li>

                                        <li className="item-p">
                                                Mã sản phẩm: &nbsp;
                                                {props.item_current.SKU}
                                            </li>
                                            <li className="item-p">
                                                Kích thước: &nbsp;
                                                <span>
                                                {props.item_current.Kich_thuoc}
                                                </span>
                                            </li>

                                            <li className="item-p">
                                                Số trang: &nbsp;
                                                <span>
                                                {props.item_current.So_trang}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid">
                            <div className="b-description">
                                <div className=" bbook-detail-1-1 ">
                                    <p className="bbook-intro ">
                                        Giới thiệu sản phẩm
                                    </p>
                                </div>

                                <div itemprop="description bbook-detail-1-2" className="des-des">
                                    <div dangerouslySetInnerHTML={{__html: props.item_current.Tom_tat}}></div>
                                </div>

                                {/* <div className="card product-men p-3">
                                    <button type="submit" className="hub-cart phub-cart btn">
                                        <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetail;



