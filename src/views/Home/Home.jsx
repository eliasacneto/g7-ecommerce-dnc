import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import ProductsCard from "../../components/ProductsCard/ProductsCard"
import "./index.scss";

const Home = ({ data }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <section className="section-home">
        <div className="home__card">
        {data.map((product) => (
          <ProductsCard key={product.id} data={product} />
        ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
