import { Link } from 'react-router-dom'
import './index.scss'

const Products = () => {
    return (
        <section className="section-products">
            <h1>We have to develop the Products Page</h1>
            <button><Link to={`/home`}>Ir para Home</Link></button>
            <button><Link to={`/`}>Voltar para o Login </Link></button>
        </section>
    )
}

export default Products