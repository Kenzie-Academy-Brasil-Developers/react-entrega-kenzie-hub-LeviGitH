import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { StyleRegister } from "./style";

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const registerUser = (data) => {
    console.log(data);
  };

  return (
    <StyleRegister>
      <div className="register__container">
        <header>
          <img src={Logo} alt="Kenzie Hub Logo" />
          <Link to="/login">
            <button>Voltar</button>
          </Link>
        </header>
        <form onSubmit={handleSubmit(registerUser)}>
          <h1>Crie sua conta</h1>
          <h2>Rápido e grátis, vamos nessa</h2>
          <div>
            <label>Nome</label>
            <input
              type="text"
              {...register("username")}
              placeholder="Digite aqui seu nome"
            />
          </div>
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
          <div>
            <label>Confirmar Senha</label>
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Digite aqui sua senha"
            />
          </div>
          <div>
            <label>Bio</label>
            <input
              type="text"
              {...register("bio")}
              placeholder="Fale sobre você"
            />
          </div>
          <div>
            <label>Contato</label>
            <input
              type="text"
              {...register("contact")}
              placeholder="Opção de contato"
            />
          </div>
          <div>
            <label>Selecionar módulo</label>
            <select {...register("module")}>
              <option value="" disabled selected>
                Primeiro Módulo
              </option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </StyleRegister>
  );
};
