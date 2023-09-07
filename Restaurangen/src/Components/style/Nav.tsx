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
        bottom: 20px;
        font-size: 1rem;
        padding-left: 3.5%;
        font-family: 'Poppins', sans-serif;
    }    

    @media (min-width: 910px) {
        padding-left: 5%;
        font-size: 1.2rem;
    }   
  
    @media (min-width: 1200px) {
        padding-left:7%;
    }

    @media (min-width: 1400px) {
        padding-left: 10%;
        font-size: 1.5rem;
        bottom: 20px;
    }
`



