import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '/public/css/cart.css';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container-table">
      <form action="" method="post">
        <table className="table">
          <thead className="table">
            <tr>
              <th scope="col" />
              <th scope="col">STT</th>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Đơn giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Thành tiền</th>
              {/* <th scope="col">Xóa</th> */}
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="td-delete-father">
                    <button 
                      type="button" 
                      className="td-delete" 
                      onClick={() => removeFromCart(index)}
                    >
                      <img className="iconDelete" src="/img/iconDelete.png" width={20} alt="Xóa" />
                    </button>
                  </div>
                </td>
                <th>{index + 1}</th>
                <td>
                  <img src={`/img/${item.img}`} width={100} alt={item.name} /> {item.name}
                </td>
                <td>{item.price} VND</td>
                <td>
                  <input type="number" name="slspcu[]" className="quantity" min={1} defaultValue={1} />
                  <input type="hidden" name="updatecart" defaultValue={1} />
                </td>
                <td>{item.price} VND</td>
                {/* <td>
                  <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={() => removeFromCart(index)}
                  >
                    Xóa
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr className="table-secondary">
              <th colSpan={5}>Tổng giá trị đơn hàng: </th>
              
              <th>VND 
              {getTotalPrice()}
                
              </th>
              
              <td />
            </tr>
          </tbody>
        </table>
        <Link to='/'>
          <input className="btn-more" defaultValue="<-- TIẾP TỤC XEM SẢN PHẨM" />
        </Link>
        <input
          className="updatecart"
          type="button"
          defaultValue="CẬP NHẬT GIỎ HÀNG"
        />
      </form>
      <div className="formCheckout">
        <form action="" method="POST">
          <h4>THÔNG TIN ĐẶT HÀNG</h4>
          <div className="mb-3">
            <input
              type="text"
              className="input-text"
              name="hoten"
              placeholder="Nhập họ tên..."
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="input-text"
              name="diachi"
              placeholder="Nhập địa chỉ..."
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="input-text"
              name="email"
              placeholder="Nhập email..."
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="input-text"
              name="sdt"
              placeholder="Nhập số điện thoại..."
            />
          </div>
          <div className="phuongthuctt">
            <h4>Phương thức thanh toán</h4>
            <label htmlFor="">Tiền mặt: </label>
            <input
              type="checkbox"
              name="pttt"
              defaultValue={1}
              className="form-check-input"
            />
            <label htmlFor="">Chuyển khoản: </label>
            <input
              type="checkbox"
              name="pttt"
              defaultValue={2}
              className="form-check-input"
            />
            <label htmlFor="">MoMo: </label>
            <input
              type="checkbox"
              name="pttt"
              defaultValue={3}
              className="form-check-input"
            />
          </div>
          <input
            type="button"
            onSubmit="return validateForm()"
            name="thanhtoan"
            className="btn btn-danger"
            defaultValue="Thanh toán"
          />
          <input type="hidden" name="tongdonhang" defaultValue={getTotalPrice()} />
        </form>
      </div>
    </div>
  );
}
