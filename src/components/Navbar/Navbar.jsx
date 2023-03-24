import "./index.scss";
import Logo from "../../assets/images/dnc-logo.png";
import Cart from "../../assets/images/cart.png";

const Navbar = () => {
  return (
    <nav className="header__menu">
      <div className="menu__search">
        <img className="logo" src={Logo} alt="dnc-logo" />


          <input className="search-bar"
            type="text"
            id="search"
            name="name"
            placeholder="O que você está procurando?"
          />
          <img className="cart" src={Cart} alt="carrinho de compras" />



      </div>

      <div className="menu__nav">
        <ul className="menu__nav__list">
          <li className="menu__nav__list__item">
            <a href="#">Novidades</a>
          </li>
          <li className="menu__nav__list__item">
            <a href="#">Jogos</a>
          </li>
          <li className="menu__nav__list__item">
            <a href="#">Video Games</a>
          </li>
          <li className="menu__nav__list__item">
            <a href="#">Mesas Gamer</a>
          </li>
          <li className="menu__nav__list__item">
            <a href="#">Promoções</a>
          </li>
          <li className="menu__nav__list__item">
            <a href="#">Atendimento</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
