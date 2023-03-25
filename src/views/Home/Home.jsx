import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import "./index.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <section className="section-home">
        <h1>Adicionar listagem de produtos aqui</h1>

        <div className="btn-group">
          <Link to={`/`}>
            <button className="dnc-btn">Voltar</button>
          </Link>
          <Link to={`/products`}>
            <button className="dnc-btn">Detalhes do produto</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
