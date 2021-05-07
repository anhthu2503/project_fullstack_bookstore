import React from 'react';

const about_blog = () => {
    return (
        <>
     <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <span>GIỚI THIỆU</span>
            <h2>GIỚI THIỆU</h2>
          </div>
  
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img  src="img/tang-sach-1.png" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3 id="chudegt">Nếu bạn rất cầu tiến nhưng trót mắc phải bệnh nan y mang tên lười thì hàng vạn cuốn sách điện tử trên <span className="name">๖ۣۜ𝓑.𝓢𝓽𝓸𝓻𝓮</span> sẽ giúp bạn dễ dàng thỏa mãn ước mơ “giáo sư” theo cách ít tốn công sức nhất, chỉ cần 1 cái chạm tay!</h3>
            <p>Ngoài ra bạn còn có thể :</p>
            <ul>
              <li><i className="icofont-book"></i> Thanh lý sách - truyện</li>
              <li><i className="icofont-book"></i> Trao đổi sách -truyện</li>
            </ul>
            <p>
              ở Team yêu sách cũ. Vì nơi đây nhằm vào mục đích lan tỏa thông điệp <strong> để sách cũ không cũ </strong> đến với mọi người nhiều hơn.
            </p>
            </div>
          </div>
        </div>
      </section>
        </>
    );
};

export default about_blog;