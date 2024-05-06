import colors from "src/colors";
import styled from "styled-components";


export const SelectContainer = styled.div`
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

export const StyledExtra = styled.div`
  color: ${colors.cerulean};
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;