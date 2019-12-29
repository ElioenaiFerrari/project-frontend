import React from "react";

import { Container } from "./styles";

import { Input, Button } from "../../../components";
import { addName, addEmail, addRegister } from "../../../actions/users";

export default function Modal(props) {
  return (
    <Container>
      <Input action={addName} width="280px" placeholder="nome" type="text" />
      <Input action={addEmail} width="280px" placeholder="email" type="email" />
      <Input
        action={addRegister}
        width="280px"
        placeholder="matrícula"
        type="text"
        max_length={10}
        min_length={10}
      />
      <Input
        action={addRegister}
        width="280px"
        placeholder="senha"
        type="password"
      />
      <Button
        margin="20px 0 0 0 "
        color="#FFF"
        background="linear-gradient(270deg, #FF6347,	#9932CC)"
        text="Criar conta"
        width="280px"
        font_size="18px"
        type="submit"
      />
      <Button
        margin="5px 0 0 0 "
        color="#9932CC"
        background="lightgray"
        text="Tenho uma conta!"
        width="280px"
        font_size="18px"
        type="button"
      />
    </Container>
  );
}
