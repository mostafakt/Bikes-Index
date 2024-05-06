import styled from 'styled-components';
import colors from 'src/colors';

export const Page = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
.carousel-root {
  width: 80%;
  height: 100%;
  /* max-height: 380px; */
  direction: ltr;
  img {
    height: 350px;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16 / 9;
  }
  .slide {
    height: 350px;
  }
  @media only screen and (max-width: 600px) {
    img {
    height: 150px;
    width: 100%;
    object-fit: contain;
    aspect-ratio: 16 / 9;
  }
  .slide {
    height: 150px;
  }
  }
}
.carousel-slider {
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
}
.carousel .control-dots {
  position: relative;
}
.slider-wrapper{
  height: 100%;
}
.carousel .control-dots .dot {
  box-shadow: unset;
  background-color: ${colors.gray60};
}
.carousel .control-dots .dot.selected {
  box-shadow: unset;
  background-color: ${colors.cerulean};
}
`;