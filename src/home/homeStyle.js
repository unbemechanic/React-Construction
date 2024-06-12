import styled from "styled-components";
import bg from '../../src/home/building1.jpeg'

export const StyleDiv = styled.div`
    width: 500px;
    margin: 100px 20px;
    display: grid;
    grid-template-columns: 1fr 4fr 4fr;
    width: 100%;
    align-items: center;
`
export const CircleDiv = styled.div`
    border-radius: 50%;
    border: 20px solid #6FA9C41A;
    height: 100px;
    width: ${(props)=>props.$small ? "50px" : "100px"};

    margin: -20px 30px;

`
export const Heading = styled.h1`
    margin-bottom: 20px;
    font-size: ${(props)=>props.$h1 ? "55px":"16px"};
    font-weight: ${(props)=>props.$h1 ? "700":"400"};
    max-width: 642px;
    font-family: 'Poppins';
`
export const ImgBuilding = styled.img`
    max-width: 612px;
    height: 773px;
`
export const HomeImg = styled.div`
    background-image: url(${bg});
    height: 773px;
    width: 612px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-radius: 20px 0 0 0;
`
export const ProButton = styled.button`
    width: 323px;
    height: 89px;
    background-color: #f9f9f9;
    border: none;
`

