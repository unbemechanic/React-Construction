import React from 'react'
import { ButtonStyle, Heading, Home3Pic, ImgBuilding, InnerDiv, Paragraphs } from './home-3-style'


const Home3 = () => {
  return (
    <div style={{position:'relative'}}>
         <Home3Pic/>
         <InnerDiv>
         <Heading $h1>Aesthetically pleasing.</Heading>
            <Paragraphs>We have worked on some of the stunning architectural marverls within industries like hotels, residential buildings, offeces, commercial buildings, food & beverage and mmade them great successes.</Paragraphs>
            <ButtonStyle>Learn More</ButtonStyle>
        </InnerDiv>
    </div>
  )
}

export default Home3