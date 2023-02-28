import { createContext } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const FormDataLoginContext = createContext();

export const FormDataLoginProvider = ({ children }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
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
    <FormDataLoginContext.Provider
      value={{ register, handleSubmit, errors, onSubmit, navigate }}
    >
      {children}
    </FormDataLoginContext.Provider>
  );
};
