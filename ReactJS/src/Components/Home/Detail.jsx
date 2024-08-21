import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../service/productsService";

import "/public/css/detail.css";
import "/public/css/boostrap3.3.6.css";

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Giả sử bạn có một hàm để lấy dữ liệu sản phẩm theo ID
    fetchProductById(id).then((productData) => setProduct(productData));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <>
        {/* style */}
        

        <link
          href="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/styles.scss.css?1660045194993"
          rel="stylesheet"
          type="text/css"
          media="all"
        />

        <link
          href="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/custom_styles.scss.css?1660045194993"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        {/* style */}
      </>

      {/* link */}
      <section id="ega-breadcrumb" className="ega-p-t--3 ega-p-b--3">
        <div className="ega-container">
          <ul className="ega-menu ega-ul ega-menu--breadcrumb ega-m--0">
            <li className="ega-menu__item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="ega-menu__item">
              <h1>Chi tiết sản phẩm</h1>
            </li>
          </ul>
        </div>
      </section>
      {/* link */}

      <div id="chitietsp">
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <div className="product-page">
                <div className="single-product">
                  <form
                    action=""
                    method="post"
                    encType="multipart/form-data"
                    id="ProductDetailsForm"
                  >
                    <div className="product">
                      <div style={{ marginBottom: 25 }}>
                        <div className="col-md-6 noleftpadding">
                          <div className="product-image product-main-image">
                            <div className="slider-wrap">
                              <div className="pd_slide col-sm-10 nopadding slick-initialized slick-slider">
                                <div
                                  aria-live="polite"
                                  className="slick-list draggable"
                                >
                                  <div
                                    className="slick-slide"
                                    data-slick-index={0}
                                    aria-hidden="true"
                                    style={{ width: 463 }}
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide00"
                                  >
                                    <div className="img">
                                      <img
                                        src={`/img/${product.img}`}
                                        alt="sản phẩm"
                                        width="500px"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div id="extwaiokist" style={{ display: "none" }}>
                                <div
                                  id="extwaigglbit"
                                  style={{ display: "none" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 norightpadding pd_desc_wrapper">
                          <div className="product-desc fix-view">
                            <div className="page_title">
                              <h2>{product.name}</h2>
                            </div>
                            <div className="pd_sale_wrapper">
                              <div className="product-price col-sm-12 col-md-6 noleftpadding" style={{width: '100%'}}>
                                <ins>{product.price} VND</ins>
                                <br />
                                <h4>Số lượng:</h4>
                                <div className="">
                                  <input
                                    type="number"
                                    id="product_quantity"
                                    name="slsp"
                                    defaultValue={1}
                                    min={1}
                                    max={50}
                                  />
                                  {/* <input type="button" className="desc-btn fleft minus" defaulvalue={-} /> */}
                                  {/* <input type="button" class="asc-btn fleft plus" value="+"> */}
                                </div>
                              </div>
                              <input
                                type="button"
                                data-role="addtocart"
                                name="addcart"
                                defaultValue="THÊM VÀO GIỎ"
                                className="add-to-cart addtocart button pdpage nomargin col-xs-12 col-md-7 nopadding"
                              />
                              {/* <svg class="ega-ic-user">
                                                  <use xlink:href="#ega-ic-shopping-cart"></use>
                                                  </svg>  */}
                              <div
                                className="ab_quantitybreak_infor"
                                style={{ display: "none" }}
                              />
                              <div
                                id="bizweb-qty-msg"
                                style={{ display: "none" }}
                              />
                              <input
                                type="button"
                                data-role="buynow"
                                name="addcart"
                                defaultValue="MUA NGAY"
                                className="button col-xs-7 nopadding buynow"
                              />
                              {/* <svg class="ega-ic-credit-card">
                                                      <use xlink:href="#ega-ic-credit-card"></use>
                                                  </svg> MUA NGAY */}
                            </div>
                            <div className="clear" />
                            <input
                              type="hidden"
                              defaultValue={1}
                              name="id_sp"
                            />
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
                            <div className="pd_policies_wrapper">
                              <div className="clear hidden-sm" />
                              <div className="line hidden-sm" />
                              <div className="pd_policies style_2">
                                <h2>Bộ sản phẩm chuẩn</h2>
                                <ul className="unstyled">
                                  <li
                                    className=""
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Sản phẩm bảo hành 1 năm, phụ kiện kèm theo bảo hành 6 tháng"
                                  >
                                    <img src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/pd_policies_1.png?1660045194993" />
                                    Thùng gồm có:{" "}
                                    <b>Sách hướng dẫn, phụ kiện</b>
                                  </li>
                                  <li
                                    className=""
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Dùng thử sản phẩm 7 ngày, nếu không ưng ý bạn sẽ đổi hoặc trả sản phẩm mà không tốn phí"
                                  >
                                    <img src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/pd_policies_2.png?1660045194993" />
                                    Bảo hành chính hãng:{" "}
                                    <b>
                                      Sản phẩm bảo hành 1 năm, phụ kiện kèm theo
                                      bảo hành 6 tháng
                                    </b>{" "}
                                    <a
                                      href="/bao-hanh"
                                      title="Xem chi tiết thông tin bảo hành"
                                    >
                                      (xem điểm bảo hành)
                                    </a>
                                  </li>
                                  <li
                                    className=""
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Thanh toán khi nhận hàng, thanh toán online hoặc tại cửa hàng bất kì"
                                  >
                                    <img src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/pd_policies_3.png?1660045194993" />
                                    Nhận hàng miễn phí <b>48 tiếng</b>{" "}
                                    <a href="/giao-hang" target="_blank">
                                      (xem chính sách giao hàng toàn quốc)
                                    </a>
                                  </li>
                                  <li
                                    className=""
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Để lại số điện thoại, chúng tôi sẽ gọi lại bạn trong vòng 5 phút"
                                  >
                                    <img src="//bizweb.dktcdn.net/100/093/224/themes/799083/assets/pd_policies_4.png?1660045194993" />
                                    Đổi sản phẩm lỗi miễn phí trong{" "}
                                    <b>1 tháng.</b>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="clear" />
                  <div className="col-md-8 nopadding" style={{ marginTop: 30 }}>
                    <div
                      className="pd_description tabs clearfix nobottommargin  ui-tabs ui-widget ui-widget-content ui-corner-all"
                      id="tab-1"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
