import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './index.scss'

const ProductDetails = () => {
    return (
        <>
            <Navbar />
            <section className="section-product-details">
                <h1>Adicionar os Detalhe do Produto aqui</h1>

                <div className="btn-group">
                    <Link to={`/home`}>
                        <button className="dnc-btn">Voltar para a Home</button>
                    </Link>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default ProductDetails