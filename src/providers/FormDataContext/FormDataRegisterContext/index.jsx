import { createContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const FormDataRegisterContext = createContext();

export const FormDataRegisterProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async ({
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
    <FormDataRegisterContext.Provider
      value={{ register, handleSubmit, errors, onSubmit }}
    >
      {children}
    </FormDataRegisterContext.Provider>
  );
};
