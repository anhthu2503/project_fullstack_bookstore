import React from 'react';

const Advice = () => {
    return (
        // advice
        <section className="w3l-testimonials" id="testimonials">
            <div>
                <h5 className="head_agileinfo1 text-center">
                    <span>Book Store</span> và những người bạn
                </h5>
            </div>
            <div className="testimonials py-5">
            <div className="container py-lg-3">
                    <div className="header-section text-center mx-auto">
                        <p className="my-3 subtitle">
                            Một cuốn sách hay cho ta một điều tốt
                            Một người bạn tốt cho ta một điều hay..
                        </p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-9 col-md-10 mx-auto">
                            <div className="owl-testimonials owl-carousel owl-theme">

                            <div className="item">
                                <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <span className="fa fa-quote-left" aria-hidden="true"></span>
                                    <p>Bạn biết rằng bạn đã đọc một cuốn sách hay khi bạn giở đến trang cuối cùng và cảm thấy như mình vừa chia tay một người bạn.</p>
                                    <div className="name mt-4">
                                    <h4>Isabella Mia</h4>
                                    <p>- United States</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src="images/about4.jpeg" className="img-fluid testimonial-img" alt="client 1" />
                                </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <span className="fa fa-quote-left" aria-hidden="true"></span>
                                    <p>Một cuốn sách thực sự hay nên đọc trong tuổi trẻ, rồi đọc lại khi đã trưởng thành, và một nữa lúc tuổi già, giống như một tòa nhà đẹp nên được chiêm ngưỡng trong ánh bình minh, nắng trưa và ánh trăng.</p>
                                    <div className="name mt-4">
                                    <h4>R.Davies</h4>
                                    <p>- United Kingdom</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src="images/about5.jpeg" className="img-fluid testimonial-img" alt="client 2" />
                                </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <span className="fa fa-quote-left" aria-hidden="true"></span>
                                    <p>Trên thế gian này không có cuốn sách nào mà ai cũng phải đọc, chỉ có những cuốn sách mà một cá nhân phải đọc vào một thời điểm ở một nơi nhất định trong một hoàn cảnh nhất định, và vào một giai đoạn trong cuộc đời.</p>
                                    <div className="name mt-4">
                                    <h4>W.James</h4>
                                    <p>- United States</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src="images/about3.jpeg" className="img-fluid testimonial-img" alt="client 3" />
                                </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <span className="fa fa-quote-left" aria-hidden="true"></span>
                                    <p>Sách tựa như những chuyến tàu tốc hành kỳ diệu đưa bạn đến thế giới mà trước đây bạn chưa từng đặt chân đến, giúp bạn biết về nó, hiểu về nó mà không cần mất quá nhiều thời gian, tiền bạc, công sức. Đọc sách chính là cách nhanh nhất để bạn khám phá thế giới mà không cần nhấc chân.</p>
                                    <div className="name mt-4">
                                    <h4>Benjamin Lucas</h4>
                                    <p>- Sweden</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src="images/about2.jpeg" className="img-fluid testimonial-img" alt="client 4" />
                                </div>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </section>
    );
}

export default Advice;