import "./index.scss";
import Logo from "../../assets/images/dnc-logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../assets/images/cart.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src={Logo} width="100px" />
      </a>
      
      <input
          className="search-bar"
          type="text"
          id="search"
          name="name"
          placeholder="O que você está procurando?"
        />
        <Link to={`/empty-cart`}>
          <img className="cart" src={Cart} alt="carrinho de compras" />
        </Link>
      

      <button className="menu-toggle" onClick={toggleMenu}>
        <span className={isOpen ? "bar bar-1 active" : "bar bar-1"}></span>
        <span className={isOpen ? "bar bar-2 active" : "bar bar-2"}></span>
        <span className={isOpen ? "bar bar-3 active" : "bar bar-3"}></span>
      </button>

      <div className={isOpen ? "menu-nav menu-nav-active" : "menu-nav"}>
      
        
        <div className={isOpen ? "menu-nav menu-nav-active" : "menu-nav"}>
          <a href="/" className="nav-link">
            Novidades
          </a>
          <a href="/servicos" className="nav-link">
            Jogos
          </a>
          <a href="/contato" className="nav-link">
            Video Game
          </a>
          <a href="" className="nav-link">
            Mesas Game
          </a>
          <a href="" className="nav-link">
            Promoções
          </a>
          <a href="" className="nav-link">
            Atendimento
          </a>
        </div>



      </div>
    </nav>
  );
}

export default Navbar;



// import "./index.scss";
// import Logo from "../../assets/images/dnc-logo.png";
// import Cart from "../../assets/images/cart.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="header__menu">
//       <div className="menu__search">
//         <Link to={`/home`}>
//           <img className="logo" src={Logo} alt="dnc-logo" />
//         </Link>

//         <input
//           className="search-bar"
//           type="text"
//           id="search"
//           name="name"
//           placeholder="O que você está procurando?"
//         />
//         <Link to={`/empty-cart`}>
//           <img className="cart" src={Cart} alt="carrinho de compras" />
//         </Link>
//       </div>

//       <div className="menu__nav">
//         <ul className="menu__nav__list">
//           <li className="menu__nav__list__item">
//             <a href="#">Novidades</a>
//           </li>
//           <li className="menu__nav__list__item">
//             <a href="#">Jogos</a>
//           </li>
//           <li className="menu__nav__list__item">
//             <a href="#">Video Games</a>
//           </li>
//           <li className="menu__nav__list__item">
//             <a href="#">Mesas Gamer</a>
//           </li>
//           <li className="menu__nav__list__item">
//             <a href="#">Promoções</a>
//           </li>
//           <li className="menu__nav__list__item">
//             <a href="#">Atendimento</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


