import React from 'react';

const faq = () => {
    return (
        <>
            <section id="faq" className="faq">
                <div className="container">
                <h5 class="head_agileinfo text-center text-capitalize pb-5">
            <span>F</span>AQS</h5>

                    <ul className="faq-list">
                        <li>
                            <a data-toggle="collapse" className="" href="#faq1">Tôi có thể đổi/trả hàng trong thời hạn bao lâu? <i className="icofont-simple-up"></i></a>
                            <div id="faq1" className="collapse show" data-parent=".faq-list">
                            <p>
                            Ngoài các lỗi kỹ thuật, nếu sản phẩm mua tại B.Store còn trong thời gian bảo hành của nhà sản xuất, quý khách có thể đổi/trả sản phẩm dựa theo danh mục được quy định Đổi/Trả hàng trong thời hạn 7 ngày kể từ khi nhận hàng. Thời gian nhận hàng sẽ căn cứ vào ghi chú của nhân viên giao nhận B.Store hoặc theo dấu bưu điện.
                            </p>
                            </div>
                        </li>

                        <li>
                            <a data-toggle="collapse" href="#faq2" className="collapsed">Làm sao tôi có thể biết là chắc đó là 1 quyển sách hay?<i className="icofont-simple-up"></i></a>
                            <div id="faq2" className="collapse" data-parent=".faq-list">
                            <p>
                            Tại B.Store, những quyển sách mang đến cho đọc giả các giá trị sau được xem là sách hay: cung cấp những thông tin có giá trị; mang đến sự hiểu biết hơn; mang lại niềm vui, hy vọng, động lực, nuôi dưỡng tâm hồn; giúp mọi người sống tốt hơn, cuộc sống thêm đẹp hơn.

                            Bên cạnh đó, sách hay hay không còn tùy thuộc vào trình độ (khả năng), sự quan tâm, sở thích, mong muốn của chính bạn. B.Store cam kết sẽ nỗ lực hết mình để mang đến cho các bạn những quyển sách có giá trị nhất.

                            Lưu ý bạn, sách bán chạy và sách hay là 2 định nghĩa khác nhau, đôi lúc sách bạn chạy chưa hẳn là sách hay. Khi bạn đọc một quyển sách dở là bạn đang đánh mất cơ hội để đọc một quyển sách hay. Đó là chi phí cơ hội, hãy dừng đọc.
                            </p>
                            </div>
                        </li>

                        <li>
                            <a data-toggle="collapse" href="#faq3" className="collapsed">Vì sao tôi nên đăng ký tài khoản?<i className="icofont-simple-up"></i></a>
                            <div id="faq3" className="collapse" data-parent=".faq-list">
                            <p>
                            Thường xuyên được cập nhật sách hay cũng như thông tin khuyến mãi, ưu đãi giá tại B.Store

                            Dễ dàng theo dõi và quản lý đơn hàng của mình khi đặt hàng.

                            Tiết kiệm thời gian hơn khi đặt những đơn hàng tiếp theo vì hệ thống đã tự động lưu trữ và điền sẵn các thông tin cá nhân của quý khách cho những đơn hàng sau.
                            </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default faq;