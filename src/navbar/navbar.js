import React from 'react'
import { ButtonStyle, MainDiv, StyledAnchor, StyledButton } from './style'

const Navbar = () => {
  return (
    <MainDiv>
        <div></div>
        <StyledButton>
            <StyledAnchor href=''>Home</StyledAnchor>
            <StyledAnchor href=''>About</StyledAnchor>
            <StyledAnchor href=''>Contact</StyledAnchor>
            <StyledAnchor href=''>Services</StyledAnchor>
            <ButtonStyle>Get A Quote</ButtonStyle>
            
        </StyledButton>
    
    </MainDiv>
  )
}

export default Navbar