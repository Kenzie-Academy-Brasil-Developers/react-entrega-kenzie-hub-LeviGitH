import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { StyleLogin } from "./style";

import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../components/Button";

const schema = yup
  .object({
    email: yup.string().required("O email é obrigatório"),
    password: yup
      .string()
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 carácter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
  })
  .required();

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/home");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

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
              <Button />
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
