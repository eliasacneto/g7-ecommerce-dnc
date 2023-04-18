import { Link } from "react-router-dom";
import "./index.scss";

const ProductsCard = ({ data }) => {
  return (
    <div className="home__card">
        <div className="home__card__card">
            <img className="home__card__img" src={data.imgPath} alt="model" />
            <div className="home__card__description">
                <p>{data.title}</p>
                <Link to={`/products/${data.id}`}>
                <button className="home__card__button">Ver mais</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard;