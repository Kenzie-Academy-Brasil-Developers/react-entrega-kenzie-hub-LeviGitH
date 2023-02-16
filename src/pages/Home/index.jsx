import Logo from "../../assets/Logo.svg";
import ButtonPlus from "../../assets/Button Plus.svg";
import { StyleHome } from "./style";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";

export const Home = () => {
  const [user, setUser] = useState({ name: "", module: "", techs: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token === null) {
      navigate("/login");
    } else {
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
      loadUser();
    }
  }, []);
  return (
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
            <button>
              <img src={ButtonPlus} />
            </button>
          </div>
          <div className="content__main">
            <h1>Tem tec</h1>
          </div>
        </div>
      ) : (
        <div className="content__container">
          <div className="content__header">
            <h1>Tecnologias</h1>
            <button>
              <img src={ButtonPlus} />
            </button>
          </div>
          <div className="content__main">
            <h1>Não tem tec</h1>
          </div>
        </div>
      )}
    </StyleHome>
  );
};
