import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { StyleLogin } from "./style";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const loginUser = (data) => {
    console.log(data);
  };
  console.log(loginUser);

  return (
    <StyleLogin>
      <div className="login__container">
        <img src={Logo} alt="Kenzie Hub Logo" />
        <form onSubmit={handleSubmit(loginUser)}>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Digite aqui seu email"
            />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Digite aqui sua senha"
            />
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
    </StyleLogin>
  );
};
