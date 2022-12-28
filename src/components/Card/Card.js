import React from "react";

const Card = ({ imgs }) => {

    return (
        <>
            <p className="font-secondary">Ejemplo de como se veria tu plataforma con este tema</p>
            <hr />

            <div class="container">

                <div className="row">
                    {imgs?.map((imagesCard) => (

                        <div className="col-md" key={imagesCard.id}>
                            <div className="card">
                                <h4 className="card-title-h4">{imagesCard.cardTitle}</h4>
                                <img className="card-img-top" src={imagesCard.imgCard} />
                                <div className="card-body">
                                    <p className="card-text">{imagesCard.cardText}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Card;