import styled from "styled-components";
    
export const Nav = styled.nav `
    background-color: black;
    position: absolute;
    top: 70px;
    z-index: 10;
    @media (min-width: 768px) {
        display: inline-block;
        top:30px;
        background-color: transparent;
    }
    @media (min-width: 1200px) {
        top: 70px;
    }
`
export const HeaderUl = styled.ul`
    width: 50vw;
    
`

export const HeaderLi = styled.li `
    font-size: 1.5rem;
    margin: 15px;

    @media (min-width: 768px) {
        position: relative;
        display: inline-block;
        bottom: 5px;
        font-size: 1rem;
        padding-left: 8%;
        font-family: 'Poppins', sans-serif;
    }    
    @media (min-width: 1200px) {
        bottom: 40px;
        padding-left: 8%;
        font-size: 1.5rem;
    }

    @media (min-width: 1400px) {
        padding-left: 13%;

    }
`



