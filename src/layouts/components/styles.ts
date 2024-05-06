import colors from "../../colors";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-inline: 5rem;
  justify-content: center;
  background-color: ${colors.black};
  height: 100%;
  backdrop-filter: blur(12px);
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 600px) {
    padding: 1.2rem;
    flex-wrap: wrap;
    height: 100%;
  }
`;

export const ImageContainer = styled.div`
  padding: 2rem;
  display: flex;

  height: 100%;
  align-items: center;
  justify-content: center;
  img {
    max-width: 50%;
    width: 90px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0rem;
    justify-content: start;
    img {
      max-width: 50%;
    }
  }
`;

export const Container = styled.div<{ isend: string }>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: ${(props) =>
    props?.isend === "true" ? "flex-end" : "flex-start"};
  flex-wrap: wrap;
  img {
    height: 20px;
    width: 20px;
  }
  @media only screen and (max-width: 600px) {
    align-items: center;
    justify-content: space-between;
  }
`;
export const ContactText = styled.div`
  color: ${colors.darkSapphire};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  direction: ltr;
  cursor: pointer;
  &:hover {
    color: ${colors.cerulean};
  }
`;

export const BreadCrumbsText = styled.div<{ color?: string }>`
  color: ${(props) => (props.color ? colors.cerulean : colors.darkgray)};
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;
`;

export const FooterContainer = styled.div`
color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-inline: 5rem;
  padding-top: 2rem;
  padding-bottom: 0rem;
  background-color: ${colors.gray900};
  min-height: fit-content;
  gap: 2rem;

  @media only screen and (max-width: 600px) {
    padding: 1.2rem;
    padding-bottom: 0rem;
  }
`;
export const FooterFirstSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSecondSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0px -1px 0px 0px #243752;
  padding-block: 2rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  .phone {
    direction: ltr;
    align-self: end;
  }
  @media only screen and (max-width: 600px) {
    gap: 0rem;
    .phone {
      align-self: start;
    }
  }
`;

export const FooterSectionText = styled.div`
  color: ${colors.gray400};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  max-width: 22rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    max-width: 100%;
  }
`;
export const FooterImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: start;
  img {
    width: 20%;
  }
`;

export const FooterEmailText = styled.div`
  color: ${colors.white};
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  align-self: end;
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    align-self: start;
    line-height: unset;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  cursor: pointer;
  img {
    width: 80%;
    height: 80%;
  }
`;

export const FooterRightsText = styled.div`
  color: ${colors.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2rem;
  justify-self: end;
  line-height: 1.5rem;
  direction: ltr;
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    justify-self: start;
  }
`;
