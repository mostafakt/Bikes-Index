
import {
  HeaderContainer, 
  ImageContainer, 
} from "./styles";
import React from "react"; 

const Header = () => {

  return (
    <HeaderContainer>
     
      <ImageContainer >
        <img src="https://bikeindex.org/assets/revised/logo-b5b90b10f3084a33e26097ffff6528ca15766eaeb008c5a6d0e242605ccad3b8.svg" />
      </ImageContainer>
    </HeaderContainer>
  );
};

export default Header;
