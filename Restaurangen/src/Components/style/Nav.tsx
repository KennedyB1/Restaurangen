import styled from "styled-components";
    
export const Nav = styled.nav `
    background-color: black;
    position: absolute;
    top: 70px;
    z-index: 10;
    @media (min-width: 820px) {
        display: inline-block;
        top:30px;
        background-color: transparent;
        margin: 0px;
    }
    @media (min-width: 1200px) {
        
    }
`
export const HeaderUl = styled.ul`
    width: 75vw;
    margin: 0px;
    
`

export const HeaderLi = styled.li `
    font-size: 1.1rem;
    margin: 15px;

    @media (min-width: 820px) {
        position: relative;
        display: inline-block;
        bottom: 7px;
        font-size: 1rem;
        padding-left: 3.5%;
        font-family: 'Poppins', sans-serif;
    }    

    @media (min-width: 970px) {
        padding-left: 5%;
        font-size: 1.2rem;
    }   
  
    @media (min-width: 1200px) {
        padding-left: 6%;
    } 

    @media (min-width: 1400px) {
        padding-left: 9%;
        font-size: 1.3rem;
        bottom: 8px;
    }

    @media (min-width: 1500px) {
        padding-left: 10%;
        font-size: 1.3rem;
        bottom: 8px;
    }

    @media (min-width: 1700px) {
        padding-left: 12%;
        font-size: 1.3rem;
        bottom: 8px;
    }
`



