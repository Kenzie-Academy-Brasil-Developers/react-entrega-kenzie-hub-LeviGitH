import Logo from "../../assets/Logo.svg";

export const Register = () => {
  return (
    <main>
      <div>
        <header>
          <img src={Logo} alt="Kenzie Hub Logo" />
          <button>Voltar</button>
        </header>
        <form>
          <h1>Crie sua conta</h1>
          <h2>Rápido e grátis, vamos nessa</h2>
          <div>
            <label>Nome</label>
            <input type="text" placeholder="Digite aqui seu nome" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Digite aqui seu email" />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder="Digite aqui sua senha" />
          </div>
          <div>
            <label>Confirmar Senha</label>
            <input type="password" placeholder="Digite aqui sua senha" />
          </div>
          <div>
            <label>Bio</label>
            <input type="text" placeholder="Fale sobre você" />
          </div>
          <div>
            <label>Contato</label>
            <input type="text" placeholder="Opção de contato" />
          </div>
          <div>
            <label>Selecionar módulo</label>
            <select>
              <option value="" disabled selected>
                Primeiro Módulo
              </option>
            </select>
          </div>
          <button>Cadastrar</button>
        </form>
      </div>
    </main>
  );
};
