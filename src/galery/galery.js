import React from 'react'
import { Background, Heading, MainDiv, TopSec } from './galery-style'

const Galery = () => {
  return (
    <MainDiv>
        <TopSec>
            <div>
            <Heading $h1>Our Gallery</Heading>
            <Heading $quality>- Quality design at the fairest price</Heading>
            </div>
            <div style={{width:'288px', textAlign:'left'}}>
            Buildmax Limited is a professional building, renovation and refurbishment company.
            </div>
        </TopSec>
        <Background></Background>
    </MainDiv>
  )
}

export default Galery