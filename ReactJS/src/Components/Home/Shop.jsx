import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../../service/productsService";

export default function Shop() {

  const [products, setProducts] = useState([]);

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

  return (
    <>
   <section id="ega-breadcrumb" className="ega-p-t--3 ega-p-b--3">
  <div className="ega-container">
    <ul className="ega-menu ega-ul ega-menu--breadcrumb ega-m--0">
      <li className="ega-menu__item">
        <a href="">Trang chủ</a>
      </li>
      {/* <li class="ega-menu__item"><a href="/collections/all">Danh mục</a></li> */}
      <li className="ega-menu__item">
        <a href="">Trang sản phẩm</a>
      </li>
    </ul>
  </div>
  {/* section */}
  {/* product */}
 
  <div className="ega-col-xl-12 ega-col-lg-12 ega-col-12">
    <div id="result">
      <div className="ega-row">
        {products.length > 0 ? (
          products.map((product,index)=>(
            <div className="ega-col-lg-4 ega-col-sm-4 ega-col-6" key={index}>
            <div className="pd-item__wrapper">
              <div
                data-style="ega-product"
                className="ega-pro ega-pro--style2 ega-pro-item ega-text--center"
              >
                <div className="ega-pro__img">
                  <Link
                   to={`/detail/product/${product.id}`}
                    className="ega-text--no-underline"
                  >
                    <img src={`/img/${product.img}`} />
                  </Link>
                </div>
                <div className="ega-pro__content">
                  <h3 className="ega-pro__title ega-m-t--0 ega-h5">
                    <a href="" className="ega-text--no-underline">
                    {product.name}
                    </a>
                  </h3>
                  <div className="ega-pro__price-group">
                    <ins className="ega-pro__price ega-text--no-underline ega-color--danger">
                    {product.price} VND
                    </ins>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))
        ):(
          <p>Đang tải sản phẩm Adidas...</p>
        )}
       
       
        
      </div>
    </div>
    <div id="pagination" className="ega-text--center">
      <div className="ega-d--i-block">
        <div className="ega-pagi" />
      </div>
    </div>
  </div>
  <div id="ega-collection">
    <div className="ega-container">
      <input type="hidden" id="collection_id" defaultValue={432903} />
      <div className="collection-wrapper">
        <div className="ega-row"></div>
      </div>
    </div>
  </div>
  {/* product */}
</section>

  </>
  
  );
}


