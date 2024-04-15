import React, { InputHTMLAttributes, memo } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1.2px solid #d3d8dc;
  border-radius: 6px;
  padding: 0px 12px;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  outline: transparent;
  transition: border-color 0.2s;

  &.error {
    border-color: #ff0000af;
  }

  &::placeholder {
    color: #a1abb5;
  }
`;

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { ...rest } = props;

    return <Input ref={ref} {...rest} />;
  }
);

export default memo(TextInput);
