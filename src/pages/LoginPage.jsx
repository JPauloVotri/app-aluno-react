import { useState } from "react";
import InputField from "../components/InputField";
import SidedPage from "../components/SidedPage";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError("Preencha todos os campos!");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Email Inválido!")
    }

    setError("");
    console.log("Login: ", email, password);
  }
  return <SidedPage
    title="Bem-vindo de volta"
    subtitle="Por favor, insira suas credenciais para acessar seu painel acadêmico"
  >

    <form onSubmit={handleSubmit}>
      <InputField
        label="Endereço de e-mail"
        type="email"
        value={email}
        placeholder="user@email.com"
        onChange={e => setEmail(e.target.value)} />

      <InputField
        label={<>
          Senha
          <a href="#">Esqueceu?</a>
        </>}
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)} />

      {error && <p className="erro">{error}</p>}

      <button type="submit">Entrar</button>
    </form>

    <p class="registro">Não tem conta? <a href="/cadastro-usuario.html">Registre-se agora</a></p>
  </SidedPage>

  return <main>
    <div className="cadastro">
      <form onSubmit={handleSubmit}>
        <InputField
          label="E-mail"
          type="email"
          value={email}
          placeholder="user@email.com"
          onChange={e => setEmail(e.target.value)} />

        <InputField
          label={<>
            Senha
            <a href="#">Esqueceu?</a>
          </>}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />

        {error && <p className="erro">{error}</p>}

        <button type="submit">Entrar</button>
      </form>
    </div>
  </main>
}

export default LoginPage;