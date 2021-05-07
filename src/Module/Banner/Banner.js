import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div class="banner-text">
                <div class="callbacks_container">
                    <ul class="rslides" id="slider3">

                        <li class="banner banner1">
                            <div class="container">
                                <h3 class="agile_btxt">
                                    <span>𝓑</span>𝓸𝓸𝓴
                            <span>𝓢</span>𝓽𝓸𝓻𝓮
                        </h3>
                                <h4 class="w3_bbot">kho tàng kiến thức...</h4>
                                <div class="slider-info mt-sm-5">
                                    <h4 class="bn_right">
                                        <span>𝓢</span>𝓪'𝓬𝓱
                            </h4>
                                    <div class="bnr_clip position-relative">
                                        <h4>siêu sale
                                    <span class="px-2">40% </span>
                                        </h4>
                                        <div class="d-inline-flex flex-column banner-pos position-absolute text-center">
                                            <div class="bg-flex-item">
                                                <span>O</span>
                                            </div>
                                            <div class="bg-flex-item">
                                                <span>F</span>
                                            </div>
                                            <div class="bg-flex-item">
                                                <span>F
                                        </span>
                                            </div>
                                        </div>
                                        <p class="text-uppercase py-2">Tuần lễ sách</p>
                                        <a class="btn btn-primary mt-3 text-capitalize" href="shop.html" role="button">Mua sắm ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="banner banner2">
                            <div class="container">
                                <h3 class="agile_btxt">
                                    <span>𝓑</span>𝓸𝓸𝓴
                            <span>𝓢</span>𝓽𝓸𝓻𝓮
                        </h3>
                                <h4 class="w3_bbot">kho tàng kiến thức...</h4>
                                <div class="slider-info mt-sm-5">
                                    <h4 class="bn_right">
                                        <span>𝓣</span>𝓻𝓾𝔂ệ𝓷
                            </h4>
                                    <div class="bnr_clip position-relative">
                                        <h4 class="alo">phát hành hơn
                                    <span class="px-2">25.000</span>
                                    đầu sách mới
                                </h4>

                                        <p class="text-uppercase py-2">Tuần lễ sách</p>
                                        <a class="btn btn-primary mt-3 text-capitalize" href="shop.html" role="button">Mua sắm ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="banner banner3">
                            <div class="container">
                                <h3 class="agile_btxt">
                                    <span><img src="./images/logobanner-removebg-preview.png" alt="" /></span>𝓸𝓸𝓴
                            <span>𝓢</span>𝓽𝓸𝓻𝓮
                        </h3>
                                <h4 class="w3_bbot1">kho tàng kiến thức...</h4>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="row no-gutters pb-5">
                <div class="col-sm-4">
                <Link to={'/products'}>
                    <div class="hovereffect">
                        <img class="img-fluid" src="images/122b2e21f1f203ac5ae3.jpg" alt="" />
                        <div class="overlay">
                            <h5>Featured books</h5>
                            <a class="info" href="women.html">Mua ngay</a>
                        </div>
                    </div>
                </Link>
                </div>
                <div class="col-sm-4">
                    <div class="hovereffect">
                        <img class="img-fluid" src="images/pexels-photo-3585048 (2).jpeg" alt="" />
                        <div class="overlay">
                            <h5>Featured story</h5>
                            <a class="info" href="men.html">Đọc liền</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="hovereffect">
                        <img class="img-fluid" src="images/7dfc714db29e40c0198f.jpg" alt="" />
                        <div class="overlay">
                            <h5>Blogging</h5>
                            <a class="info" href="dangtin.html">Tham gia</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;