import styled, { css } from "styled-components";

interface IMyButtonProps {
  size: "default" | "small";
  variant: "primary" | "secondary";
}

export const StyledButton = styled.button<IMyButtonProps>`
  background-color: #222;

  width: 5rem;
  height: 5.2rem;
  margin: 4px 10px;

  border: 2px solid #ffbb33;
  padding: 3,5px 5px 5px 5px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
  
  > span {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
  }

  ${(props) =>
    props.size === "small" &&
    css`
      height: 2rem;
      > span {
        font-size: 1rem;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: transparent;
      color: #ffffff;
      border: 0.2rem solid #222;
      > span {
        color: #fff;
      }
    `}
`;
