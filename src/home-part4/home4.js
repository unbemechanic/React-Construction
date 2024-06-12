import React from 'react'
import { ButtonStyle, Heading, Home4Pic, InnerDiv, InnerDiv2, Paragraphs } from './home-4'

const Home4 = () => {
  return (
    <div style={{position:'relative'}}>
         
            <InnerDiv>
            <InnerDiv2>
            <Heading $h1>Great work Ethics.</Heading>
                <Paragraphs>We have worked on some of the stunning architectural marverls within industries like hotels, residential buildings, offeces, commercial buildings, food & beverage and mmade them great successes.</Paragraphs>
                <ButtonStyle>Learn More</ButtonStyle>
            </InnerDiv2>
            
            </InnerDiv>
         
         
        <Home4Pic/>
    </div>
  )
}

export default Home4