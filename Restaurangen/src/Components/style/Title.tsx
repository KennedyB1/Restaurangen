import styled from "styled-components";

export const HeaderH1 = styled.h1 `
    display: inline-block;
    position: relative;
    font-size: 4rem;
    bottom: 30px;
    font-family: 'Lobster', cursive;
    color: #F3EDC9;
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
        margin-bottom: 0px;
    }
`

export const HeaderH2Menu = styled(HeaderH2Static)`
    @media (min-width: 1200px) {
        margin-bottom: 20px;
    }
`

export const HeaderH3Static = styled.h3 `
    font-family: 'Lobster', cursive;
    font-size: 1.5rem;

    @media (min-width: 768px) {
        font-size: 1.6rem;
    }

    @media (min-width: 1200px) {
        font-size: 2.3rem;
    }
`

export const HeaderH3Menu = styled(HeaderH3Static) `

    @media (min-width: 768px) {
    }

    @media (min-width: 1200px) {
        font-size: 2rem;
    }
`
/*
@media (min-width: 768px) {

}
*/