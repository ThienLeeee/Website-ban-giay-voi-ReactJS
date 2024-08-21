import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.username || formData.username.length < 5) {
      newErrors.username = "Tên tài khoản không được để trống và phải ít nhất 5 kí tự";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "Email không được để trống và phải đúng định dạng";
    }

    const passwordPattern = /^(?=.*[0-9]{3,})(?=.*[!@#$%^&*]).{5,}$/;
    if (!formData.password || !passwordPattern.test(formData.password)) {
      newErrors.password = "Mật khẩu không được để trống, ít nhất 5 kí tự, ít nhất 1 kí tự đặc biệt và ít nhất 3 chữ số";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Xác nhận mật khẩu phải trùng khớp với mật khẩu đã nhập";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Lưu thông tin người dùng vào Local Storage
      localStorage.setItem("user", JSON.stringify(formData));

      // Hiển thị thông báo và chuyển hướng
      alert("Đăng ký thành công!");
      navigate("/login");
    }
  };

  return (
    <>
      {/* link */}
      <section id="ega-breadcrumb" className="ega-p-t--3 ega-p-b--3">
        <div className="ega-container">
          <ul className="ega-menu ega-ul ega-menu--breadcrumb ega-m--0">
            <li className="ega-menu__item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="ega-menu__item">
              <h1>Đăng ký</h1>
            </li>
          </ul>
        </div>
      </section>
      {/* link */}

      {/* Register */}
      <div className="ega-register ega-p-b--4">
        <div className="ega-container">
          <div className="ega-row ega-flex--center">
            <div className="ega-col-md-5 ega-col-12">
              <h1 className="ega-h5">
                <svg className="ega-ic-user">
                  <use xlinkHref="#ega-ic-user" />
                </svg>
                Người dùng mới? Đăng ký tài khoản
              </h1>
              <div className="userbox ega-card ega-border--0">
                
                <form
                  onSubmit={handleSubmit}
                  id="customer_register"
                  acceptCharset="UTF-8"
                >
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Tên tài khoản:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      placeholder="Nhập tên tài khoản..."
                      value={formData.username}
                      onChange={handleChange}
                      
                    />
                    {errors.username && (
                      <p className="text-danger">{errors.username}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Nhập email..."
                      value={formData.email}
                      onChange={handleChange}
                      
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Nhập mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Tạo mật khẩu..."
                      value={formData.password}
                      onChange={handleChange}
                      
                    />
                    {errors.password && (
                      <p className="text-danger">{errors.password}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Xác nhận mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Xác nhận mật khẩu..."
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      
                    />
                    {errors.confirmPassword && (
                      <p className="text-danger">{errors.confirmPassword}</p>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Đăng ký
                  </button>
                  <div className="ega-f--right">
                    <Link
                      to="/login"
                      className="ega-text--no-underline ega-color--info ega-link"
                    >
                      Đăng nhập
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Register */}
    </>
  );
}
