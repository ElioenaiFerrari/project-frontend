import React, { useEffect } from "react";

import { Container } from "./styles";

import { addEmail, addPassword } from "../../../actions/users";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { navigate } from "../../../utils";

export default function Modal(props) {
  return (
    <Container>
      <Input action={addEmail} width="280px" placeholder="email" type="email" />
      <Input
        action={addPassword}
        width="280px"
        placeholder="senha"
        type="password"
      />
      <Button
        margin="40px 0 0 0"
        color="#FFF"
        background="linear-gradient(90deg, #FF6347,	#9932CC)"
        text="Entrar"
        width="280px"
        font_size="18px"
        type="submit"
      />
      <Button
        margin="5px 0"
        color="#9932CC"
        background="lightgray"
        text="Criar conta"
        font_size="18px"
        type="button"
        onClick={() => navigate("/sign")}
        width="280px"
      />
      <Button
        margin="5px 0"
        color="gray"
        background="none"
        text="Esqueceu a senha?"
        font_size="13px"
        type="button"
        onClick={() => navigate("/forgot")}
      />
    </Container>
  );
}
