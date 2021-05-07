import React from 'react';

const Featured = () => {
    return (
      // choose pages
        <div className="row no-gutters pb-5">
            <div className="col-sm-4">
                <div className="hovereffect">
                    <img className="img-fluid" src="images/pexels-photo-5530727 (1).jpeg" alt="" />
                    <div className="overlay">
                        <h5>Featured books</h5>
                        <a className="info" href="women.html">Mua ngay</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="hovereffect">
                    <img className="img-fluid" src="images/pexels-photo-3585048 (2).jpeg" alt="" />
                    <div className="overlay">
                        <h5>Featured story</h5>
                        <a className="info" href="men.html">Đọc liền</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="hovereffect">
                    <img className="img-fluid" src="images/pexels-photo-2228560 (3).jpeg" alt="" />
                    <div className="overlay">
                        <h5>Blogging</h5>
                        <a className="info" href="blog.html">Tham gia</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;