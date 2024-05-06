import styled from "styled-components";
import colors from "src/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
  margin-block: 5rem;
  padding-inline: 5rem;
  .video-container {
    padding: 5rem;
  }
  @media only screen and (max-width: 800px) {
    padding: 0;
    margin-block: 1rem;
    flex-direction: column;
    padding-inline: 1.2rem;
    .video-container {
      padding: 0rem;
    }
  }
`;
export const ActionsContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextContainer = styled.div`
height: 100%;
.title{
  color:black;
  font-size: 20px;
  font-weight: 600;
  @media only screen and (max-width: 800px) {
  font-size: 14px;

  }
  @media only screen and (max-width: 400px) {
  font-size: 12px;

  }

}
.description{
  color:black;
  font-size: 12px;
  @media only screen and (max-width: 800px) {
  font-size: 10px;

  }
  
}
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  justify-content: center;
  align-items: start;
  width: 50%;
  @media only screen and (max-width: 800px) {
    height:auto
  }
`;
export const Title = styled.div`
  color: ${colors.darkSapphire};
  font-size: 2.5rem;
  font-weight: 500;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const SubTitle = styled.div`
  color: #565656;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 160%;
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  background-color: #f4f5f7;
  gap: 10rem;
  row-gap: 5rem;
  padding-inline: 10rem;
  width: 100%;
  align-items: center;
  padding-block: 3rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding-inline: 1rem;
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    padding-inline: 1rem;
  }
`;
export const ContentContainer = styled.div`
  padding: 20px;
  height: calc(100vh - 231px);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #f4f5f7;
  .loading{
    height: 400px;
  }
`;
export const CardContainer = styled.div`
  padding: 15px;
  overflow-y: scroll !important;
  height: calc(100vh - 330px) !important;
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 10px;
  grid-row-gap: 12px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #f4f5f7;
`;
export const BikeCard = styled.div`
overflow: hidden;
  padding: 10px;
  height: 200px;
  display: flex;
  flex-direction: row;
  
  img {
  }
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0.8rem #b0e0e6;
    background-color: #6f8bb5;
    transition: background-color 0.8s ease-in-out;
    transform: translateY(-1px) scale3d(1.01, 1.01, 1.01)
      rotate3d(1, 0, 0, 10deg);
  }
flex-wrap: wrap;
  border-radius: 20px;
  background-color: #52719f;

  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div`
overflow: hidden;
border-radius:16px ;
  width: 175px;
  height: 175px;
  @media only screen and (max-width: 800px) {
    width: 100px;
 height: 100px;
  }
  @media only screen and (max-width: 400px) {
    width: 50px;
 height: 50px;
  }
`;

export const FirstContainer = styled.div`
display: flex;
flex-direction: row;
gap: 10px !important;
  @media only screen and (max-width: 400px) {
    
    /* flex-direction: column-reverse; */

  }
`; 
export const StoleData=styled.div`

display: flex;
flex-wrap: wrap;
flex-direction: column;
font-size: 10px;
font-weight: 600;
margin-right: 50px;
@media only screen and (max-width: 800px) {
  margin-right: 0px;

}

.stoleDate{

}

.reportDate{
  
}
.location{


}

`