import styled from 'styled-components';
import colors from 'src/colors';

export const CardContainer = styled.div`
  border-radius: 1rem;
  background: ${colors?.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 30rem;
  height: 15rem;
  button {
    align-self: center;
  }

`;

export const Title = styled.div`
  color: ${colors?.darkSapphire};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
export const SubTitle = styled.div`
  color: ${colors?.grayCard};
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 150%;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  overflow: hidden;
  /* max-height: 70%; */
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    /* aspect-ratio: 16/9; */
  }

`;

export const GrayTitles = styled.div`
  color: ${colors?.grayCard};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 150%;
`