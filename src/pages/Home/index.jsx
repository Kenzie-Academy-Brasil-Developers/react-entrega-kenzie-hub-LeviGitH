import Logo from "../../assets/Logo.svg";
import { StyleHome } from "./style";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";

export const Home = () => {
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
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
          setName(response.data.name);
          setModule(response.data.course_module);
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
      <Header name={name} module={module} />
      <div></div>
    </StyleHome>
  );
};
