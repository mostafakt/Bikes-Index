import colors from "src/colors";
import styled from "styled-components";

interface ButtonContainerProps {
  typecolor: 'primary' | 'secondary';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 1rem;
  padding-inline: 2.3rem;
  display: flex;
  cursor: pointer;
  width: fit-content;
  height: 3rem;
  font-weight: 700;
  font-size: 0.875rem;
  border-radius: 2.5rem;
  border: 1px solid;
  border-color: ${(props) => props?.typecolor === 'primary' ? colors.darkSapphire : colors.darkSapphire};
  background: ${(props) => props?.typecolor === 'primary' ? colors.darkSapphire : colors.white};
  color: ${(props) => props?.typecolor === 'primary' ? colors.white : colors.darkSapphire};
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    color: ${(props) =>
    props?.typecolor === 'primary' ? colors.darkSapphire : colors.white};
    background: ${(props) =>
    props?.typecolor === 'primary' ? colors.cerulean : colors.darkSapphire};
    border-color: ${(props) => props?.typecolor === 'primary' ? colors.cerulean : colors.darkSapphire};
}
@media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    height: 2.5rem;
}
`;
