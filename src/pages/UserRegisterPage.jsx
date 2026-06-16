import { useState } from "react";
import InputField from "../components/InputField";
import SidedPage from "../components/SidedPage";

function UserRegisterPage() {
  const [cpf, useCpf] = useState("");

  return <SidedPage
    title="Cadastre-se"
    subtitle="Passo 1 de 2. Por favor, insira seu cpf para prosseguir."
  >
    <InputField label="CPF" value={cpf} placeholder="000.000.000-00" />

    <a href="#">Prosseguir</a>
  </SidedPage>
}

export default UserRegisterPage;