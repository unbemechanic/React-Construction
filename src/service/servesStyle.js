import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const MiddleDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

export const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 213px;
    height: 262px;
    
`
export const ServiceTitle = styled.h3`
    margin-top: ${(props)=>props.$Title ?  '100' :  '50'}px;

    margin-bottom: ${(props)=>props.$Title ?  '70px' : '20px'};

    font-size: ${(props)=>props.$Title ? "30" : "18"}px;
    color: #534847;


`
export const Paragraphs = styled.p`
    font-family: 'Poppins';
    color: #8D8180;
`