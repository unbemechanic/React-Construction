import React from 'react'
import { Buttons, CenterDiv, MainDiv, MiddleDiv, Paragraphs, ServiceTitle } from './latest-style'

const Latest = () => {
  return (
    <MainDiv>
        <div>
            <ServiceTitle $Title>Our Latest Projects</ServiceTitle>
        </div>
        <MiddleDiv>
            <CenterDiv $first>
              <Buttons>Lawyers Hub <br/> kenya</Buttons>
            </CenterDiv>
            <CenterDiv $second>
            <Buttons>E.A.C <br/> Arusha</Buttons>
            </CenterDiv>
            <CenterDiv $third>
            <Buttons>Transnational <br/> Bank</Buttons>
            </CenterDiv>
        </MiddleDiv>
    </MainDiv>
  )
}

export default Latest