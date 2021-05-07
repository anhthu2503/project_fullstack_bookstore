import React from 'react';
import { Link } from 'react-router-dom';
const BookItem = (props) => {
    return (

        <div>
            <Link to={'/product-detail/' + props.item_info.ID}>
                {/* <div className="card product-men p-3"> */}
                    {/* <div className="men-thumb-item"> */}
                        {/* <img src={'/images/sach/' + props.item_info.Hinh} alt="img" className="card-img-top" /> */}
                        {/* <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                                <a href="xemsach.html" className="link-product-add-cart">Chi tiết</a>
                            </div>
                        </div> */}
                    {/* </div> */}

                    {/* <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">{props.item_info.Ten}</h5>
                        <h6 className="card-title text-capitalize">{props.item_info.Ten_tac_gia}</h6>
                        <div className="card-text d-flex justify-content-between">
                            <p className="text-dark font-weight-bold">{props.item_info.Don_gia} đ</p> */}
                            {/* <p className="line-through">$35.99</p> */}
                        {/* </div>
                    </div> */}

                    {/* <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="hub_item" value={props.item_info.Ten} />
                            <input type="hidden" name="amount" value="28.00" />
                            <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                            </button>
                            <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                        </form>
                    </div> */}
                    {/* <div>

                    </div> */}
                {/* </div> */}
                <div class="card men-thumb-item  product-men p-3 col-lg-3 col-sm-6 p-0">
                    <img src={'/images/sach/' + props.item_info.Hinh} alt="img" className="card-img-top" />
                    <h5 className="card-title text-capitalize">{props.item_info.Ten}</h5>
                    <h6 className="card-title text-capitalize">{props.item_info.Ten_tac_gia}</h6>
                    <p className="text-dark font-weight-bold">{props.item_info.Don_gia} đ</p>

                </div>
            </Link>
            {/* <div className="card product-men p-3">
                <div className="men-thumb-item">
                    <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="hub_item" value={props.item_info.Ten} />
                            <input type="hidden" name="amount" value="28.00" />
                            <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true">Mua ngay</i>
                            </button>
                            <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>


    );
}

export default BookItem;