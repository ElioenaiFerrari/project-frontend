import styled from "styled-components";

export const Container = styled.div`
  button {
    border: none;
    background: ${props => props.props.background};
    padding: 10px;
    width: ${props => props.props.width};
    color: ${props => props.props.color};
    font-size: ${props => props.props.font_size};
    margin: ${props => props.props.margin};
    border-radius: 2px;
  }
`;
