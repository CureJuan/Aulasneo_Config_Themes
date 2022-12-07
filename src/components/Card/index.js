import React from "react";
import "../../App.scss";

const Card = ({ title }) => {
  return (
    <>
      <div className="card">
        <div className="card-container">
          <h3 className={`font-primary-bold`}>
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Card;
