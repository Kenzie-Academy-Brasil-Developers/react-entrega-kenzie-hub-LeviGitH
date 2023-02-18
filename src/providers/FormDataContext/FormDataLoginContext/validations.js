import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  })
  .required();
