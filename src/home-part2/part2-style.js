import styled from "styled-components";

export const Heading = styled.h1`
    margin-bottom: 20px;
    font-size: ${(props)=>props.$h1 ? "40px":"16px"};
    font-weight: ${(props)=>props.$h1 ? "700":"400"};
    max-width: 342px;
    font-family: 'Poppins';
    color: ${(props)=>props.$quality ? "#e2bb4c" : "#534847"};
`

export const StyleDiv = styled.div`
    width: 500px;
    margin: 150px 120px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    align-items: center;
`

export const Paragraphs = styled.p`
    font-family: 'Poppins';
    color: #8d8180;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 50px;
    max-width: 600px;
`
export const InnerDiv = styled.div`
    display: grid;
    justify-content: end;
    margin-right: 50px;
    width: 90%;
    
    
`
export const CircleDiv = styled.div`
    border-radius: 50%;
    border: 20px solid #6FA9C41A;
    height: 100px;
    width: ${(props)=>props.$small ? "50px" : "100px"};
    margin-left: 700px;
    
`