import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { StyleLogin } from "./style";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { FormDataLoginContext } from "../../providers/FormDataContext/FormDataLoginContext";

export const Login = () => {
  const { register, handleSubmit, errors, onSubmit } =
    useContext(FormDataLoginContext);

  return (
    <StyleLogin>
      <div className="login__container">
        <img src={Logo} alt="Kenzie Hub Logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Digite aqui seu email"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Digite aqui sua senha"
            />
            <p>{errors.password?.message}</p>
          </div>
          <button type="submit">Entrar</button>
          <div>
            <span>Ainda não possui uma conta?</span>
            <Link to="/cadastro">
              <button>Cadastre-se</button>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </StyleLogin>
  );
};
