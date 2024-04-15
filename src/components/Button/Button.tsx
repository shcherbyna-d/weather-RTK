import { ButtonHTMLAttributes, memo } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding: 0px 15px;
  font-size: 15px;
  outline: transparent;
  background-color: black;
  color: white;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: darkgrey;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  const { ...rest } = props;

  return <StyledButton {...rest} />;
};

export default memo(Button);
