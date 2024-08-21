import React from "react";
import { Link } from "react-router-dom";
function News() {
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
              <h1>Tin tức</h1>
            </li>
          </ul>
        </div>
      </section>
      {/* link */}
    <h1>Trang tin tức</h1>

    </>
  );
}

export default News;
