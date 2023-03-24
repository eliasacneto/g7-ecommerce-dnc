import "./index.scss";
import logoFooter from "../../assets/images/logo_dnc_footer.png";

const Footer = () => {
  return (
    <section className="section-footer">
      <img src={logoFooter} alt="logo" className="logo" />
      <div className="footer-info">
        <p className="footer-text">
          Preços e condições de pagamento exclusivos para compras via internet e
          podem variar nas lojas físicas.</p>
        <p className="footer-text">
          <span className="more-info"> Para mais informações</span>, entre em contato: (011)
          1111-2222
        </p>

      </div>
    </section>
  );
};

export default Footer;
