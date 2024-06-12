import styled from "styled-components";
import Lawyers from "..//latest-projects/layers-hub.jpeg"
import Arusha from "..//latest-projects/Arusha.jpeg"
import Building from "..//latest-projects/building.jpeg"

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
    align-items: end;
    width: 284px;
    height: 334px;
    background-image: ${(props)=>props.$first ?  `url(${Lawyers})` : (props)=>props.$second ? `url(${Arusha})` : (props)=>props.$third ? `url(${Building})` : 'none'};
    background-size: cover;
    background-position: center;
`
export const ServiceTitle = styled.h3`
    margin-top: ${(props)=>props.$Title ?  '100' :  '50'}px;

    margin-bottom: ${(props)=>props.$Title ?  '70px' : '20px'};

    font-size: ${(props)=>props.$Title ? "30" : "18"}px;
    color: #534847;


`
export const Buttons = styled.button`
    width: 150px;
    height: 55px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 14px;
    color: #534847;
    text-align: left;
    padding-left: 5px;
`

