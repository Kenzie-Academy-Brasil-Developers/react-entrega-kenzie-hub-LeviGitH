import * as yup from "yup";

export const schema = yup
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
