import colors from "src/colors";
import styled from "styled-components";

export const InputField = styled.input`
  border: 1px solid ${colors.gainsboro};
  box-shadow: none;
  font-size: 0.875rem;
  border-radius: 0.625rem;
  font-style: normal;
  outline: medium none;
  padding: 0.6rem;
  width: 100%;
  height: 2.9375rem;
  flex-shrink: 0;
  color: ${colors.gray4};
  &:disabled {
    background-color: ${colors.solitude};
    color: ${colors.gray4};
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
}
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  width: 100%;

  label {
    display: inline-block;
    font-style: normal;
    color: ${colors.gray4};
    font-size: 0.875rem;
    font-weight: 600;

  }
  .required:after {
    color: #f00;
    content: "*";
    padding-inline-start: 5px;
  }
  span {
    color: #f00;
    display: inline-block;
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 600px) {
    label {
      font-size: 0.7rem;
    }
  }
`;