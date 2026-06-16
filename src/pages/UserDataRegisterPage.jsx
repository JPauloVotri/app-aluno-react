import { useState } from "react";
import InputField from "../components/InputField";
import SidedPage from "../components/SidedPage";

function UserDataRegisterPage() {
  const [name, useName] = useState("");
  const [phone, usePhone] = useState("");
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");

  return <SidedPage
    title="Cadastre-se"
    subtitle="Passo 2 de 2. Por favor, insira os dados para finalizar."
  >
    <form>
      <InputField label="Nome" value={name} placeholder="Digite seu nome completo" />
      <InputField label="Telefone" type="tel" value={phone} placeholder="(99) 99999-9999" />
      <InputField label="E-mail" type="email" value={email} placeholder="user@email.com" />
      <InputField label="Senha" type="password" value={password} />

      <button type="submit">Cadastrar</button>
    </form>
  </SidedPage>
}

export default UserDataRegisterPage;