import React from "react";
import { ButtonContainer } from "./styles";

type IButtonIconProps = {
  label: string;
  onClick: () => void;
  type?: 'primary' | 'secondary';
  isDisabled?: boolean;
};

const Button = ({ label, onClick, type = 'primary', isDisabled = false }: IButtonIconProps) => {


  return (
    <ButtonContainer
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      typecolor={type}
    >
      {label}
    </ButtonContainer>
  );
};

export default Button;
