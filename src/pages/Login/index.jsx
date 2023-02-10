import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { StyleLogin } from "./style";

export const Login = () => {
  return (
    <StyleLogin>
      <div>
        <img src={Logo} alt="Kenzie Hub Logo" />
        <form>
          <h1>Login</h1>
          <div>
            <label htmlFor=""></label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="password" />
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
