import "./HomePage.css";
import React from "react";
import Header from "./Header";
const HomePage = () => {
  return (
    <div className="container-homepage">
      <Header />

      <header class="bg-light text-center py-5 header-homepage">
        <div class="container">
          <h1 class="display-4">Bảo Vệ Sức Khỏe Của Bạn</h1>
          <p class="lead">
            Chúng tôi cung cấp các dịch vụ bảo hiểm sức khỏe chất lượng cao
          </p>
          <a href="/listInsurance" class="btn btn-primary btn-lg">
            Đăng Ký Ngay
          </a>
        </div>
      </header>

      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 item">
              <h2 class="h4">Bảo Hiểm Toàn Diện</h2>
              <p>
                Đảm bảo bạn được bảo vệ toàn diện trước mọi rủi ro về sức khỏe.
              </p>
            </div>
            <div class="col-lg-3 item">
              <h2 class="h4">Dịch Vụ Chăm Sóc 24/7</h2>
              <p>
                Chăm sóc khách hàng liên tục để đảm bảo bạn luôn nhận được sự hỗ
                trợ khi cần thiết.
              </p>
            </div>
            <div class="col-lg-3 item">
              <h2 class="h4">Tiện Lợi và Linh Hoạt</h2>
              <p>
                Dễ dàng quản lý chính sách và thanh toán với các tùy chọn linh
                hoạt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-dark text-white py-4 footer-homepage">
        <div class="container text-center">
          <p>&copy; 2023 Bảo Hiểm Sức Khỏe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
