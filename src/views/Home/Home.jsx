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
        
          <Link to={`/`}><button className="dnc-btn">Voltar</button></Link>
        
      </section>
      <Footer />
    </>
  );
};

export default Home;