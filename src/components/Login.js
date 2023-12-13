import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [err, setError] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `https://localhost:44313/api/User?email=${email}&password=${password}`
      );
      // Xử lý dữ liệu từ response
      if (response && response.data && response.data.errorCode === 0) {
        history.push("/");
        window.location.reload();
      }
    } catch (error) {
      setError(error.response.data.errorMessage);
      setPassword("");
    }
  };

  return (
    <div className="container-login">
      <div class="card center" style={{ width: "400px" }}>
        <div class="card-header text-center">
          <h2>Login</h2>
        </div>
        <div class="card-body needs-validation">
          <div class="row g-3">
            <div class="col-12">
              <input
                type="text"
                class="form-control {{validate}}"
                placeholder="Username"
                id="username"
                name="username"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div class="invalid-feedback"></div>
            </div>
            <div class="col-12">
              <input
                type="password"
                class="form-control {{validate}}"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div class="mt-2 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="rememberMe"
                  id="rememberMe"
                />
                <label class="form-check-label" for="rememberMe">
                  Remember me
                </label>
              </div>
            </div>
            <div class="col-12">
              <button
                class="btn btn-primary w-100"
                //type="submit"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div class="text-danger">{err}</div>
            <div class="col-12">
              <span>
                Don't have an account? <a href="/register">Register </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
