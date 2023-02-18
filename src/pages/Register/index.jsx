import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { StyleRegister } from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { FormDataRegisterContext } from "../../providers/FormDataContext/FormDataRegisterContext";

export const Register = () => {
  const { register, handleSubmit, errors, onSubmit } = useContext(
    FormDataRegisterContext
  );

  return (
    <StyleRegister>
      <div className="register__container">
        <header>
          <img src={Logo} alt="Kenzie Hub Logo" />
          <Link to="/login">
            <button>Voltar</button>
          </Link>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Crie sua conta</h1>
          <h2>Rápido e grátis, vamos nessa</h2>
          <div>
            <label>Nome</label>
            <input
              type="text"
              {...register("username")}
              placeholder="Digite aqui seu nome"
            />
            <p>{errors.username?.message}</p>
          </div>
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
          <div>
            <label>Confirmar Senha</label>
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Digite aqui sua senha"
            />
            <p>{errors.confirmPassword?.message}</p>
          </div>
          <div>
            <label>Bio</label>
            <input
              type="text"
              {...register("bio")}
              placeholder="Fale sobre você"
            />
            <p>{errors.bio?.message}</p>
          </div>
          <div>
            <label>Contato</label>
            <input
              type="text"
              {...register("contact")}
              placeholder="Opção de contato"
            />
            <p>{errors.contact?.message}</p>
          </div>
          <div>
            <label>Selecionar módulo</label>
            <select {...register("module")}>
              <option
                value="Primeiro módulo (Introdução ao Frontend)"
                disabled
                selected
                hidden
              >
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
            <p>{errors.module?.message}</p>
          </div>
          <button type="submit">Cadastrar</button>
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
    </StyleRegister>
  );
};
