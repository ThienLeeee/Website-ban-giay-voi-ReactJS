import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../../service/categoriesService";

export default function NavBar() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await fetchCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };
    loadCategories();
  }, []);

  return (
    <>
      {/* navbar */}
      <div className="primary_menu_wrap ega-bg--black ega-hidden--xs ega-hidden--sm ega-hidden--md ega-hidden--lg">
        <div className="ega-container">
          <div className="ega-row">
            <div className="ega-col-lg-3">
              <div className="vermega ega-pos--relative  template-other">
                <div className="vermega__header ega-base-color">
                  <svg className="ega-ic-list">
                    <use xlinkHref="#ega-ic-list" />
                  </svg>
                  DANH MỤC SẢN PHẨM
                </div>
                <div className="vermega__content">
                  <ul className="ega-ul ega-menu--ver ega-color--initial ega-m--0">
                   {categories.length > 0 ? (
                    categories.map((category) =>(
                      <li className="ega-menu--ver__item has-child " key={category.id}>
                      <Link to={`/cate/products/${category.id}`} className="verlink" >
                        <img src={`/img/${category.img}`} title="dm" />
                        <span className="menu_title">{category.name}</span>
                        <div className="verlink-icon">
                          <svg className="ega-ic-caret-right">{category.name}</svg>
                        </div>
                      </Link>
                    </li>
                    ))
                  ):(
                    <p>Đang tải danh mục...</p>
                   )}
                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="ega-col-lg-9 ega-p-l--0">
              <ul id="ega-main-menu" className="ega-menu ega-ul ega-m--0">
                <li className="ega-menu__item">
                  
                  <Link to="/" className="ega-menu__link">
                    Trang chủ
                  </Link>
                </li>
                <li className="ega-menu__item">
                 
                  <Link to="/introduce" className="ega-menu__link">
                    Giới thiệu
                  </Link>
                </li>
                <li className="ega-menu__item has-child">
                  
                  <Link to="/news" className="ega-menu__link">
                    Chuyên mục giày,dép
                    <svg className="ega-ic-caret-down">
                      <use xlinkHref="#ega-ic-caret-down" />
                    </svg>
                  </Link>
                  <ul className="ega-menu ega-ul ega-menu--vertical">
                    <li className="ega-menu__item">
                      <a className="ega-menu__link" href="#">
                        Cách vệ sinh giày,dép
                      </a>
                    </li>
                    <li className="ega-menu__item">
                      <a className="ega-menu__link" href="#">
                        Kiến thức về giày,dép
                      </a>
                    </li>
                    <li className="ega-menu__item">
                      <a className="ega-menu__link" href="#">
                        Mẹo khi sử dụng giày,dép
                      </a>
                    </li>
                    <li className="ega-menu__item">
                      <a className="ega-menu__link" href="#">
                        Thể thao
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="ega-menu__item">
                  
                  <Link to="/saleproducts" className="ega-menu__link">
                    Khuyến mãi
                  </Link>
                </li>
                <li className="mega-menu ega-menu__item has-child">
                 
                  <Link to="/shop" className="ega-menu__link">
                    Sản phẩm
                  </Link>
                </li>
                <li className="ega-menu__item">
                  
                  <Link to="/contract" className="ega-menu__link">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
     
    </>
  );
}


