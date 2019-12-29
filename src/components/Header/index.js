import React from "react";
import logo from "../../assets/images/light_logo.png";

import { Container } from "./styles";

export default function Header(props) {
  return (
    <Container>
      <img
        src={logo}
        alt="Teach Now!"
        onClick={() => (window.location.href = "/")}
      />
    </Container>
  );
}
