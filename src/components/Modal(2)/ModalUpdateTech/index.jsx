import ButtonModal from "../../../assets/Button Modal.svg";
import { StyleModal } from "../style";
import { useForm } from "react-hook-form";
import { api } from "../../../services/api";

export const ModalUpdateTech = ({
  setModalOn,
  modalOn,
  tech,
  token,
  loadUser,
}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await api.put(`/users/techs/${tech.id}`, data, {
        headers,
      });
      loadUser();
      setModalOn({ ...modalOn, update: "" });
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteTech() {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await api.delete(`/users/techs/${tech.id}`, { headers });
      loadUser();
      setModalOn({ ...modalOn, update: "" });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyleModal open>
      <div className="modal__container">
        <div className="modal__header">
          <h1>Tecnologia Detalhes</h1>
          <button
            onClick={() => {
              setModalOn({ ...modalOn, update: "" });
            }}
          >
            <img src={ButtonModal} />
          </button>
        </div>
        <form className="modal__main" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nome do projeto</label>
            <input type="text" placeholder={tech.title} disabled />
          </div>
          <div>
            <label>Status</label>
            <select {...register("status")}>
              <option value={tech.status} disabled selected hidden>
                {tech.status}
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <div className="modal__button--update">
            <button type="submit">Salvar alterações</button>
            <button
              id="button__delete"
              type="button"
              onClick={() => {
                deleteTech();
              }}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyleModal>
  );
};
