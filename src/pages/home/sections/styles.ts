import styled from 'styled-components';
import colors from 'src/colors';


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
` ;
export const ActionsContainer=styled.div`
padding-left:15px;
padding-right:15px;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
flex-direction: row;
justify-content: space-between;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: start;
  width: 50%;
  @media only screen and (max-width: 800px) {
    width: 100%;
    gap: 0.5rem;
  }
`;
export const Title = styled.div`
  color: ${colors.darkSapphire};
  font-size: 2.5rem;
  font-weight: 500;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`
export const SubTitle = styled.div`
  color: #565656;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 160%;
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
}
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  background-color: #F4F5F7;
  gap: 10rem;
  row-gap: 5rem;
  padding-inline:10rem;
  width: 100%;
  align-items: center;
  padding-block: 3rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding-inline:1rem;
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    padding-inline:1rem;
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
background: #F4F5F7; 
`;
export const CardContainer = styled.div`
padding: 15px;
overflow-y:scroll !important;
height: calc(100vh - 330px) !important;
display: grid;
grid-template-columns: 1fr;
grid-row-gap: 12px;
width: 100%;
align-items: center;
justify-content: center;
background: #F4F5F7; 
`;
export const BikeCard = styled.div`
padding: 10px;
height: 200px;
img {

  
}
cursor: pointer;
&:hover{
  box-shadow: 0 0 0.8rem #B0E0E6;
  background-color: #6f8bb5;
  transition: background-color 0.8s ease-in-out;
  transform: translateY(-1px) scale3d(1.01, 1.01, 1.01)  rotate3d(1,0 , 0, 10deg);
}

 border-radius:20px;
 background-color: #52719f;
direction: flex;
flex-direction:  row;
justify-content: space-between;

`