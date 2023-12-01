import "./HomePage.css";
import React from "react";

const HomePage = () => {
  return (
    <div className="container-homepage">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            Bảo Hiểm Sức Khỏe
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Trang Chủ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Dịch Vụ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="bg-light text-center py-5 header-homepage">
        <div class="container">
          <h1 class="display-4">Bảo Vệ Sức Khỏe Của Bạn</h1>
          <p class="lead">
            Chúng tôi cung cấp các dịch vụ bảo hiểm sức khỏe chất lượng cao
          </p>
          <a href="/" class="btn btn-primary btn-lg">
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
