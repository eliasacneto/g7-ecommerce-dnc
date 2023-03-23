import React from 'react'
import "./index.scss";
import logoFooter from "../../assets/images/logo_dnc_footer.png"

const Footer = () => {
  return (
    <section className='section-footer'>
      <img src={logoFooter} alt="logo" className="logo" />
      <p>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas. <br />
        <strong> Para mais informações</strong>, entre em contato: (011) 1111-2222</p>
    </section>
  )
}

export default Footer;