import React from "react";

import { Container } from "./styles";
import { useDispatch } from "react-redux";

export default function Input(props) {
  const dispatch = useDispatch();

  return (
    <Container props={props}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onBlur={e => dispatch(props.action(e.target.value))}
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
        maxLength={props.max_length}
        minLength={props.min_length}
      />
    </Container>
  );
}
