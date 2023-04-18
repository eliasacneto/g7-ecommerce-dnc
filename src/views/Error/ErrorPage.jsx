import { Link, useRouteError } from "react-router-dom";
import './index.scss'
import Home from "../Home/Home";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error-section">
      <h1 className="error-title">Oops!</h1>
      <p className="error-subtitle">Parece que a página que você está buscando ainda não foi criada!</p>
      <Link to={`/home`}><button className='error-btn'>Me tire daqui!</button></Link>

    </div>
  );
}