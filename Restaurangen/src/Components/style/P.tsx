import styled from "styled-components";

export const Paragraf = styled.p `
font-family: 'Poppins', sans-serif;
font-size: 1rem;

    @media (min-width: 1200px) {
        font-size: 1.5rem;
    }
`

export const MenuParagraf = styled(Paragraf) `

    @media (min-width: 1200px) {
        display: flex;
        position: relative;
        top: 20px;
        left: 20px;
        font-size: 1.3rem;
    }
`

export const LightP = styled(Paragraf) `
    color: #F3EDC9;
`
export const LightPCentered = styled(LightP) `
text-align: center;`;

export const LightPSmall = styled(LightP) `
    font-size: 0.8rem;
`
