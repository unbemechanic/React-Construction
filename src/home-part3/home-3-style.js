import styled from "styled-components";
import Furniture from '..//..//src//home-part3/furniture.jpeg'

export const InnerDiv = styled.div`
    display: grid;
    justify-content: end;
    align-content: center;
    margin-right: 50px;
    width: 90%;
    width : 1129px;
    height: 618px;
    background-color: #f9f9f9;
    margin-left: auto;
`

export const Paragraphs = styled.p`
    font-family: 'Poppins';
    color: #8d8180;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 50px;
    max-width: 600px;
`

export const Heading = styled.h1`
    margin-bottom: 20px;
    font-size: ${(props)=>props.$h1 ? "40px":"16px"};
    font-weight: ${(props)=>props.$h1 ? "700":"400"};
    margin-bottom: 50px;
    height: 100px;
    max-width: 342px;
    font-family: 'Poppins';
    color: ${(props)=>props.$quality ? "#e2bb4c" : "#534847"};
`

export const ButtonStyle = styled.button`
    background-color: #E6A859;
    color: white;
    padding: 10px;
    border: #E6A859;
    width: 220px;
    height: 47px;
`
export const Home3Pic = styled.div`
    background-image: url(${Furniture});
    height: 498px;
    width: 651px;
    position: absolute;
    bottom: 0;
`