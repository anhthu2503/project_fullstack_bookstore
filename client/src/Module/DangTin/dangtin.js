import React from 'react';

const dangtin = () => {
    return (
        <>
            <div className="container">
                <h5 class="head_agileinfo text-center text-capitalize pb-5"><span>Đ</span>ăng tin</h5>
                <form className="form-dang-tin">
                    <div className="title">
                        <p>Lựa chọn danh mục đăng tin</p>
                            <a href="form-thanh-ly.html" className="form-item">
                                <i className="icofont-shopping-cart"></i>
                                <span>Thanh lý sách - truyện</span>
                            </a>
                            <a href="form-traodoi-chotang.html" className="form-item">
                                <i className="icofont-exchange"></i>
                                <span>Trao đổi, cho tặng sách - truyện</span>
                            </a>
                    </div>
                </form>
            </div>
        </>
    );
};

export default dangtin;