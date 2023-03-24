import React from 'react';
import '../Navbar/navbar.scss';
import Logo from '../../assets/images/dnc-logo.png';
import Cart from '../../assets/images/cart.png';
import Search  from '../../assets/images/search.png';
import Menu from '../../assets/images/menu.png';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav">
            <img className='logo' src={Logo} alt="" />
            
          <div className='navbar__search'>
            <img className='navbar__img' src={Search} alt="" />
            <input className='input' type="text" placeholder='O que você está procurando?'/>

          </div>
            
            
            <a href=""><img className='cart' src={Cart} alt="" /></a>
            
        </div>

        <div id='itens' className='list'>
            <ul>
                <li><a href="">Novidades</a></li>
                <li><a href="">Jogos</a></li>
                <li><a href="">Video Games</a></li>
                <li><a href="">Mesas Gamer</a></li>
                <li><a href="">Promoções</a></li>
                <li><a href="https://www.google.com.br">Atendimento</a></li>
            </ul>
        </div>
      </div>
  )
}

export default Navbar