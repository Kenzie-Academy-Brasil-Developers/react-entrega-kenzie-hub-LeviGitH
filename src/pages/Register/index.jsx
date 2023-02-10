import Logo from "../../assets/Logo.svg";

export const Register = () => {
  return (
    <main>
      <div>
        <header>
          <img src={Logo} alt="Kenzie Hub Logo" />
          <button>Voltar</button>
        </header>
        <form action="">
          <h1>Crie sua conta</h1>
          <h2>Rápido e grátis, vamos nessa</h2>
          <div>
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Digite aqui seu nome" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Digite aqui seu email" />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Digite aqui sua senha" />
          </div>
          <div>
            <label htmlFor="">Confirmar Senha</label>
            <input type="password" placeholder="Digite aqui sua senha" />
          </div>
          <div>
            <label htmlFor="">Bio</label>
            <input type="text" placeholder="Fale sobre você" />
          </div>
          <div>
            <label htmlFor="">Contato</label>
            <input type="text" placeholder="Opção de contato" />
          </div>
          <div>
            <label htmlFor="">Selecionar módulo</label>
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
