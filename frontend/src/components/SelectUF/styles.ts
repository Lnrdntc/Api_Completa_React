import styled, { css } from "styled-components";

interface IStyledISelect {
  inputSize: "default" | "large";
  className?: string
}

export const StyledSelect = styled.select<IStyledISelect>`

  width: 20%;
  height: 40px;
  border: unset;
  border-radius: 8px;
  font-size: 16px;
  padding: 2px 2px 2px 25px;
  margin: 0px 0px 20px 0px;
  border: 2px solid #ffbb33;

  &:focus,
  &:active {
    border: 0.1rem solid #ffbb33;
  }

  option {
    color: #222;
    align-items: center;
  justify-content: center;
  }

  ${(props) =>
  props.className === 'displayErrors' &&
  css`
    border: 2px solid #FF0000;
  `}
`;
