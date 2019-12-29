import React from "react";

import { Container } from "./styles";

export default function Button(props) {
  return (
    <Container props={props}>
      <button id={props.id} onClick={props.onClick} type={props.type}>
        {props.text}
      </button>
    </Container>
  );
}
