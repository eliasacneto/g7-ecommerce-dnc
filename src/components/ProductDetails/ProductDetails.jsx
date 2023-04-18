import { Link } from 'react-router-dom'
import Cart from "../../assets/images/cart.png";
import './index.scss'


const ProductDetails = ({ data }) => {
    console.log(data)
    return (
        <section className='product-detail'>
        <div className="product-detail__left-side">
            <div className="product-detail__card">
                <img src={ data.imgPathDetail } alt={ data.title } />
                <p className='product-detail__card-title'>{ data.title }</p>
            </div>
            <div className="product-detail__description">
                <h1>Descrição</h1>
                <p>{ data.infoProducts }<span className='product-detail__hr'></span></p>
                <p></p>
            </div>
        </div>
        <div className="product-detail__right-side">
            <h1 className='product-detail__title'>{ data.title }</h1>
            <h2 className='product-detail__price'>{ data.price }</h2>
            <p className='product-detail__color-name'>
                    Cor:{data.colors}
                </p>
            
            <div className='product-detail__section-button'>
                <button>
                    <Link className='product-detail__link' to={ `/register/${data.id}` }>
                        <img className='product-detail__car-icon' src={ Cart } alt="Icone carrinho" />
                        <p>Adicionar ao carrinho</p>
                    </Link>
                </button>
            </div>
        </div>
    </section>

    )
}

export default ProductDetails;