import React from "react";
import Brand from "./Brand";
import "./styles.scss";

const LookAndFeelBrand = () => {

  return (
    <>
      <div className="tabs">
        <div className="tab-container">
          <div id="tab3" className="tab">
            <a href="#tab3">Footer</a>
            <div className="tab-content">
              <h2>Footer</h2>
              <p>Lorem ipsum ...</p>
            </div>
          </div>
          <div id="tab2" className="tab">
            <a href="#tab2">Header</a>
            <div className="tab-content">
              <h2>Header</h2>
              <p>Lorem ipsum ...</p>
            </div>
          </div>
          <div id="tab1" className="tab">
            <a href="#tab1">Brand</a>
            <div className="tab-content">
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