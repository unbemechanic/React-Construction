import styled from "styled-components";
import Mix from "..//galery/mix.png"


export const MainDiv = styled.div`
    background-color: #f9f9f9;
    height: 816px;
    margin-bottom: 50px;
    margin-right: 80px;
`
export const Background = styled.div`
    background-image: url(${Mix});
    width: 1120px;
    height: 527px;
    
    margin-left: auto;
    padding-bottom: 50px;
    background-size: contain;
   
`

export const Heading = styled.h1`
    margin-bottom: 20px;
    font-size: ${(props)=>props.$h1 ? "30px":"16px"};
    font-weight: ${(props)=>props.$h1 ? "700":"400"};
    max-width: 342px;
    font-family: 'Poppins';
    color: ${(props)=>props.$quality ? "#e2bb4c" : "#534847"};
`

export const TopSec = styled.div`
    display: flex;
    gap: 300px;
    width: 80%;
    margin: 100px auto;
    padding-top: 80px;

`
