import styled from "styled-components";

export const HeaderH1 = styled.h1 `
    font-family: 'Lobster', cursive;
`

export const HeaderH2Static = styled.h2`
    display: flex;
    justify-content: center;
    font-family: 'Nixie One', cursive;
    font-size: 1.4rem;

    @media (min-width: 768px) {
        font-size: 2.3rem;
    }

    @media (min-width: 1200px) {
        font-size: 3.5rem;
    }
`

export const HeaderH3Static = styled.h3 `
    font-family: 'Lobster', cursive;
    font-size: 1.5rem;

    @media (min-width: 768px) {
        font-size: 2.0rem;
    }

    @media (min-width: 1200px) {
        font-size: 2.3rem;
    }
`
/*
@media (min-width: 768px) {

}
*/