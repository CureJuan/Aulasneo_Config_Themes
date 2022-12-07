import React from "react";
import Brand from "./Brand";
import "./styles.scss";

const LookAndFeelBrand = () => {

  return (
    <>
      <div class="tabs">
        <div class="tab-container">
          <div id="tab3" class="tab">
            <a href="#tab3">Footer</a>
            <div class="tab-content">
              <h2>Footer</h2>
              <p>Lorem ipsum ...</p>
            </div>
          </div>
          <div id="tab2" class="tab">
            <a href="#tab2">Header</a>
            <div class="tab-content">
              <h2>Header</h2>
              <p>Lorem ipsum ...</p>
            </div>
          </div>
          <div id="tab1" class="tab">
            <a href="#tab1">Brand</a>
            <div class="tab-content">
              <h2>Look and Feel - Brand</h2>
              <hr/>
              <Brand />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default LookAndFeelBrand;

{/* <div className="container-submenu" >
        <div className="line"></div>
        <ul className="sub-menu">

          <li>
            <Link
              to="/general/brand"
            >
              Brand
            </Link>
          </li>
          <li>
            <Link
              to="/general/header"
            >
              Header
            </Link>
          </li>
          <li>
            <Link
              to="/general/footerbasic"
            >
              Footer
            </Link>
          </li>
          <li>
            <Link
              to="/general/footeradvance"
            >
              Footer Advance
            </Link>
          </li>
          <li>
            <Link
              to="/general/basicsetings"
            >
              Basic Setings
            </Link>
          </li>
        </ul>
      </div>

      <div className="container-comp">
      </div>
    </> */}