import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { StyleRegister } from "./style";

import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    bio: yup.string().required("A bio é obrigatória"),
    contact: yup.string().required("O contato é obrigatório"),
    email: yup.string().required("O email é obrigatório"),
    username: yup.string().required("O nome é obrigatório"),
    password: yup
      .string()
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 carácter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      )
      .required("Confirmação de senha é obrigatória"),
  })
  .required();

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const registerUser = async ({
    bio,
    contact,
    email,
    module,
    password,
    username,
  }) => {
    const obj = {
      email: email,
      password: password,
      name: username,
      bio: bio,
      contact: contact,
      course_module: module,
    };
    try {
      const response = await api.post("/users", obj);
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
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
