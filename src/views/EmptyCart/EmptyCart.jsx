import { Link, useRouteError } from "react-router-dom";
import './index.scss'


export default function EmptyCart() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error-section">
      <h1 className="error-title">Seu carrinho está vazio! 😕</h1>
      <p className="error-subtitle">Parece que você ainda não adicionou nenhum item no Carrinho!</p>
      <Link to={`/home`}><button className='error-btn'>Que tal voltar às compras?</button></Link>

    </div>
  );
}