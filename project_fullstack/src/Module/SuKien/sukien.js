
import React, { Component } from 'react';
import Header from '../Header/header';
class sukien extends Component {

    render() {

        return (
            <>
                <Header/>
                <div className="container">
                    <h5 class="head_agileinfo text-center text-capitalize pb-5"><span>S</span>ự kiện</h5>
                    <div className="row next">
                        <div className="col-lg-7 order-1 order-lg-2" >
                            <div id="news_title"><a className="content-link" href="nd-su-kien-1.html">Ngày sách Việt Nam lần thứ 8 hứa hẹn sẽ có nhiều hoạt động sôi nổi</a></div>
                            <div id="news_brief">Cục Xuất bản, In và Phát hành (Bộ Thông tin và Truyền thông) cho biết, nhiều hoạt động sẽ diễn ra trên cả nước nhân dịp Ngày sách Việt Nam lần thứ 8.</div>
                        </div>
                        <div className="col-lg-2 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <a href="nd-su-kien-1.html" ><img className="img-sk" src="images/7041.jpg" alt="Ngày sách Việt Nam lần thứ 8 hứa hẹn sẽ có nhiều hoạt động sôi nổi" /></a>
                        </div>
                        <div className="col-lg-3 order-1 order-lg-2" >
                            <div className="most_read">
                                <div className="box_content">
                                    <div className="w3-row" id="box_list">
                                        <div className="w3-col l9 m9 s9 info set-padding" >
                                            <div id="title">
                                                <a href="nd-doc-nhieu-1.html">9 lợi ích của sách nói và làm sao để tối ưu hóa chúng?</a>
                                            </div>
                                        </div>
                                        <div className="w3-col l3 m3 s3 logo img-doc-nhieu">
                                            <img src="images/6991.jpg" alt="9 lợi ích của sách nói và làm sao để tối ưu hóa chúng?" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row next">
                        <div className="col-lg-7 order-1 order-lg-2" >
                            <div id="news_title"><a className="content-link" href="nd-su-kien-2.html">Nhà văn Nguyễn Nhật Ánh “bật mí” về một bộ phim mới sẽ được chuyển thể từ tác phẩm của ông</a></div>
                            <div id="news_brief">Tại chương trình giao lưu ký tặng sách “Đảo mộng mơ”  nhà văn Nguyễn Nhật Ánh đã “bật mí” về một bộ phim mới sẽ được chuyển thể từ tác phẩm...</div>
                        </div>
                        <div className="col-lg-2 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <a href="nd-su-kien-2.html"><img src="images/7063.jpg" alt="Nhà văn Nguyễn Nhật Ánh “bật mí” về một bộ phim mới sẽ được chuyển thể từ tác phẩm của ông"/></a>
                        </div>

                        <div className="col-lg-3 order-1 order-lg-2" >
                            <div className="most_read">
                                <div className="box_content">
                                    <div className="w3-row" id="box_list">
                                        <div className="w3-col l9 m9 s9 info set-padding" >
                                            <div id="title">
                                                <a href="nd-doc-nhieu-2.html">35 cuốn sách hay nên đọc trong đời</a>
                                            </div>
                                        </div>
                                        <div className="w3-col l3 m3 s3 logo img-doc-nhieu">
                                            <img src="images/467.jpg" alt="35 cuốn sách hay nên đọc trong đời" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="row next">
                        <div className="col-lg-7 order-1 order-lg-2" >
                            <div id="news_title"><a className="content-link" href="nd-su-kien-3.html">Dự án tặng 1000 audio book miễn phí đến độc giả</a></div>
                            <div id="news_brief">Mới đây, Đinh Tị Books đã khởi động dự án tặng 1.000 sách nói (audio book) miễn phí cho các bạn nhỏ.</div>
                        </div>
                        <div className="col-lg-2 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <a href="nd-su-kien-3.html"><img src="images/7001.jpg" alt="Dự án tặng 1000 audio book miễn phí đến độc giả"/></a>
                        </div>

                    
                    </div>

                    <div className="row next">
                        <div className="col-lg-7 order-1 order-lg-2" >
                            <div id="news_title"><a className="content-link" href="nd-su-kien-4.html">10 tác phẩm văn học tiêu biểu của Việt Nam được tái bản</a></div>
                            <div id="news_brief">Những Tác phẩm văn học tiêu biểu này mang tên tuổi của các tác giả văn học Việt Nam nổi tiếng một thời như: Nguyễn Huy Tưởng, Đoàn Giỏi, Nguyễn Hồng,...</div>
                        </div>
                        <div className="col-lg-2 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <a href="nd-su-kien-4.html"><img src="images/6797.jpg" alt="10 tác phẩm văn học tiêu biểu của Việt Nam được tái bản"/></a>
                        </div>

                      
                    </div>
                </div>
            </>
        );
    }
}
export default sukien;