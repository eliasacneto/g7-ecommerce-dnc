import { Link } from "react-router-dom";
import React from "react";
import "./index.scss";

const ProductsCard = ({ data }) => {
  return (
    <div className="home__card">
        <div className="home__card--card">
            <img src={data.imgPath} alt="model" />
            <div className="home__card--description">
                <p>{data.title}</p>
                <Link to={`/products/${data.id}`}>
                <button className="home__card--button">Ver mais</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard