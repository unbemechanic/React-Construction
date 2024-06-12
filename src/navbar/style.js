import styled from 'styled-components'


export const StyledAnchor = styled.a`
    color: ${(props)=>props.$footerAnchor ? 'white' : "black"};
    text-decoration: none;

`
export const StyledButton = styled.div`
    display: flex;
    column-gap: 30px;
    align-items: center;
    justify-content: end;
    
`
export const ButtonStyle = styled.button`
    background-color: #E6A859;
    color: white;
    padding: 10px;
    border: #E6A859;
    width: ${(props)=>props.$footerB ? '289px' : '117px'};
`
export const MainDiv = styled.div`
    display:'grid';
    grid-template-columns: 1fr 2fr;
    align-items: center;
    margin: 0px 100px;
    
    
`