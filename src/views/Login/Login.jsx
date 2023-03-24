import { Link } from 'react-router-dom';
import Logo from '../../assets/images/dnc-logo.png'
import "./index.scss";

const Login = () => {
  return (
    <>
      <nav className='nav-login'>
        <img className='nav-logo' src={Logo} alt='logotipo da DNC Store' />
      </nav>
      <section className='login-info'>
        <h1 className='login-title'>Acesse com seu login ou cadastre-se!</h1>
        <h2 className='login-subtitle'>você pode entrar com o seu CPF</h2>

        <form className='login-form'>
          <label className='label-form'>Digite seu CPF:</label>
          <div className='input-form'>
            <input className='input-field' type='text' name='cpf' id='cpf' placeholder='000.000.000-00' />
          </div>
          <label className='label-form'>Senha:</label>
          <div className='input-form'>
            <input className='input-field' type='password' name='password' id='password' placeholder='***************' />
          </div>
          <Link to={`/home`}><button className='btn-login'>Entrar</button></Link>
        </form>
      </section>
    </>
  )
}

export default Login