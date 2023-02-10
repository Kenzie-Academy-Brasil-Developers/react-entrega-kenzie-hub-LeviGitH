import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { StyleLogin } from "./style";

export const Login = () => {
  return (
    <StyleLogin>
      <div className="login__container">
        <img src={Logo} alt="Kenzie Hub Logo" />
        <form>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Digite aqui seu email" />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder="Digite aqui sua senha" />
          </div>
          <button>Entrar</button>
          <div>
            <Link to="/cadastro">
              <span>Ainda não possui uma conta?</span>
            </Link>
            <button>Cadastre-se</button>
          </div>
        </form>
      </div>
    </StyleLogin>
  );
};
