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
    bottom: 150px;
    left: 85%;
    font-size: 2rem;
    width: 172px;
    padding-left: 15px;
`

export const ButtonGreen = styled(Button) `
    background-color: #01A56A;
`

export const ButtonRed = styled(Button) `
    background-color: #924C4C;
`