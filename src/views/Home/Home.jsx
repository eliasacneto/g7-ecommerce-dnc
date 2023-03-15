import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import '../Home/home.scss'

export function Home(){
  return(<>
  <Navbar />
  <section className="section-home">
  <h1>Home Page</h1>
  <button><Link to={`/`}>Voltar</Link></button>


  </section>
  </>);
}