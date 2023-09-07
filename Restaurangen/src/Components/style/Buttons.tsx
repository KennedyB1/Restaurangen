import styled from "styled-components";

export const Button = styled.button `
    font-family: 'Poppins', sans-serif;
    border: black 1px solid;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
`

export const ButtonYellow = styled(Button) `
    background-color: #FFCF00;
    color: #0E0E0E;
`

export const HeaderButtonYellow = styled(ButtonYellow) `
    display: flex;
    position: relative;
    bottom: 62px;
    left: 70%;
    font-size: 0.8rem;
    width: 70px;
    padding-left: 15px;

    @media (min-width: 768px) {
        font-size: 1rem;
        bottom: 65px;
        left: 80%;
        width: 100px;
    }

    @media (min-width: 1200px) {
        left: 87%;
        bottom:150px;
        font-size: 1.5rem;
        width: 130px;
    }
`

export const ButtonGreen = styled(Button) `
    background-color: #01A56A;
`

export const ButtonRed = styled(Button) `
    background-color: #924C4C;
`