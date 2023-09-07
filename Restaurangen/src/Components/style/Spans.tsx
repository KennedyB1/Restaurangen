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
    }

    @media (min-width: 1200px) {
        margin-left: 12%;
    } 
`
