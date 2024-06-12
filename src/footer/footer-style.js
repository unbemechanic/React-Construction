import styled from "styled-components";

export const MainFooter = styled.div`
    height: 557px;
    width: 1442px;
    background-color: #282322;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
`

export const FooterP = styled.p`
    font-family: ${(props)=>props.$heading ? "Raleway" : "Poppins"};
    font-weight: ${(props)=>props.$heading ? "700" : "400"};
    font-size: ${(props)=>props.$heading ? "20px" : "16px"};
    color: #fff;
    margin-bottom: ${(props)=>props.$heading ? "50px" : "0"};
    margin-top: ${(props)=>props.$heading ? "50px" : "0"};
    width: ${(props)=>props.$reserved ? '373px' : '100%'};
`
export const Littles = styled.div`
    width: 317px;
    height: 200px;
    display: grid;
    margin-left: ${(props)=>props.$left ? '80px' : '0'};
`
export const Input = styled.input`
    width: 289px;
    height: 47px;
    margin: 15px 0px;
`

export const Socials = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

export const Reserved = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 200px;
   
`
export const Main = styled.div`
    width: 1442px;
    margin: auto;
`