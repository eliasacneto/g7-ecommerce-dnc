import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
// import Banner from "../../components/Banner/Banner";
import "./index.scss";

const Home = () => {
  return (<>
    <section className="section-home">
      <div className="banner">
        {/* <Banner /> */}
      </div>
      <h1>We have to develop the Home Page</h1>
      <button><Link to={`/products`}>Ir para produtos</Link></button>
      <button><Link to={`/`}>Voltar</Link></button>
    </section>


    <Footer />
  </>
  )
}
export default Home