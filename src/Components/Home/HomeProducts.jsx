import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts } from "../../../service/productsService";
import { fetchCategories } from "../../../service/categoriesService";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };
    loadProducts();
  }, []);

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
  // Lọc sản phẩm theo categoryId
  const ProductsCate1 = products.filter((product) => product.categoryId === 1);
  const ProductsCate2 = products.filter((product) => product.categoryId === 2);
  const ProductsCate3 = products.filter((product) => product.categoryId === 3);

  const addToCart = (product) => {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <>
      {/* banner & products */}
      <div className="ega">
        <br />
        <div className="container-slide">
          <div className="slide-show">
            <div className="container-list-images">
              <div className="list-images">
                <div className="img1">
                  <img
                    className="slide-img"
                    src="/img/bannerS1.png"
                    alt="banner1"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="img2">
                  <img
                    className="slide-img"
                    src="/img/bannerS2.png"
                    alt="banner2"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="img3">
                  <img
                    className="slide-img"
                    src="/img/bannerS3.png"
                    alt="banner3"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            {/* Navigation arrows */}
            <a className="prev" onClick="plusSlides(1)">
              &#10094;
            </a>
            <a className="next" onClick="plusSlides(1)">
              &#10095;
            </a>
          </div>
        </div>
        <br />
        {/* Chỉ mục */}
        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick="currentSlide(1)" />
          <span className="dot" onClick="currentSlide(2)" />
          <span className="dot" onClick="currentSlide(3)" />
        </div>
        {/* script slide-show */}
        <>
          <script
            dangerouslySetInnerHTML={{
              __html:
                '         // JavaScript         let slideIndex = 0;         showSlides();         function showSlides() {             const slides = document.getElementsByClassName("slide-img");             slideIndex++;             if (slideIndex > slides.length) {                 slideIndex = 1             }             for (let i = 0; i < slides.length; i++) {                 slides[i].style.display = "none";             }             slides[slideIndex - 1].style.display = "block";             setTimeout(showSlides, 3000);         }         function plusSlides(n) {             showSlides(slideIndex += n);         }         function currentSlide(n) {             showSlides(slideIndex = n);         }     ',
            }}
          />
        </>
        {/* script slide-show */}
        <div className="ega-row">
          <div className="ega-col-lg-3 ega-hidden--xs ega-hidden--sm" />
          <div className="ega-col-lg-9 ega-col-12 ega-slider__wrap"></div>
        </div>
        {/* Sản phẩm danh mục 1 */}
        <div className="ega-index-coll ega-m-t--3" id="ega-index-col-1">
          <div className="ega-clearfix">
            <div className="ega-index-coll__header">
              <div className="ega-index-coll__name">
                <img className="collection-icon" src="/img/logoAdidas.png" />
                <h2 className="link-opacity-0 ega-h4 ega-m--0">
                  <a href="#">Adidas</a>
                </h2>
                <div className="ega-index-coll__open ega-hidden--lg ega-hidden--xl">
                  Danh mục
                  <svg className="ega-ic-caret-down">
                    <use xlinkHref="#ega-ic-caret-down" />
                  </svg>
                </div>
              </div>
              <ul className="ega-index-coll__menu ega-ul ega-menu ega-flex--end ega-m--0">
                {categories.length > 0 ? (
                  <li className="ega-menu__item" key={categories[0].id}>
                    <Link
                      to={`/cate/products/${categories[0].id}`}
                      className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                      href="#"
                    >
                      {categories[0].name}
                    </Link>
                  </li>
                ) : (
                  <p>Đang tải danh mục...</p>
                )}

                <li className="ega-menu__item">
                  <a
                    className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                    href="#"
                  >
                    Giảm giá
                  </a>
                </li>

                <li className="ega-menu__item">
                  <a
                    className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                    href="#"
                  >
                    Bán chạy
                  </a>
                </li>

                <li className="ega-menu__item">
                  <a
                    className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                    href="#"
                  >
                    Mới
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ega-container clearfix">
            <div className="bannerp1">
              <img src="/img/bannerP1.png" alt="bannerp1" />
            </div>
          </div>
          <div className="ega-row">
            {/* <div class="ega-hidden--xs ega-col-sm-4 ega-col-md-4 ega-order--2">
              <a href="/collections/all" class="ega-banner ega-banner--style5 ega-d--block ega-banner__zoom-in">
                  <div class="ega-banner__img">
                      <img class=" lazyloaded" src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/index_col_main_img_1.jpg?1660045194993" data-src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/index_col_main_img_1.jpg?1660045194993" alt="">
                  </div>
  
              </a>
          </div> */}
            <div className="ega-col-12 ega-col-sm-8 ega-col-md-8  index_col_products">
              <div className="ega-row">
                {/* show dữ liệu sản phẩm danh mục 1 */}
                {ProductsCate1.length > 0 ? (
                  ProductsCate1.map((product, index) => (
                    <div className="ega-col-6 ega-col-lg-3" key={index}>
                      <form action="" method="post">
                        <div
                          data-style="ega-product"
                          className="ega-pro ega-pro--style2 ega-pro-item ega-text--center"
                        >
                          <div className="ega-pro__img">
                            <Link
                              to={`/detail/product/${product.id}`}
                              className="ega-text--no-underline"
                            >
                              <img
                                src={`/img/${product.img}`}
                                className="lazyloaded"
                                data-srcset=""
                                alt={product.name}
                                srcSet=""
                              />
                            </Link>
                          </div>
                          <div className="ega-pro__content">
                            <h3 className="ega-pro__title ega-m-t--0 ega-h5">
                              <Link
                                to={`/detail/product/${product.id}`}
                                className="ega-text--no-underline"
                              >
                                {product.name}
                              </Link>
                            </h3>
                            <div className="ega-pro__price-group">
                              <ins className="ega-pro__price ega-text--no-underline ega-color--danger">
                                {product.price} VND
                              </ins>
                            </div>
                            <div className="btn-interfate">
                              <input
                                type="button"
                                name="addcart"
                                defaultValue="MUA NGAY"
                                className="btn-cart"
                                onClick={() => addToCart(product)}
                              />
                              <Link
                                to={`/detail/product/${product.id}`}
                                className="ega-text--no-underline"
                              >
                                <a href="">
                                  <input
                                    type="button"
                                    name="detail"
                                    defaultValue="CHI TIẾT"
                                    className="btn-detail"
                                  />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <input type="hidden" defaultValue={1} name="id_sp" />
                        <input
                          type="hidden"
                          defaultValue="giayAdidas1.png"
                          name="anhsp"
                        />
                        <input
                          type="hidden"
                          defaultValue="Giày adidas Run 80S Nam - Đen"
                          name="tensp"
                        />
                        <input
                          type="hidden"
                          defaultValue={2850000}
                          name="giasp"
                        />
                      </form>
                    </div>
                  ))
                ) : (
                  <p>Đang tải sản phẩm Adidas...</p>
                )}

                {/* show dữ liệu sản phẩm danh mục 1  */}
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        {/* Sản phẩm danh mục 1 */}

        {/* Sản phẩm danh mục 2 */}
        <div className="ega-index-coll ega-m-t--3" id="ega-index-col-2">
          <div className="ega-clearfix">
            <div className="ega-index-coll__header">
              <div className="ega-index-coll__name">
                <img
                  className="collection-icon"
                  src="/img/logoNike.png"
                  width={200}
                />
                <h2 className="ega-h4 ega-m--0">
                  <a href="/cham-soc-da">Nike</a>
                </h2>
                <div className="ega-index-coll__open ega-hidden--lg ega-hidden--xl">
                  Danh mục{" "}
                  <svg className="ega-ic-caret-down">
                    <use xlinkHref="#ega-ic-caret-down" />
                  </svg>
                </div>
              </div>
              <ul className="ega-index-coll__menu ega-ul ega-menu ega-flex--end ega-m--0">
                {categories.length > 0 ? (
                  <li className="ega-menu__item" key={categories[1].id}>
                    <Link
                      to={`/cate/products/${categories[1].id}`}
                      className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                      href="#"
                    >
                      {categories[1].name}
                    </Link>
                  </li>
                ) : (
                  <p>Đang tải danh mục...</p>
                )}

                <li className="ega-menu__item">
                  <a
                    className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                    href="#"
                  >
                    Giảm giá
                  </a>
                </li>

                <li className="ega-menu__item">
                  <a
                    className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                    href="#"
                  >
                    Bán chạy
                  </a>
                </li>

                <li className="ega-menu__item">
                  <a
                    className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                    href="#"
                  >
                    Mới
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ega-container clearfix">
            <div className="bannerp2">
              <img src="/img/bannerP2.png" alt="bannerp1" />
            </div>
          </div>
          <div className="ega-row">
            <div className="ega-col-12 ega-col-sm-8 ega-col-md-8  index_col_products">
              <div className="ega-row">
                {/* show dữ liệu sản phẩm danh mục 2 */}
                {ProductsCate2.length > 0 ? (
                  ProductsCate2.map((product, index) => (
                    <div className="ega-col-6 ega-col-lg-3" key={index}>
                      <form action="" method="post">
                        <div
                          data-style="ega-product"
                          className="ega-pro ega-pro--style2 ega-pro-item ega-text--center"
                        >
                          <div className="ega-pro__img">
                            <Link
                              to={`/detail/product/${product.id}`}
                              className="ega-text--no-underline"
                            >
                              <img
                                src={`/img/${product.img}`}
                                className="lazyloaded"
                                data-srcset=""
                                alt={product.name}
                                srcSet=""
                              />
                            </Link>
                          </div>
                          <div className="ega-pro__content">
                            <h3 className="ega-pro__title ega-m-t--0 ega-h5">
                              <Link
                                to={`/detail/product/${product.id}`}
                                className="ega-text--no-underline"
                              >
                                {product.name}
                              </Link>
                            </h3>
                            <div className="ega-pro__price-group">
                              <ins className="ega-pro__price ega-text--no-underline ega-color--danger">
                                {product.price} VND
                              </ins>
                            </div>
                            <input
                              type="button"
                              name="addcart"
                              defaultValue="MUA NGAY"
                              className="btn-cart"
                            />
                            <Link
                              to="/detail"
                              className="ega-text--no-underline"
                            >
                              <Link to={`/detail/product/${product.id}`}>
                                <input
                                  type="button"
                                  name="detail"
                                  defaultValue="CHI TIẾT"
                                  className="btn-detail"
                                />
                              </Link>
                            </Link>
                          </div>
                        </div>
                        <input type="hidden" defaultValue={9} name="id_sp" />
                        <input
                          type="hidden"
                          defaultValue="giayNike1.png"
                          name="anhsp"
                        />
                        <input
                          type="hidden"
                          defaultValue="Giày Nike Interact Run Nam - Xanh Trắng"
                          name="tensp"
                        />
                        <input
                          type="hidden"
                          defaultValue={2479000}
                          name="giasp"
                        />
                      </form>
                    </div>
                  ))
                ) : (
                  <p>Đang tải sản phẩm Nike...</p>
                )}

                {/* show dữ liệu sản phẩm danh mục 2 */}
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        {/* Sản phẩm danh mục 2 */}

        {/* Sản phẩm danh mục 3 */}
        <div className="ega-index-coll ega-m-t--3" id="ega-index-col-3">
          <div className="ega-clearfix">
            <div className="ega-index-coll__header">
              <div className="ega-index-coll__name">
                <img className="collection-icon" src="/img/logoPuma.png" />
                <h2 className="ega-h4 ega-m--0">
                  <a
                    href="/thuc-pham-chuc-nang"
                    className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                  >
                    Puma
                  </a>
                </h2>
              </div>
              <ul className="ega-index-coll__menu ega-ul ega-menu ega-flex--end ega-m--0">
                {categories.length > 0 ? (
                  <li className="ega-menu__item" key={categories[2].id}>
                    <Link
                      to={`/cate/products/${categories[2].id}`}
                      className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                      href="#"
                    >
                      {categories[2].name}
                    </Link>
                  </li>
                ) : (
                  <p>Đang tải danh mục...</p>
                )}

                <li className="ega-menu__item">
                  <a
                    className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                    href="#"
                  >
                    Giảm giá
                  </a>
                </li>

                <li className="ega-menu__item">
                  <a
                    className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                    href="#"
                  >
                    Bán chạy
                  </a>
                </li>

                <li className="ega-menu__item">
                  <a
                    className="ega-menu__link ega-p--0 ega-p-l--3 ega-p-r--3"
                    href="#"
                  >
                    Mới
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ega-container clearfix">
            <div className="bannerp2">
              <img src="/img/bannerP3.png" alt="bannerp1" />
            </div>
          </div>
          <div className="ega-row">
            <div className="ega-col-12 ega-col-sm-8 ega-col-md-8  index_col_products">
              <div className="ega-row">
                {/* show dữ liệu sản phẩm danh mục 3 */}

                {ProductsCate3.length > 0 ? (
                  ProductsCate3.map((product, index) => (
                    <div className="ega-col-6 ega-col-lg-3" key={index}>
                      <form action="" method="post">
                        <div
                          data-style="ega-product"
                          className="ega-pro ega-pro--style2 ega-pro-item ega-text--center"
                        >
                          <div className="ega-pro__img">
                            <Link
                              to={`/detail/product/${product.id}`}
                              className="ega-text--no-underline"
                            >
                              <img
                                src={`/img/${product.img}`}
                                className="lazyloaded"
                                data-srcset=""
                                alt={product.name}
                                srcSet=""
                              />
                            </Link>
                          </div>
                          <div className="ega-pro__content">
                            <h3 className="ega-pro__title ega-m-t--0 ega-h5">
                              <Link
                                to={`/detail/product/${product.id}`}
                                className="ega-text--no-underline"
                              >
                                {product.name}
                              </Link>
                            </h3>
                            <div className="ega-pro__price-group">
                              <ins className="ega-pro__price ega-text--no-underline ega-color--danger">
                                {product.price} VND
                              </ins>
                            </div>
                            <div className="btn-interfate">
                              <input
                                type="button"
                                name="addcart"
                                defaultValue="MUA NGAY"
                                className="btn-cart"
                              />
                              <Link to={`/detail/product/${product.id}`}>
                                <input
                                  type="button"
                                  name="detail"
                                  defaultValue="CHI TIẾT"
                                  className="btn-detail"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <input type="hidden" defaultValue={16} name="id_sp" />
                        <input
                          type="hidden"
                          defaultValue="giayPuma1.png"
                          name="anhsp"
                        />
                        <input
                          type="hidden"
                          defaultValue="Giày Puma"
                          name="tensp"
                        />
                        <input
                          type="hidden"
                          defaultValue={2550000}
                          name="giasp"
                        />
                      </form>
                    </div>
                  ))
                ) : (
                  <p>Đang tải sản phẩm Puma...</p>
                )}

                {/* show dữ liệu sản phẩm danh mục 3 */}
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        {/* Sản phẩm danh mục 3 */}
      </div>
      {/* banner & products */}
    </>
  );
}
