import styled, { css } from "styled-components";

interface IStyledInput {
  inputSize: "default" | "large";
  className?: string;
}

export const StyledInput = styled.input<IStyledInput>`

  margin: auto;
  width: 50%;
  height: 40px;
  border: unset;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 2px solid #ffbb33;
  display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 25px 20px;

  &:focus,
  &:active {
    border: 2px solid #342a9b;
  }

  ${(props) =>
    props.inputSize === "large" &&
    css`
      height: 6rem;
      font-size: 16px;
      flex-wrap: wrap;
      margin: auto;
      align-items: center;
    `}

  ${(props) =>
  props.className === 'displayErrors' &&
  css`
    border: 2px solid #FF4840;
    margin-bottom: auto;
    align-items: center;
  `}
`;

