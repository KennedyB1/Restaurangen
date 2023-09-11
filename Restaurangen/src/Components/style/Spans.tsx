import styled from "styled-components";

export const FooterSpan = styled.span `
    text-decoration: none;
    position: relative;
    bottom: 25px;
    font-family: 'Poppins', sans-serif;
    color: #F3EDC9;
    margin-left: 2%;
    font-size: small;

    @media (min-width: 768px) {
        margin-left: 7.5%;
        font-size: medium;
        bottom: 16px;
    }

    @media (min-width: 1200px) {
        margin-left: 12%;
    } 
`

export const DarkSpan = styled.span `
    color: black;
    position: relative;
    top: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    padding-right: 30px;
`