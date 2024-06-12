import styled from "styled-components";
import Cafe from '..//home-part4/table.jpeg'

export const InnerDiv = styled.div`
    display: grid;
    justify-content: start;
    align-content: center;
    width: 90%;
    width : 1129px;
    height: 618px;
    background-color: #f9f9f9;
    margin-right: auto;

`

export const Paragraphs = styled.p`
    font-family: 'Poppins';
    color: #8d8180;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 50px;
    max-width: 500px;
    margin-left: auto;
`

export const Heading = styled.h1`
    margin-bottom: 20px;
    font-size: ${(props)=>props.$h1 ? "40px":"16px"};
    font-weight: ${(props)=>props.$h1 ? "700":"400"};
    margin-top: 50PX;
    height: 100px;
    max-width: 342px;
    font-family: 'Poppins';
    color: ${(props)=>props.$quality ? "#e2bb4c" : "#534847"};
    margin-bottom: 50px;
    
`

export const ButtonStyle = styled.button`
    background-color: #E6A859;
    color: white;
    padding: 10px;
    border: #E6A859;
    width: 220px;
    height: 47px;
    margin: auto;
`
export const Home4Pic = styled.div`
    background-image: url(${Cafe});
    background-size: contain;
    background-repeat: no-repeat;
    height: 498px;
    width: 651px;
    position: absolute;
    bottom: 0;
    right: 0;
`
export const InnerDiv2 = styled.div`
    margin-left: 50px;

`