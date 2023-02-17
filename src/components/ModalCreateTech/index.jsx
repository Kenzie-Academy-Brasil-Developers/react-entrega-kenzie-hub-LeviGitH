import ButtonModal from "../../assets/Button Modal.svg";
import { StyleModalHome } from "./style";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

export const ModalCreateTech = ({ setModalOn, modalOn, token, loadUser }) => {
  const schema = yup
    .object({
      title: yup.string().required("Nome é obrigatório!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const createTech = async (data) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await api.post("/users/techs", data, { headers });
      loadUser();
      setModalOn({ ...modalOn, add: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyleModalHome open>
      <div className="modal__container">
        <div className="modal__header">
          <h1>Cadastrar Tecnologia</h1>
          <button
            onClick={() => {
              setModalOn({ ...modalOn, add: "" });
            }}
          >
            <img src={ButtonModal} />
          </button>
        </div>
        <form className="modal__main" onSubmit={handleSubmit(createTech)}>
          <div>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite um nome"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>
          </div>
          <div>
            <label>Selecionar status</label>
            <select {...register("status")}>
              <option value="Iniciante" disabled selected hidden>
                Iniciante
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyleModalHome>
  );
};
