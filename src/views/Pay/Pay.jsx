import "./index.scss";
import PayModal from "../../components/PayModal/PayModal";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Pay = () => {
    return (
        <section className="register">
            <Navbar />
            <PayModal />   
            <Footer />
        </section>
    )
};


export default Pay;