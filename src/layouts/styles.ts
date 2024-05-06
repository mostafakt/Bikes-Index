import styled from "styled-components";
import colors from "src/colors";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    align-items: center;
    justify-content: start;
  }
`;

export const FirstPart = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;
export const SecondPart = styled.div`
  background-image: url("./auth.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const StyledImg = styled.div`
  max-width: 70%;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const RightsText = styled.div`
  color: ${colors.white};
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.9375rem;
  font-weight: 600;
`;
export const StyledArrow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
`;

export const MainPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  position: relative;
  .outletContainer {
    /* padding-inline: 5rem; */
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    align-items: center;
    justify-content: start;
    .outletContainer {
      /* padding-inline: 1.2rem; */
    }
  }
`;
