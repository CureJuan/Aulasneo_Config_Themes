import React from "react";
import "../../App.scss";

const CardOpinion = ({ image }) => {
  return (
    <>
      <div className="cardOpinion">
            {image && (
              <div
                className="imageOpinion"
                style={{ backgroundImage: `url(${image}` }}
              />
            )}
          </div>
    </>
  );
};

export default CardOpinion;
