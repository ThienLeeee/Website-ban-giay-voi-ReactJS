import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset lỗi khi người dùng bắt đầu nhập lại
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    const user = JSON.parse(localStorage.getItem("user"));

    if (!formData.username) {
      newErrors.username = "Tên tài khoản không được để trống";
    } else if (!user || user.username !== formData.username) {
      newErrors.username = "Tên tài khoản này sai hoặc không tồn tại";
    }

    if (!formData.password) {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (!user || user.password !== formData.password) {
      newErrors.password = "Mật khẩu này sai hoặc không tồn tại";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await validateForm()) {
      // Đăng nhập thành công
      alert("Chào mừng đến với Good Shoes");
      navigate("/");
    }
  };

  return (
    <>
      <section id="ega-breadcrumb" className="ega-p-t--3 ega-p-b--3">
        <div className="ega-container">
          <ul className="ega-menu ega-ul ega-menu--breadcrumb ega-m--0">
            <li className="ega-menu__item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="ega-menu__item">
              <h1>Đăng nhập</h1>
            </li>
          </ul>
        </div>
      </section>

      <div className="ega-login ega-p-b--4">
        <div className="ega-container">
          <div className="ega-row ega-flex--center">
            <div className="ega-col-md-6 ega-col-12">
              <div id="ega-login" className="ega-card ega-border--0">
                <h4 className="ega-h5">
                  <svg className="ega-ic-lock">
                    <use xlinkHref="#ega-ic-lock" />
                  </svg>
                  Đăng nhập
                </h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Tên tài khoản:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      placeholder="Nhập tên tài khoản..."
                      value={formData.username}
                      onChange={handleChange}
                    />
                    {errors.username && <p className="text-danger">{errors.username}</p>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Nhập mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Tạo mật khẩu..."
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                  </div>
                  <button type="submit" className="btn btn-primary">Đăng nhập</button>
                  <div className="ega-f--right">
                    <Link to='/register' className="ega-text--no-underline ega-color--info ega-link">Tạo tài khoản</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


