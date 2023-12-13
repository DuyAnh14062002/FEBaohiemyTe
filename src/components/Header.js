import "./HomePage.css";
import React from "react";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  const handleLogout = () => {
    history.push("/login");
    window.location.reload();
  };
  return (
    <div className="container-Header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/listInsurance">
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
                <a class="nav-link" href="/">
                  Trang Chủ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Dịch Vụ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/PaymentRequest">
                  Yêu Cầu Thanh Toán
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="user">
          <p className="name">Duy anh</p>
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="btn-logout">
          <i
            className="fa-solid fa-right-from-bracket"
            onClick={handleLogout}
          ></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
