import React from 'react';

const Contact = () => {
    return (
        <div>
            <section class="wthree-row pt-3 pb-sm-5 w3-contact">
                <div class="container py-sm-5 pb-5">
                    <h5 class="head_agileinfo text-center text-capitalize pb-5"><span>L</span>iên hệ</h5>
                    <div class="row contact-form pt-lg-5">
                        <div class="col-lg-6 wthree-form-left">

                            <div class="contact-top1">
                                <h5 class="mb-4 text-capitalize">Hãy để lại thông tin của bạn :</h5>
                                <form action="#" method="get" class="f-color">
                                    <div class="form-group">
                                        <label for="contactusername">Tên:</label>
                                        <input type="text" class="form-control" id="contactusername" required/>
                                        </div>
                                        <div class="form-group">
                                            <label for="contactemail">Địa chỉ Email:</label>
                                            <input type="email" class="form-control" id="contactemail" required/>
                                        </div>
                                        <div class="form-group">
                                            <label for="contactemail">Số điện thoại:</label>
                                            <input type="email" class="form-control" id="contactemail" required/>
                                        </div>
                                        <div class="form-group">
                                            <label for="contactcomment">Lời tâm sự đêm khuya:</label>
                                            <textarea class="form-control" rows="5" id="contactcomment" required></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block">Gởi</button>
                                </form>
                            </div>

                        </div>

                        <div class="col-lg-6 contact-bottom pl-5 mt-lg-0 mt-5">

                            <div class="address">
                                <h5 class="pb-3 text-capitalize">Address</h5>
                                <address>
                                    <p class="c-txt">Trụ Sở Chính: Tầng 5 Và Tầng 8, Tòa Nhà Khang Thông, Số 67, Đường Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh.</p>

                                </address>
                            </div>

                            <div class="address my-5">
                                <h5 class="pb-3 text-capitalize">phone</h5>
                                <p>
                                    +123456789</p>
                                <p>
                                    +123456789</p>
                                <p>
                                    +123456789</p>
                            </div>

                            <div class="address mt-md-0 mt-3">
                                <h5 class="pb-3 text-capitalize">Email</h5>
                                <p>
                                    <a href="mailto:info@example.com">contact@greenacademy.edu.vn</a>
                                </p>
                                <p>
                                    <a href="mailto:info@example.com">contact@greenacademy.edu.vn</a>
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="map contact-right pb-5">
                    <div class="pt-lg-5 bg-pricemain text-center">
                        <h3 class="stat-title text-capitalize pb-5">TỔNG HÀNH DINH</h3>
                        <span class="w3-line"></span>
                    </div>
                    <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40957.668160214154!2d106.6630393368335!3d10.778074514475897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3ca0da684d%3A0x32c352459c6757c8!2sGit%20Academy%20Vietnam!5e0!3m2!1sen!2s!4v1578488623771!5m2!1sen!2s" ></iframe>

                </div>
        
            </section>
        </div>
    );
};

export default Contact;