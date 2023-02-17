import Logo from "../../assets/Logo.svg";
import ButtonPlus from "../../assets/Button Plus.svg";
import { StyleHome } from "./style";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { ModalCreateTech } from "../../components/ModalCreateTech";
import { ModalUpdateTech } from "../../components/ModalUpdateTech";

export const Home = () => {
  const [user, setUser] = useState({ name: "", module: "", techs: [] });
  const [tech, setTech] = useState("");
  const [modalOn, setModalOn] = useState({ add: "", update: "" });
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

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
      navigate("/login");
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
                  <button
                    key={index}
                    onClick={() => {
                      setModalOn({ ...modalOn, update: "working" });
                      setTech(element);
                    }}
                  >
                    <h1>{element.title}</h1>
                    <h2>{element.status}</h2>
                  </button>
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
