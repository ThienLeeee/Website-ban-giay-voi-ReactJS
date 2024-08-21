import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
  <>
  {/* header */}
  <div id="top-bar" className="ega-hidden--xs ega-hidden--sm ega-hidden--md">
    <div className="ega-container ega-clearfix">
      <div className="ega-row">
        <div className="ega-col-lg-4 ega-col-md-4 ega-col-4">
          <p className="ega-m--0">
            <strong>
              <svg className="ega-ic-phone">
                <use xlinkHref="#ega-ic-phone" />
              </svg>
              <a href="tel:19001267">19001267</a>
            </strong>
            <strong>
              <svg className="ega-ic-envelope">
                <use xlinkHref="#ega-ic-envelope" />
              </svg>{" "}
              <a href="mailto:support@egany.com">support@egany.com</a>
            </strong>
          </p>
        </div>
        <div className="header-menu">
          <p className="ega-m--0"></p>
          <ul className="">
            <strong>
              <a href="#">Giới thiệu</a>
            </strong>
            <strong>
              <a href="#">Tuyển dụng</a>
            </strong>
            <strong>
              <a href="#">Liên hệ</a>
            </strong>
            <strong>
              <a href="#">Landing page</a>
            </strong>
            <strong>
              <a href="#">Quà tặng 2024</a>
            </strong>
          </ul>
          <p />
        </div>
      </div>
    </div>
  </div>
  <header className="ega-header ega-hidden--xs ega-hidden--sm ega-hidden--md ega-hidden--lg">
    <div className="ega-header__wrap">
      <div className="ega-container">
        <div className="ega-row">
          <div className="ega-col-sm-3">
            <a className="logo-desk" title="" href="">
              <span style={{ display: "none" }} />
              <img src="/public/img/LOGO_GS1.png" alt="Good-Shoes" />
            </a>
            <div className="vermega ega-pos--relative template-index dropdown">
              <div className="vermega__header ega-base-color ">
                <svg className="ega-ic-list">
                  <use xlinkHref="#ega-ic-list" />
                </svg>{" "}
                DANH MỤC SẢN PHẨM
              </div>
              <div className="vermega__content">
                <ul className="ega-ul ega-menu--ver ega-color--initial ega-m--0">
                  <li className="ega-menu--ver__item has-child ">
                    <a className="verlink" href="collections/trang-diem">
                      <img
                        src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/mega_coll_icon_4.png?1660045194993"
                        title="mega_coll_icon_4.png"
                      />
                      <span className="menu_title">Trang điểm</span>
                      <div className="verlink-icon">
                        <svg className="ega-ic-caret-right">
                          {/* <use xlink:href="#ega-ic-caret-right"></use> */}
                        </svg>
                      </div>
                    </a>
                    {/* <ul class="menunpd versub ega-ul">
                                      <div class="ega-row">
                                          <div class="ega-col-lg-6">
                                              <h3 class="ega-m-t--0 ega-h5">Nổi bật</h3>
                                              <ul class="ega-menu ega-ul ega-menu--vertical">

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/trang-diem">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Trang điểm mặt
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/trang-diem">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Trang điểm mắt
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/cham-soc-da">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Trang điểm môi
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/cham-soc-da">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Chăm sóc móng
                                                      </a>
                                                  </li>

                                              </ul>
                                          </div>
                                          <div class="ega-col-lg-6">
                                              <h3 class="ega-m-t--0 ega-h5">Mới nhất</h3>

                                              <div data-style="ega-product" class="ega-pro ega-pro--style2 ega-pro-item ega-text--center">
                                                  <div class="ega-pro__img">
                                                      <a href="/son-mong-tay-revlon" class="ega-text--no-underline">

                                                          <img src="//bizweb.dktcdn.net/thumb/large/100/093/224/themes/799083/assets/ega-product-empty.jpg?1660045194993" class="lazyload" data-srcset="//bizweb.dktcdn.net/thumb/medium/100/093/224/products/son-mong-revlon-3.jpg?v=1484019430030 767w,//bizweb.dktcdn.net/thumb/medium/100/093/224/products/son-mong-revlon-3.jpg?v=1484019430030" alt="Sơn móng tay Revlon Nail Enamel">
                                                      </a>
                                                      <div class="ega-pro__overlay">
                                                          <div class="ega-row">



                                                              <div class="ega-col-6">
                                                                  <a href="/son-mong-tay-revlon" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Lựa chọn">
                                                                      <svg class="ega-ic-shopping-cart">
                                                                          <use xlink:href="#ega-ic-shopping-cart">
                                                                          </use>
                                                                      </svg>
                                                                  </a>
                                                              </div>



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Xem nhanh" data-ega-role="quickview" data-handle="son-mong-tay-revlon">
                                                                      <svg class="ega-ic-eye">
                                                                          <use xlink:href="#ega-ic-eye"></use>
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ega-pro__content">
                                                      <h3 class="ega-pro__title ega-m-t--0 ega-h5">
                                                          <a href="/son-mong-tay-revlon" class="ega-text--no-underline">
                                                              Sơn móng tay Revlon Nail Enamel
                                                          </a>
                                                      </h3>
                                                      <div class="ega-pro__price-group">

                                                          <ins class="ega-pro__price ega-text--no-underline ega-color--danger">160.000₫</ins>


                                                      </div>
                                                  </div>

                                              </div>

                                          </div>
                                      </div>
                                  </ul> */}
                  </li>
                  <li className="ega-menu--ver__item has-child ">
                    <a
                      className="verlink"
                      href="collections/thuc-pham-chuc-nang"
                    >
                      <img
                        src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/mega_coll_icon_1.png?1660045194993"
                        title="mega_coll_icon_1.png"
                      />
                      <span className="menu_title">Thực phẩm chức năng</span>
                      <div className="verlink-icon">
                        <svg className="ega-ic-caret-right">
                          {/* <use xlink:href="#ega-ic-caret-right"></use> */}
                        </svg>
                      </div>
                    </a>
                    {/* <ul class="menunpd versub ega-ul">
                                      <div class="ega-row">
                                          <div class="ega-col-lg-6">
                                              <h3 class="ega-m-t--0 ega-h5">Nổi bật</h3>
                                              <ul class="ega-menu ega-ul ega-menu--vertical">


                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/thuc-pham-chuc-nang">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Thực phẩm giảm cân
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/thuc-pham-chuc-nang">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Tim mạch &amp; huyết áp
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/thuc-pham-chuc-nang">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Giải độc gan
                                                      </a>
                                                  </li>

                                              </ul>
                                          </div>
                                          <div class="ega-col-lg-6">
                                              <h3 class="ega-m-t--0 ega-h5">Mới nhất</h3>

                                              <div data-style="ega-product" class="ega-pro ega-pro--style2 ega-pro-item ega-text--center">
                                                  <div class="ega-pro__img">
                                                      <a href="/multipro-32x-200-vien-vitamin-khoang-chat-cho-nam-gioi" class="ega-text--no-underline">

                                                          <img src="//bizweb.dktcdn.net/thumb/large/100/093/224/themes/799083/assets/ega-product-empty.jpg?1660045194993" class="lazyload" data-srcset="//bizweb.dktcdn.net/thumb/medium/100/093/224/products/20100104-228.jpg?v=1465374624323 767w,//bizweb.dktcdn.net/thumb/medium/100/093/224/products/20100104-228.jpg?v=1465374624323" alt="MultiPro 32X 200 viên">
                                                      </a>
                                                      <div class="ega-pro__overlay">
                                                          <div class="ega-row">



                                                              <div class="ega-col-6">
                                                                  <a href="/multipro-32x-200-vien-vitamin-khoang-chat-cho-nam-gioi" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Lựa chọn">
                                                                      <svg class="ega-ic-shopping-cart">
                                                                          <use xlink:href="#ega-ic-shopping-cart">
                                                                          </use>
                                                                      </svg>
                                                                  </a>
                                                              </div>



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Xem nhanh" data-ega-role="quickview" data-handle="multipro-32x-200-vien-vitamin-khoang-chat-cho-nam-gioi">
                                                                      <svg class="ega-ic-eye">
                                                                          <use xlink:href="#ega-ic-eye"></use>
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ega-pro__content">
                                                      <h3 class="ega-pro__title ega-m-t--0 ega-h5">
                                                          <a href="/multipro-32x-200-vien-vitamin-khoang-chat-cho-nam-gioi" class="ega-text--no-underline">
                                                              MultiPro 32X 200 viên
                                                          </a>
                                                      </h3>
                                                      <div class="ega-pro__price-group">

                                                          <ins class="ega-pro__price ega-text--no-underline ega-color--danger">800.000₫</ins>


                                                          <del class="ega-pro__price-del ega-small ega-color--secondary">850.000₫</del>

                                                      </div>
                                                  </div>

                                                  <div class="ega-pro__sale-tag style2">
                                                      <span>-6%</span>
                                                  </div>

                                              </div>

                                          </div>
                                      </div>
                                  </ul> */}
                  </li>
                  <li className="ega-menu--ver__item has-child ">
                    <a className="verlink" href="collections/cham-soc-da">
                      <img
                        src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/mega_coll_icon_3.png?1660045194993"
                        title="mega_coll_icon_3.png"
                      />
                      <span className="menu_title">Chăm sóc da</span>
                      <div className="verlink-icon">
                        <svg className="ega-ic-caret-right">
                          {/* <use xlink:href="#ega-ic-caret-right"></use> */}
                        </svg>
                      </div>
                    </a>
                    {/* <ul class="menunpd versub ega-ul">
                                      <div class="ega-row">
                                          <div class="ega-col-lg-6">
                                              <h3 class="ega-m-t--0 ega-h5">Nổi bật</h3>
                                              <ul class="ega-menu ega-ul ega-menu--vertical">


                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="#">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Làm sạch
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="#">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Chăm sóc da mặt
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="#">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Trị mụn
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="#">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Làm sáng da
                                                      </a>
                                                  </li>

                                              </ul>
                                          </div>
                                          <div class="ega-col-lg-6">
                                              <h3 class="ega-m-t--0 ega-h5">Mới nhất</h3>

                                              <div data-style="ega-product" class="ega-pro ega-pro--style2 ega-pro-item ega-text--center">
                                                  <div class="ega-pro__img">
                                                      <a href="/kem-chong-nang-innisfree-dgf3534" class="ega-text--no-underline">

                                                          <img src="//bizweb.dktcdn.net/thumb/large/100/093/224/themes/799083/assets/ega-product-empty.jpg?1660045194993" class="lazyload" data-srcset="//bizweb.dktcdn.net/thumb/medium/100/093/224/products/1.jpg?v=1468832939357 767w,//bizweb.dktcdn.net/thumb/medium/100/093/224/products/1.jpg?v=1468832939357" alt="Kem chống nắng Innisfree - DGF3534">
                                                      </a>
                                                      <div class="ega-pro__overlay">
                                                          <div class="ega-row">



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-role="addtocart" data-quantity="1" data-variant-id="4397718" data-ega-tooltip="Thêm vào giỏ">
                                                                      <svg class="ega-ic-shopping-cart">
                                                                          <use xlink:href="#ega-ic-shopping-cart">
                                                                          </use>
                                                                      </svg>
                                                                  </a>
                                                              </div>



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Xem nhanh" data-ega-role="quickview" data-handle="kem-chong-nang-innisfree-dgf3534">
                                                                      <svg class="ega-ic-eye">
                                                                          <use xlink:href="#ega-ic-eye"></use>
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ega-pro__content">
                                                      <h3 class="ega-pro__title ega-m-t--0 ega-h5">
                                                          <a href="/kem-chong-nang-innisfree-dgf3534" class="ega-text--no-underline">
                                                              Kem chống nắng Innisfree - DGF3534
                                                          </a>
                                                      </h3>
                                                      <div class="ega-pro__price-group">

                                                          <ins class="ega-pro__price ega-text--no-underline ega-color--danger">149.000₫</ins>


                                                          <del class="ega-pro__price-del ega-small ega-color--secondary">180.000₫</del>

                                                      </div>
                                                  </div>

                                                  <div class="ega-pro__sale-tag style2">
                                                      <span>-17%</span>
                                                  </div>

                                              </div>

                                          </div>
                                      </div>
                                  </ul> */}
                  </li>
                  <li className="ega-menu--ver__item has-child ">
                    <a
                      className="verlink"
                      href="collections/thuc-pham-the-thao"
                    >
                      <img
                        src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/mega_coll_icon_2.png?1660045194993"
                        title="mega_coll_icon_2.png"
                      />
                      <span className="menu_title">Thực phẩm thể thao</span>
                      <div className="verlink-icon">
                        <svg className="ega-ic-caret-right">
                          {/* <use xlink:href="#ega-ic-caret-right"></use> */}
                        </svg>
                      </div>
                    </a>
                    {/* <ul class="menunpd versub ega-ul">
                                      <div class="ega-row">
                                          <div class="ega-col-lg-6">
                                              <h3 class="ega-m-t--0 ega-h5">Nổi bật</h3>
                                              <ul class="ega-menu ega-ul ega-menu--vertical">


                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/thuc-pham-the-thao">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Tăng cân, nở cơ
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/thuc-pham-the-thao">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Tăng cơ, giảm mở
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/thuc-pham-the-thao">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Giảm mở, cắt nét
                                                      </a>
                                                  </li>

                                              </ul>
                                          </div>
                                          <div class="ega-col-lg-6">
                                              <h3 class="ega-m-t--0 ega-h5">Mới nhất</h3>

                                              <div data-style="ega-product" class="ega-pro ega-pro--style2 ega-pro-item ega-text--center">
                                                  <div class="ega-pro__img">
                                                      <a href="/multipro-32x-200-vien-vitamin-khoang-chat-cho-nam-gioi" class="ega-text--no-underline">

                                                          <img src="//bizweb.dktcdn.net/thumb/large/100/093/224/themes/799083/assets/ega-product-empty.jpg?1660045194993" class="lazyload" data-srcset="//bizweb.dktcdn.net/thumb/medium/100/093/224/products/20100104-228.jpg?v=1465374624323 767w,//bizweb.dktcdn.net/thumb/medium/100/093/224/products/20100104-228.jpg?v=1465374624323" alt="MultiPro 32X 200 viên">
                                                      </a>
                                                      <div class="ega-pro__overlay">
                                                          <div class="ega-row">



                                                              <div class="ega-col-6">
                                                                  <a href="/multipro-32x-200-vien-vitamin-khoang-chat-cho-nam-gioi" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Lựa chọn">
                                                                      <svg class="ega-ic-shopping-cart">
                                                                          <use xlink:href="#ega-ic-shopping-cart">
                                                                          </use>
                                                                      </svg>
                                                                  </a>
                                                              </div>



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Xem nhanh" data-ega-role="quickview" data-handle="multipro-32x-200-vien-vitamin-khoang-chat-cho-nam-gioi">
                                                                      <svg class="ega-ic-eye">
                                                                          <use xlink:href="#ega-ic-eye"></use>
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ega-pro__content">
                                                      <h3 class="ega-pro__title ega-m-t--0 ega-h5">
                                                          <a href="/multipro-32x-200-vien-vitamin-khoang-chat-cho-nam-gioi" class="ega-text--no-underline">
                                                              MultiPro 32X 200 viên
                                                          </a>
                                                      </h3>
                                                      <div class="ega-pro__price-group">

                                                          <ins class="ega-pro__price ega-text--no-underline ega-color--danger">800.000₫</ins>


                                                          <del class="ega-pro__price-del ega-small ega-color--secondary">850.000₫</del>

                                                      </div>
                                                  </div>

                                                  <div class="ega-pro__sale-tag style2">
                                                      <span>-6%</span>
                                                  </div>

                                              </div>

                                          </div>
                                      </div>
                                  </ul> */}
                  </li>
                  <li className="ega-menu--ver__item has-child ">
                    <a className="verlink" href="collections/onsale">
                      <img
                        src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/mega_coll_icon_promotion.png?1660045194993"
                        alt="icon_promotion"
                      />
                      <span className="menu_title">Sản phẩm khuyến mãi</span>
                      <div className="verlink-icon">
                        <svg className="ega-ic-caret-right">
                          {/* <use xlink:href="#ega-ic-caret-right"></use> */}
                        </svg>
                      </div>
                    </a>
                    {/* <ul class="collpromo versub ega-ul">
                                      <div class="ega-row">
                                          <div class="ega-col-lg-12">
                                              <h3 class="ega-m-t--0 ega-h5">Sản phẩm khuyến mãi</h3>
                                          </div>



                                          <div class="ega-col-lg-3">

                                              <div data-style="ega-product" class="ega-pro ega-pro--style2 ega-pro-item ega-text--center">
                                                  <div class="ega-pro__img">
                                                      <a href="/thuoc-no-nguc-pueraria-mirifica" class="ega-text--no-underline">

                                                          <img src="//bizweb.dktcdn.net/thumb/large/100/093/224/themes/799083/assets/ega-product-empty.jpg?1660045194993" class="lazyload" data-srcset="//bizweb.dktcdn.net/thumb/medium/100/093/224/products/4-6dcbf760-c854-4450-acf5-0a4b14827372.jpg?v=1468833485117 767w,//bizweb.dktcdn.net/thumb/medium/100/093/224/products/4-6dcbf760-c854-4450-acf5-0a4b14827372.jpg?v=1468833485117" alt="Thuốc nở ngực Pueraria Mirifica">
                                                      </a>
                                                      <div class="ega-pro__overlay">
                                                          <div class="ega-row">



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-role="addtocart" data-quantity="1" data-variant-id="4398334" data-ega-tooltip="Thêm vào giỏ">
                                                                      <svg class="ega-ic-shopping-cart">
                                                                          <use xlink:href="#ega-ic-shopping-cart">
                                                                          </use>
                                                                      </svg>
                                                                  </a>
                                                              </div>



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Xem nhanh" data-ega-role="quickview" data-handle="thuoc-no-nguc-pueraria-mirifica">
                                                                      <svg class="ega-ic-eye">
                                                                          <use xlink:href="#ega-ic-eye"></use>
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ega-pro__content">
                                                      <h3 class="ega-pro__title ega-m-t--0 ega-h5">
                                                          <a href="/thuoc-no-nguc-pueraria-mirifica" class="ega-text--no-underline">
                                                              Thuốc nở ngực Pueraria Mirifica
                                                          </a>
                                                      </h3>
                                                      <div class="ega-pro__price-group">

                                                          <ins class="ega-pro__price ega-text--no-underline ega-color--danger">530.000₫</ins>


                                                          <del class="ega-pro__price-del ega-small ega-color--secondary">600.000₫</del>

                                                      </div>
                                                  </div>

                                                  <div class="ega-pro__sale-tag style2">
                                                      <span>-12%</span>
                                                  </div>

                                              </div>
                                          </div>

                                          <div class="ega-col-lg-3">

                                              <div data-style="ega-product" class="ega-pro ega-pro--style2 ega-pro-item ega-text--center">
                                                  <div class="ega-pro__img">
                                                      <a href="/thuoc-giam-can-lishou-xanh-phuc-linh" class="ega-text--no-underline">

                                                          <img src="//bizweb.dktcdn.net/thumb/large/100/093/224/themes/799083/assets/ega-product-empty.jpg?1660045194993" class="lazyload" data-srcset="//bizweb.dktcdn.net/thumb/medium/100/093/224/products/1-65246c53-9a12-4c2c-94c7-203a9739d920.jpg?v=1468833532890 767w,//bizweb.dktcdn.net/thumb/medium/100/093/224/products/1-65246c53-9a12-4c2c-94c7-203a9739d920.jpg?v=1468833532890" alt="Thuốc giảm cân Lishou">
                                                      </a>
                                                      <div class="ega-pro__overlay">
                                                          <div class="ega-row">



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-role="addtocart" data-quantity="1" data-variant-id="4398223" data-ega-tooltip="Thêm vào giỏ">
                                                                      <svg class="ega-ic-shopping-cart">
                                                                          <use xlink:href="#ega-ic-shopping-cart">
                                                                          </use>
                                                                      </svg>
                                                                  </a>
                                                              </div>



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Xem nhanh" data-ega-role="quickview" data-handle="thuoc-giam-can-lishou-xanh-phuc-linh">
                                                                      <svg class="ega-ic-eye">
                                                                          <use xlink:href="#ega-ic-eye"></use>
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ega-pro__content">
                                                      <h3 class="ega-pro__title ega-m-t--0 ega-h5">
                                                          <a href="/thuoc-giam-can-lishou-xanh-phuc-linh" class="ega-text--no-underline">
                                                              Thuốc giảm cân Lishou
                                                          </a>
                                                      </h3>
                                                      <div class="ega-pro__price-group">

                                                          <ins class="ega-pro__price ega-text--no-underline ega-color--danger">500.000₫</ins>


                                                          <del class="ega-pro__price-del ega-small ega-color--secondary">600.000₫</del>

                                                      </div>
                                                  </div>

                                                  <div class="ega-pro__sale-tag style2">
                                                      <span>-17%</span>
                                                  </div>

                                              </div>
                                          </div>

                                          <div class="ega-col-lg-3">

                                              <div data-style="ega-product" class="ega-pro ega-pro--style2 ega-pro-item ega-text--center">
                                                  <div class="ega-pro__img">
                                                      <a href="/tam-trang-manh-pure-snow-white-id6-snow-white-id6" class="ega-text--no-underline">

                                                          <img src="//bizweb.dktcdn.net/thumb/large/100/093/224/themes/799083/assets/ega-product-empty.jpg?1660045194993" class="lazyload" data-srcset="//bizweb.dktcdn.net/thumb/medium/100/093/224/products/1-576ac55b-4e1f-49d0-b2a5-cf36e8e1d1af.jpg?v=1468833164927 767w,//bizweb.dktcdn.net/thumb/medium/100/093/224/products/1-576ac55b-4e1f-49d0-b2a5-cf36e8e1d1af.jpg?v=1468833164927" alt="Tắm trắng mạnh Pure Snow White">
                                                      </a>
                                                      <div class="ega-pro__overlay">
                                                          <div class="ega-row">



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-role="addtocart" data-quantity="1" data-variant-id="4397298" data-ega-tooltip="Thêm vào giỏ">
                                                                      <svg class="ega-ic-shopping-cart">
                                                                          <use xlink:href="#ega-ic-shopping-cart">
                                                                          </use>
                                                                      </svg>
                                                                  </a>
                                                              </div>



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Xem nhanh" data-ega-role="quickview" data-handle="tam-trang-manh-pure-snow-white-id6-snow-white-id6">
                                                                      <svg class="ega-ic-eye">
                                                                          <use xlink:href="#ega-ic-eye"></use>
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ega-pro__content">
                                                      <h3 class="ega-pro__title ega-m-t--0 ega-h5">
                                                          <a href="/tam-trang-manh-pure-snow-white-id6-snow-white-id6" class="ega-text--no-underline">
                                                              Tắm trắng mạnh Pure Snow White
                                                          </a>
                                                      </h3>
                                                      <div class="ega-pro__price-group">

                                                          <ins class="ega-pro__price ega-text--no-underline ega-color--danger">55.000₫</ins>


                                                          <del class="ega-pro__price-del ega-small ega-color--secondary">60.000₫</del>

                                                      </div>
                                                  </div>

                                                  <div class="ega-pro__sale-tag style2">
                                                      <span>-8%</span>
                                                  </div>

                                              </div>
                                          </div>

                                          <div class="ega-col-lg-3">

                                              <div data-style="ega-product" class="ega-pro ega-pro--style2 ega-pro-item ega-text--center">
                                                  <div class="ega-pro__img">
                                                      <a href="/kem-chong-nang-innisfree-dgf3534" class="ega-text--no-underline">

                                                          <img src="//bizweb.dktcdn.net/thumb/large/100/093/224/themes/799083/assets/ega-product-empty.jpg?1660045194993" class="lazyload" data-srcset="//bizweb.dktcdn.net/thumb/medium/100/093/224/products/1.jpg?v=1468832939357 767w,//bizweb.dktcdn.net/thumb/medium/100/093/224/products/1.jpg?v=1468832939357" alt="Kem chống nắng Innisfree - DGF3534">
                                                      </a>
                                                      <div class="ega-pro__overlay">
                                                          <div class="ega-row">



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-role="addtocart" data-quantity="1" data-variant-id="4397718" data-ega-tooltip="Thêm vào giỏ">
                                                                      <svg class="ega-ic-shopping-cart">
                                                                          <use xlink:href="#ega-ic-shopping-cart">
                                                                          </use>
                                                                      </svg>
                                                                  </a>
                                                              </div>



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Xem nhanh" data-ega-role="quickview" data-handle="kem-chong-nang-innisfree-dgf3534">
                                                                      <svg class="ega-ic-eye">
                                                                          <use xlink:href="#ega-ic-eye"></use>
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ega-pro__content">
                                                      <h3 class="ega-pro__title ega-m-t--0 ega-h5">
                                                          <a href="/kem-chong-nang-innisfree-dgf3534" class="ega-text--no-underline">
                                                              Kem chống nắng Innisfree - DGF3534
                                                          </a>
                                                      </h3>
                                                      <div class="ega-pro__price-group">

                                                          <ins class="ega-pro__price ega-text--no-underline ega-color--danger">149.000₫</ins>


                                                          <del class="ega-pro__price-del ega-small ega-color--secondary">180.000₫</del>

                                                      </div>
                                                  </div>

                                                  <div class="ega-pro__sale-tag style2">
                                                      <span>-17%</span>
                                                  </div>

                                              </div>
                                          </div>

                                      </div>
                                  </ul> */}
                  </li>
                  {/* <li class="ega-menu--ver__item has-child ">
                                  <a class="verlink" href="collections/cham-soc-ca-nhan">
                                      <img src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/mega_coll_icon_5.png?1660045194993" title="mega_coll_icon_5.png">
                                      <span class="menu_title">Chăm sóc cá nhân</span>
                                      <div class="verlink-icon">
                                          <svg class="ega-ic-caret-right">
                                              <use xlink:href="#ega-ic-caret-right"></use>
                                          </svg>
                                      </div>
                                  </a>
                                  <ul class="menunpd versub ega-ul">
                                      <div class="ega-row">
                                          <div class="ega-col-lg-6">
                                              <h3 class="ega-m-t--0 ega-h5">Nổi bật</h3>
                                              <ul class="ega-menu ega-ul ega-menu--vertical">


                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/cham-soc-da">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Bộ sản phẩm chăm sóc cơ thể
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/trang-diem">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Chăm sóc răng miệng
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/thiet-bi-cham-soc-ca-nhan">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Mẹ và bé
                                                      </a>
                                                  </li>

                                                  <li class="ega-menu__item">
                                                      <a class="ega-menu__link" href="/thiet-bi-cham-soc-ca-nhan">
                                                          <svg class="ega-ic-angle-right">
                                                              <use xlink:href="#ega-ic-angle-right"></use>
                                                          </svg> Thiết bị tập thể thao
                                                      </a>
                                                  </li>

                                              </ul>
                                          </div>
                                          <div class="ega-col-lg-6">
                                              <h3 class="ega-m-t--0 ega-h5">Mới nhất</h3>











                                              <div data-style="ega-product" class="ega-pro ega-pro--style2 ega-pro-item ega-text--center">
                                                  <div class="ega-pro__img">
                                                      <a href="/vong-lac-giam-eo-massa-hoop" class="ega-text--no-underline">

                                                          <img src="//bizweb.dktcdn.net/thumb/large/100/093/224/themes/799083/assets/ega-product-empty.jpg?1660045194993" class="lazyload" data-srcset="//bizweb.dktcdn.net/thumb/medium/100/093/224/products/144741096042.jpg?v=1468834541390 767w,//bizweb.dktcdn.net/thumb/medium/100/093/224/products/144741096042.jpg?v=1468834541390" alt="Vòng lắc giảm eo Massage Hoop">
                                                      </a>
                                                      <div class="ega-pro__overlay">
                                                          <div class="ega-row">



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-role="addtocart" data-quantity="1" data-variant-id="4403336" data-ega-tooltip="Thêm vào giỏ">
                                                                      <svg class="ega-ic-shopping-cart">
                                                                          <use xlink:href="#ega-ic-shopping-cart">
                                                                          </use>
                                                                      </svg>
                                                                  </a>
                                                              </div>



                                                              <div class="ega-col-6">
                                                                  <a href="#" class="ega-pro__action ega-tooltip ega-color--black" data-ega-tooltip="Xem nhanh" data-ega-role="quickview" data-handle="vong-lac-giam-eo-massa-hoop">
                                                                      <svg class="ega-ic-eye">
                                                                          <use xlink:href="#ega-ic-eye"></use>
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ega-pro__content">
                                                      <h3 class="ega-pro__title ega-m-t--0 ega-h5">
                                                          <a href="/vong-lac-giam-eo-massa-hoop" class="ega-text--no-underline">
                                                              Vòng lắc giảm eo Massage Hoop
                                                          </a>
                                                      </h3>
                                                      <div class="ega-pro__price-group">

                                                          <ins class="ega-pro__price ega-text--no-underline ega-color--danger">285.000₫</ins>


                                                          <del class="ega-pro__price-del ega-small ega-color--secondary">300.000₫</del>

                                                      </div>
                                                  </div>

                                                  <div class="ega-pro__sale-tag style2">
                                                      <span>-5%</span>
                                                  </div>

                                              </div>

                                          </div>
                                      </div>
                                  </ul>
                              </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="ega-col-sm-6 ega-d--flex ega-flex--align-center">
            <form className="ega-search ega-form ega-col" action="/search">
              <div className="ega-form">
                <div className="ega-form--group ega-form__group-btn-in--right">
                  <input type="hidden" name="type" defaultValue="product" />
                  <input
                    id="keyword"
                    aria-label="Bạn muốn tìm gì..."
                    className="ega-form__control ega-form__control"
                    type="text"
                    name="q"
                    placeholder="Bạn muốn tìm gì..."
                    autoComplete="off"
                  />
                  <button
                    aria-label="search"
                    className="ega-btn ega-bg--black ega-m--0 ega-border--0 ega-radius-t-l--0 ega-radius-b-l--0"
                  >
                    <svg className="ega-ic-search">
                      <use xlinkHref="#ega-ic-search" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="ega-col-sm-3">
            <div className="header-login">
              <svg className="ega-ic-user">
                <use xlinkHref="#ega-ic-user" />
              </svg>
              <ul className="header_login_content">
                <li>
                  <Link to='/login'>Đăng nhập</Link>
                  {/* <a href="">Đăng nhập</a> */}
                </li>
                <li>
                <Link to='/register'>Đăng ký</Link>
                  {/* <a href="">Đăng ký</a> */}
                </li>
              </ul>
            </div>
            <div className="ega-top-cart" data-style="ega-top-cart">
            <Link to='/cart'>
              <a
                href=""
                id="ega-top-cart__trigger"
                className="ega-color--black"
              >
                <svg className="ega-ic-shopping-cart">
                  <use xlinkHref="#ega-ic-shopping-cart" />
                </svg>
              </a>
              </Link>
              {/* <div class="ega-top-cart__content ega-text--left">

                          <div class="ega-top-cart__header ega-text--center">Chưa có sản phẩm trong giỏ!</div>
                          <div class="ega-top-cart__footer">
                              <div class="ega-top-cart__action ega-text--center">
                                  <a class="ega-btn ega-btn--square ega-m--0 ega-border--0 ega-p-l--5 ega-p-r--5" href="?mod=pages&act=cart"><span class="text">VÀO CỬA HÀNG</span></a>
                              </div>
                          </div>

                      </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* header */}
</>


  </>
  
  );
}

export default Header;
