import { Link } from 'react-router-dom';
import './index.scss';

const RegisterModal = ({ data }) => {
    return (
        <div className="register-modal">
            <div className="register-modal__card-modal">
           <Link to={'/home'}><p  className="close"></p></Link> 
                <img src={data.imgPathDetail} alt={data.title} />
                <div className="register-modal__product">
                    <div className="register-modal__product-info">
                        <h1>Meu Carrinho</h1>
                        <h2>{data.title}</h2>
                        <span className="register-modal__price">{data.price}</span>
                        <p className='register-modal__color-name'>
                            Cor: {data.colors}

                        </p>
                        <div className='register-modal__color'>

                        </div>
                        <Link to={`/home`}>
                            <button className="register-modal__button-continue">Continuar Comprando</button>
                        </Link>
                        <Link to={`/pay`}>
                            <button className="register-modal__button-finished">Finalizar Compra</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;