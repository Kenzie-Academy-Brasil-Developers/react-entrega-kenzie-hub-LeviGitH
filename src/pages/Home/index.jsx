import Logo from "../../assets/Logo.svg";
import ButtonPlus from "../../assets/Button Plus.svg";
import { StyleHome } from "./style";
import { api } from "../../services/api";
import { useContext, useEffect } from "react";

import { Header } from "../../components/Header";
import { ModalCreateTech } from "../../components/Modal(2)/ModalCreateTech";
import { ModalUpdateTech } from "../../components/Modal(2)/ModalUpdateTech";
import { CardTech } from "../../components/CardTech";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";

export const Home = () => {
  const { user, setUser, tech, setTech } = useContext(UserContext);
  const { modalOn, setModalOn, navigate, token } = useContext(TechContext);

  async function loadUser() {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await api.get("/profile", { headers });
      setUser({
        name: response.data.name,
        module: response.data.course_module,
        techs: response.data.techs,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token === null) {
      navigate("/");
    } else {
      loadUser();
    }
  }, []);

  return (
    <div>
      {modalOn.add === "working" ? (
        <ModalCreateTech
          setModalOn={setModalOn}
          modalOn={modalOn}
          token={token}
          loadUser={loadUser}
        />
      ) : null}
      {modalOn.update === "working" ? (
        <ModalUpdateTech
          setModalOn={setModalOn}
          modalOn={modalOn}
          tech={tech}
          token={token}
          loadUser={loadUser}
        />
      ) : null}
      <StyleHome>
        <nav>
          <img src={Logo} alt="Kenzie Hub Logo" />
          <button
            onClick={() => {
              localStorage.clear();
              document.location.reload(true);
            }}
          >
            Sair
          </button>
        </nav>
        <Header name={user.name} module={user.module} />
        {user.techs.length > 0 ? (
          <div className="content__container">
            <div className="content__header">
              <h1>Tecnologias</h1>
              <button
                onClick={() => {
                  setModalOn({ ...modalOn, add: "working" });
                }}
              >
                <img src={ButtonPlus} />
              </button>
            </div>
            <div className="content__main">
              {user.techs.map((element, index) => {
                return (
                  <CardTech
                    index={index}
                    setModalOn={setModalOn}
                    modalOn={modalOn}
                    setTech={setTech}
                    element={element}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="content__container">
            <div className="content__header">
              <h1>Tecnologias</h1>
              <button
                onClick={() => {
                  setModalOn({ ...modalOn, add: "working" });
                }}
              >
                <img src={ButtonPlus} />
              </button>
            </div>
          </div>
        )}
      </StyleHome>
    </div>
  );
};
