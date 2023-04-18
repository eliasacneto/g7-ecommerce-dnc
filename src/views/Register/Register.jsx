import "./index.scss";
import RegisterModal from "../../components/RegisterModal/RegisterModal";

import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const Register = ({ data }) => {
    const { registerId } = useParams();
    const selectedProduct = data.find(product => product.id == registerId);

    return (
        <section className="register">
            <Navbar />
            <RegisterModal data={ selectedProduct }/>   
            <Footer />
        </section>
    )
};


export default Register;