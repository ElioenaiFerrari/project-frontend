import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    display: flex;
    justify-self: flex-start;
    align-self: flex-start;
    font-weight: 600;
    color: gray;
    text-transform: uppercase;
    font-size: 12px;
  }

  input {
    padding: 10px;
    color: gray;
    border: none;
    border-bottom: 1px solid lightgray;
    background: none;
    text-transform: lowercase;
    border-radius: 2px;
    width: ${props => props.props.width};
  }
`;
