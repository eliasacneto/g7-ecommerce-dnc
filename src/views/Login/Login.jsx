import { Link } from "react-router-dom";
import Logo from "../../assets/images/dnc-logo.png";
import "./index.scss";
import { useState } from "react";
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom';

import { IMaskInput } from "react-imask";


const Login = () => {
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({
    userCPF: null,
    userPassword: null,
  });

  const formValidation = () => {
    if (CPF === "") {
      setErrors((errors) => {
        const clone = { ...errors };
        Swal.fire({
          icon: 'warning',
          title: 'Ops...',
          text: 'Verifique se todos os campos foram preenchidos!'
        })
        return clone;
      });
      return false;
    } else
      setErrors((errors) => {
        const clone = { ...errors };
        clone.userCPF = null;
        return clone;
      });

    if (password === "") {
      console.log(1);
      setErrors((errors) => {
        const clone = { ...errors };
        Swal.fire({
          icon: 'warning',
          title: 'Ops...',
          text: 'Verifique se todos os campos foram preenchidos!'
        })
        return clone;
      });
      return false;
    } else
      setErrors((errors) => {
        const clone = { ...errors };
        clone.userPassword = null;
        return clone;
      });

    setMsg("");
    // alert(msg)
    return true;
  };
  const navigate = useNavigate();
  const Alert = (event) => {
    event.preventDefault();
    if (formValidation()) navigate('/home');

   

  
  };

  return (
    <>
      <nav className="nav-login">
        <img className="nav-logo" src={Logo} alt="logotipo da DNC Store" />
      </nav>
      <section className="login-info">
        <h1 className="login-title">Acesse com seu login ou cadastre-se!</h1>
        <h2 className="login-subtitle">você pode entrar com o seu CPF</h2>

        <form className="login-form" onSubmit={Alert}>
          <label className="label-form">Digite seu CPF:</label>
          <div className="input-form">

          <IMaskInput
          className="input-field"
          name="cpf"
          id="cpf"
          mask="000.000.000-00"
          placeholder="000.000.000-00"
          value={CPF}
          onChange={(e) => {
            setCPF(e.target.value);
  }}
/>

            {/* <input
              className="input-field"
              type="number"
              name="cpf"
              id="cpf"
              placeholder="000.000.000-00"
              value={CPF}
              onChange={(e) => {
                setCPF(e.target.value);
              }}
            /> */}

            {errors.userCPF && (
              <span className="warning">{errors.userCPF}</span>
            )}
          </div>
          <label className="label-form">Senha:</label>
          <div className="input-form">
            <input
              className="input-field"
              type="password"
              name="password"
              id="password"
              placeholder="***************"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errors.userPassword && (
              <span className="warning">{errors.userPassword}</span>
            )}
          </div>
          <button className='btn-login' type={"submit"}>Entrar</button>
        </form>
      </section>
    </>
  );
};

export default Login;
